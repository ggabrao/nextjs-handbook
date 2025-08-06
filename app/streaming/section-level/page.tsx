import PostCardStream from "@/components/post-card-stream";
import PostsWrapper from "@/components/posts-wrapper";
import SkeletonCard from "@/components/skeleton-card";
import { Suspense } from "react";

export const revalidate = 0;

export default async function Page() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <div>
          <Suspense fallback={<SkeletonCard order="1" />}>
            <PostCardStream id={10} delay={3000} />
          </Suspense>
        </div>
        <div className="mt-3">
          <Suspense fallback={<SkeletonCard order="2" />}>
            <PostsWrapper />
          </Suspense>
        </div>
      </div>
    </main >
  );
}
