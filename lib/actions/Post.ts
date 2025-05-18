"use server"
import { prisma } from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { put } from "@vercel/blob"

export const createPost = async ({
  file, message,
}: {
  file?: File,
  message?: string
}) => {
  const user = await currentUser();

  if (!file) console.log("File not found");
  const image = await put("post-cover" + crypto.randomUUID(), file as File, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN as string,
  })

  await prisma.post.create({
    data: {
      message: message || null,
      image: image.url,
      userId: user?.id as string,
    }
  })

}

export const getPosts = async () => {
  const posts = await prisma.post.findMany({

    include: {
      user: true
    }
  });
  return posts;
}
