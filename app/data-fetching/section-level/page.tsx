export const dynamic = 'force-dynamic';

import PostCardStream from "@/components/post-card-stream";
import PostsWrapper from "@/components/posts-wrapper";
import SkeletonCard from "@/components/skeleton-card";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Section level streaming</h2>
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
