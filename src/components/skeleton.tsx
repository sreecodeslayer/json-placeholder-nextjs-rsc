import { JSX } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingSkeleton = (props: JSX.IntrinsicAttributes & SkeletonProps) => {
  return <Skeleton {...props} />
}
