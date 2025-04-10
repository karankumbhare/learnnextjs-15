import Image from "next/image";
import Link from "next/link";

interface BlogpostCardProps {
  blogPost: {
    id: string;
    title: string;
    content: string;
    imageURL: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogpostCard = ({ blogPost }: BlogpostCardProps) => {
  console.log(blogPost);
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
        <Link href={`/post/${blogPost.id}`} className="block w-full h-full">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={blogPost.imageURL}
              alt="Blogpost Image"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {blogPost.title}
            </h3>
            <p className="mb-4 text-sm text-gray-500 font-medium opacity-65 line-clamp-2">
              {blogPost.content}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative size-8 overflow-hidden rounded-full">
                  <Image
                    src={
                      blogPost.authorAvatar ||
                      "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    }
                    alt={blogPost.authorName as string}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {blogPost.authorName}
                </p>
              </div>

              <time className="text-xs text-gray-500">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(blogPost.createdAt)}
              </time>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogpostCard;
