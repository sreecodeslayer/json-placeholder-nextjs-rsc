import { PostType, UserType, getPost, getUser } from "@/lib/jsonplaceholder"

import { AuthorDetails, LoadingAuthorSkeleton } from "@/src/components/author-details"
import { LoadingPostCommentsListSkeleton, PostCommentsList } from "@/src/components/post-comments-list"
import { LoadingPostDetailsSkeleton, PostDetails } from "@/src/components/post-details"
import { Suspense } from "react"

export const PostWithComments = async ({postId}: {postId: string}) => {
  // load post
  const post: PostType = await getPost(postId)

  // load author
  const author: UserType = await getUser(post.userId)

  return <div className="w-full flex flex-col gap-2 pt-6 px-2">
    <div className="flex flex-col gap-2">
      <PostDetails post={post} />
      <AuthorDetails author={author} />
    </div>
    <hr className="w-full border-t border-slate-200 my-2" />
    <div className="flex flex-col h-[75vh]">
      <Suspense fallback={<LoadingPostCommentsListSkeleton />} >
        <PostCommentsList key={post.id} post={post} />
      </Suspense>
    </div>
  </div>
}


export const LoadingPostWithCommentsSkeleton = () => {
  return <div className="w-full flex flex-col gap-2 pt-6 px-2">
    <div className="flex flex-col gap-2">
      <LoadingPostDetailsSkeleton />
      <LoadingAuthorSkeleton />
    </div>
    <hr className="w-full border-t border-slate-200 my-2" />
    <div className="flex flex-col h-[75vh]">
      <LoadingPostCommentsListSkeleton />
    </div>
  </div>
}
