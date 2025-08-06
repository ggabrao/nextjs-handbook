import PostCard from "@/components/post-card";
import { slowFetch } from "@/lib/slow-fetch";

export const revalidate = 0;

export default async function Page() {
  const [post1, post2, post3] = await Promise.all([
    slowFetch(async () => fetch('https://jsonplaceholder.typicode.com/posts/4'), 1500).then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/5').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/6').then(res => res.json()),
  ]);

  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
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
