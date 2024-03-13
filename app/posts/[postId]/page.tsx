import { LoadingPostWithCommentsSkeleton, PostWithComments } from "@/src/components/post-with-comments";
import { Suspense, lazy } from "react";

// try lazy loading by removing the import from top and un-comment the line below
// const PostWithComments = lazy(() => import('@/src/components/post-with-comments').then(module => ({ default: module.PostWithComments })))

export default function PostItemPage({ params: {postId} }: { params: { postId: string } }) {
  return <Suspense fallback={<LoadingPostWithCommentsSkeleton />}>
    <PostWithComments key={postId} postId={postId} />
  </Suspense>
}
