import PostCardStream from "@/components/post-card-stream";
import SkeletonCard from "@/components/skeleton-card";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Component level streaming</h2>
        <div className="col-span-12">
          <Suspense fallback={<SkeletonCard order="2" />}>
            <PostCardStream id={7} delay={6000} />
          </Suspense>
        </div>
        <div className="flex gap-3 mt-3">
          <Suspense fallback={<SkeletonCard order="1" />} >
            <PostCardStream id={8} delay={3000} />
          </Suspense>
          <Suspense fallback={<SkeletonCard order="3" />} >
            <PostCardStream id={9} delay={9000} />
          </Suspense>
        </div>
      </div>
    </main >
  );
}
