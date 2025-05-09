import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogpostCard from "@/components/general/BlogpostCard";
import { Plus } from "lucide-react";

async function getDashboardData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function DashboradRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const blogPostData = await getDashboardData(user?.id as string);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href={"/dashboard/create"}>
          <Plus />
          Create Post
        </Link>
      </div>

      {/* BlogPost data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPostData.length > 0 &&
          blogPostData.map((blog) => (
            <BlogpostCard blogPost={blog} key={blog.id} />
          ))}
      </div>
    </>
  );
}
