"use server"
import { prisma } from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server"

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return;

  // Fetch user from DB
  const newUser = await prisma.user.upsert({
    where: {
      user_id: user.id
    },
    create: {
      user_id: user.id,
      email: user.emailAddresses[0].emailAddress,
      image: user.imageUrl,
      name: `${user.fullName}`
    },
    update: {
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

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      user_id: true,
      email: true,
      image: true,
      phone: true,
      address: true,
      name: true,
      posts: true,
      user1: {
        select: {
          mutual: true,
          user1_id: true,
          user2_id: true,
        }
      },
      user2: {
        select: {
          mutual: true,
          user1_id: true,
          user2_id: true,
        }
      },
    }
  })
  return users;
}

export const getCurrentUser = async () => {
  return await currentUser();
}

export const getUserGraph = async (user_id?: string) => {
  const user = await currentUser();
  if (!user) return;

  const graph = await prisma.friend.findMany({
    where: {
      OR: [
        {
          user1_id: user_id || user.id,
        },
        {
          user2_id: user_id || user.id
        }
      ]
    },
    select: {
      mutual: true,
      user1: {
        select: {
          email: true,
          user_id: true,
          name: true,
          image: true,
        }
      },
      user2: {
        select: {
          email: true,
          user_id: true,
          name: true,
          image: true,
        }
      },
    }
  })
  return graph;
}
