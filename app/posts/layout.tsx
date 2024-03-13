import { LoadingPostsSkeleton } from "@/src/components/posts"
import { Metadata } from "next"
import { Suspense, lazy } from "react"

const Posts = lazy(() => import('@/src/components/posts').then(module => ({ default: module.Posts })))

export const metadata: Metadata = {
  title: {
    template: "%s | JSONPlaceholder",
    absolute: "Posts | JSONPlaceholder",
  },
}

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-h-screen p-2 flex flex-row gap-2">
      {/*   left side listing layout */}
      <div className="w-1/3 flex flex-col gap-2">
        <h1>Posts</h1>
        <Suspense fallback={<LoadingPostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
      {/*   right side post item layout */}
      <div className="w-2/3 flex flex-col gap-2">
        {children}
      </div>
    </div>
  )
}
