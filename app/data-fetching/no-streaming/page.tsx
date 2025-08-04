import PostCard from "@/components/post-card";
import { slowFetch } from "@/lib/slow-fetch";

export default async function Page() {
  const post1 = await slowFetch(async () => fetch('https://jsonplaceholder.typicode.com/posts/1'), 1500).then(res => res.json());
  const post2 = await fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json());
  const post3 = await fetch('https://jsonplaceholder.typicode.com/posts/3').then(res => res.json());

  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">No streaming</h2>
        <div className="grid grid-col-12 gap-3">
          <div className="col-span-12">
            <PostCard post={post1} />
          </div>
          <div className="col-span-6">
            <PostCard post={post2} />
          </div>
          <div className="col-span-6">
            <PostCard post={post3} />
          </div>
        </div>
      </div>
    </main >
  );
}
