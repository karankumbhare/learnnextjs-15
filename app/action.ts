"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export const handleSumbitForm = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/register");
  }

  const blogTitle = formData.get("title")?.toString().trim();
  const blogContent = formData.get("content")?.toString().trim();
  const blogImage = formData.get("image_URL")?.toString().trim();

  if (!blogTitle || !blogContent || !blogImage) {
    throw new Error("All fields are required.");
  }

  await prisma.blogPost.create({
    data: {
      title: blogTitle as string,
      content: blogContent as string,
      imageURL: blogImage as string,
      authorId: user.id as string,
      authorName: user.given_name as string,
      authorAvatar: user.picture as string,
    },
  });

  return redirect("/dashboard");
};
