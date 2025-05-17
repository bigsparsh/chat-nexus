"use server"
import { prisma } from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server"

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return;

  // Fetch user from DB
  const dbUser = await prisma.user.findUnique({
    where: {
      user_id: user.id
    }
  })

  // If user not exist in DB then create
  if (!dbUser) {
    const newUser = await prisma.user.create({
      data: {
        user_id: user.id,
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
        name: `${user.fullName}`
      }
    })
    return {
      usernew: true,
      user: newUser
    }
  }

  // If user exists in DB then return
  return {
    usernew: true,
    user: dbUser
  }
}

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      user_id: true,
      email: true,
      image: true,
      phone: true,
      address: true,
      name: true,
      posts: true
    }
  })
  return users;
}

export const getUserGraph = async () => {
  const user = await currentUser();
  if (!user) return;

  const graph = await prisma.user.findUnique({
    where: {
      user_id: user.id
    },
    select: {
      user_id: true, // Layer 1
      user2: {
        select: {
          mutual: true,
          user2: {
            select: {
              user_id: true, // Layer 2
              user2: {
                select: {
                  mutual: true,
                  user2: {
                    select: {
                      user_id: true, // Layer 3
                      user2: {
                        select: {
                          mutual: true,
                          user2: {
                            select: {
                              user_id: true, // Layer 4
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })
  return graph;
}
