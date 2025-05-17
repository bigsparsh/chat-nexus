/*
  Warnings:

  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `CommentPreference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CommentPreference` table. All the data in the column will be lost.
  - The primary key for the `Friend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Friend` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `PostPreference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PostPreference` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `comment_id` was added to the `Comment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `comment_preference_id` was added to the `CommentPreference` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `friend_id` was added to the `Friend` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `post_id` was added to the `Post` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `post_preference_id` was added to the `PostPreference` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "CommentPreference" DROP CONSTRAINT "CommentPreference_commentId_fkey";

-- DropForeignKey
ALTER TABLE "CommentPreference" DROP CONSTRAINT "CommentPreference_userId_fkey";

-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_user1_id_fkey";

-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_user2_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostPreference" DROP CONSTRAINT "PostPreference_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostPreference" DROP CONSTRAINT "PostPreference_userId_fkey";

-- DropIndex
DROP INDEX "Comment_id_idx";

-- DropIndex
DROP INDEX "CommentPreference_id_idx";

-- DropIndex
DROP INDEX "Friend_id_idx";

-- DropIndex
DROP INDEX "Post_id_idx";

-- DropIndex
DROP INDEX "PostPreference_id_idx";

-- DropIndex
DROP INDEX "User_id_idx";

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "comment_id" TEXT NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id");

-- AlterTable
ALTER TABLE "CommentPreference" DROP CONSTRAINT "CommentPreference_pkey",
DROP COLUMN "id",
ADD COLUMN     "comment_preference_id" TEXT NOT NULL,
ADD CONSTRAINT "CommentPreference_pkey" PRIMARY KEY ("comment_preference_id");

-- AlterTable
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_pkey",
DROP COLUMN "id",
ADD COLUMN     "friend_id" TEXT NOT NULL,
ADD CONSTRAINT "Friend_pkey" PRIMARY KEY ("friend_id");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "PostPreference" DROP CONSTRAINT "PostPreference_pkey",
DROP COLUMN "id",
ADD COLUMN     "post_preference_id" TEXT NOT NULL,
ADD CONSTRAINT "PostPreference_pkey" PRIMARY KEY ("post_preference_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateIndex
CREATE INDEX "Comment_comment_id_idx" ON "Comment"("comment_id");

-- CreateIndex
CREATE INDEX "CommentPreference_comment_preference_id_idx" ON "CommentPreference"("comment_preference_id");

-- CreateIndex
CREATE INDEX "Friend_friend_id_idx" ON "Friend"("friend_id");

-- CreateIndex
CREATE INDEX "Post_post_id_idx" ON "Post"("post_id");

-- CreateIndex
CREATE INDEX "PostPreference_post_preference_id_idx" ON "PostPreference"("post_preference_id");

-- CreateIndex
CREATE INDEX "User_user_id_idx" ON "User"("user_id");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_user1_id_fkey" FOREIGN KEY ("user1_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_user2_id_fkey" FOREIGN KEY ("user2_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostPreference" ADD CONSTRAINT "PostPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostPreference" ADD CONSTRAINT "PostPreference_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentPreference" ADD CONSTRAINT "CommentPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentPreference" ADD CONSTRAINT "CommentPreference_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("comment_id") ON DELETE CASCADE ON UPDATE CASCADE;
