import { Loader } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center pt-8 gap-2">
            <Loader className="animate-spin" />
            <p className="text-lg font-semibold">Page loading...</p>
        </div>
    );
}