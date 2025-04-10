import { handleSumbitForm } from "@/app/action";
import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogPostRoute() {
  return (
    <>
      <Card className="max-w-lg mx-auto border p-6">
        <CardHeader className="flex flex-col gap-2 mb-6 justify-center items-center">
          <CardTitle className="text-xl font-bold">Create Post</CardTitle>
          <CardDescription className="text-sm font-normal text-gray-400">
            Create a new post to share with world 🌍 !!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <form className="flex flex-col gap-4" action={handleSumbitForm}>
            <div className="flex flex-col gap-3">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
                className="py-2 rounded px-2 border"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
                rows={8}
                className="py-2 rounded px-2 border"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Image URL</Label>
              <Input
                name="image_URL"
                required
                type="url"
                placeholder="Image URL"
                className="py-2 rounded px-2 border"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </>
  );
}
