import { slowFetch } from "@/lib/slow-fetch";
import PostCard from "./post-card";

export default async function PostsWrapper() {
    const [post1, post2] = await Promise.all([
        slowFetch(async () => fetch('https://jsonplaceholder.typicode.com/posts/11'), 6000).then(res => res.json()),
        slowFetch(async () => fetch('https://jsonplaceholder.typicode.com/posts/12'), 6000).then(res => res.json())
    ]);

    return (
        <div className="flex gap-3">
            <PostCard post={post1} />
            <PostCard post={post2} />
        </div>
    )
}