import { Skeleton } from "./ui/skeleton";

export default async function SkeletonCard({ order }: { order: string }) {
    return (
        <Skeleton className="w-full h-32 flex justify-center items-center text-center font-semibold">
            <span>Loading order: {order}</span>
        </Skeleton>
    )
}
