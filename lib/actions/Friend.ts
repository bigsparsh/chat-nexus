"use server"

import { prisma } from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server"

export const createFriend = async ({ friend_id }: { friend_id: string }) => {
  const user = await currentUser();
  if (!user) return;
  const existingFriendship = await prisma.friend.findFirst({
    where: {
      user1_id: friend_id,
      user2_id: user.id
    }
  })
  console.log(existingFriendship)
  if (existingFriendship) {
    return await prisma.friend.update({
      where: {
        friend_id: existingFriendship.friend_id,
      },
      data: {
        mutual: true
      }
    })
  }
  return await prisma.friend.create({
    data: {
      user1_id: user.id,
      user2_id: friend_id,
      mutual: false
    }
  })
}
