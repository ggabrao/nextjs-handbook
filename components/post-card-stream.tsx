import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { slowFetch } from "@/lib/slow-fetch";

export default async function PostCardStream({ id, delay }: { id: number, delay: number }) {
    const postId = id;
    const post = await slowFetch(async () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`), delay).then(res => res.json());

    return (
        <Card className="w-full h-32 flex justify-center text-center">
            <CardHeader>
                <CardTitle>Card ID: {post.id}</CardTitle>
            </CardHeader>
        </Card>
    )
}
