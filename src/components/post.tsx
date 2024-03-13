"use client";
import { PostType } from "@/lib/jsonplaceholder";
import Link from "next/link";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="w-full bg-slate-100 rounded-md p-4 hover:shadow-lg hover:shadow-slate-200 hover:cursor-pointer">
        <h3 className="text-md text-semibold">{post.title}</h3>
        <p className="text-xs text-light">{post.body}</p>
      </div>
    </Link>
  );
};
