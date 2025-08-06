import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Post } from "@/lib/types"

export default function PostCard({ post }: { post: Post }) {
    const { id } = post;
    return (
        <Card className="w-full h-32 flex justify-center text-center">
            <CardHeader>
                <CardTitle>Card ID: {id}</CardTitle>
            </CardHeader>
        </Card>
    )
}
