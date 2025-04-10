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
      imageURL:
        (blogImage as string) ||
        "https://isbndb.com/blog/wp-content/uploads/2024/04/book-cover-image.jpg",
      authorId: user.id as string,
      authorName: user.given_name as string,
      authorAvatar:
        (user.picture as string) ||
        "https://imgs.search.brave.com/7_-25qcHnU9PLXYYiiK-IwkQx93yFpp__txSD1are3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzYz/LzM2MF9GXzY0Njc2/MzgzX0xkYm1oaU5N/NllwemIzRk00UFB1/RlA5ckhlN3JpOEp1/LmpwZw",
    },
  });

  return redirect("/dashboard");
};
