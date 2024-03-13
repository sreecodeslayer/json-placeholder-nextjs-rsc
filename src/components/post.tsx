"use client"
import { PostType } from '@/lib/jsonplaceholder'
import Link from 'next/link'
import { LoadingSkeleton } from './skeleton'

export const Post = ({post}: {
  post: PostType
}) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="w-full bg-slate-100 rounded-md p-4 hover:shadow-lg hover:shadow-slate-200 hover:cursor-pointer">
        <h3 className="text-md text-semibold">{post.title}</h3>
        <p className="text-xs text-light">{post.body}</p>
      </div>
    </Link>
  )
}

export const LoadingPostSkeleton = () => {
  return <div className="w-full flex flex-col bg-slate-100 rounded-md p-4">
    <LoadingSkeleton containerClassName="h-fit w-full" />
    <LoadingSkeleton containerClassName="h-fit w-3/4" height={10} />
    <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
    <LoadingSkeleton containerClassName="h-fit w-1/4" height={10} />
  </div>
}
