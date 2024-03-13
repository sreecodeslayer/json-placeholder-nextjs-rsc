import "server-only";
import { LoadingPostWithCommentsSkeleton } from "@/src/components/post-with-comments";
import { Suspense, lazy } from "react";

const PostWithComments = lazy(() =>
  import("@/src/components/post-with-comments").then((module) => ({
    default: module.PostWithComments,
  }))
);

export default function PostItemPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return (
    <Suspense fallback={<LoadingPostWithCommentsSkeleton />}>
      <PostWithComments key={postId} postId={postId} />
    </Suspense>
  );
}
