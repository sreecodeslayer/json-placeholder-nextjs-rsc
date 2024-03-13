import "server-only";
import { PostType, getPosts } from "@/lib/jsonplaceholder";
import { Post } from "@/src/components/post";

export const Posts = async () => {
  const posts: PostType[] = await getPosts();
  return (
    <div className="w-full h-full pr-2 flex flex-col gap-4 overflow-y-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
