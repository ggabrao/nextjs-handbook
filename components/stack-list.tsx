import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function StackList() {
    return (
        <ul>
            <div className="mb-2 lg:mb-4">
                <p>The stack I have been using is: <span className="hidden sm:inline-block text-sm italic font-semibold">(click the topics for more details)</span></p>
                <p className="text-xs italic font-semibold sm:hidden">(click the topics for more details)</p>
            </div>
            <li className="mb-2 lg:mb-4">
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>👉</span>
                        <span className="hover:underline">Next.js</span>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>👍 Allows developers to build full-stack applications using React</p>
                            <p>👍 Leverages many advanced React features such as React Server Components and Suspense</p>
                            <p>👍 Gives us many optimizations out of the box</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
            <li className="mb-2 lg:mb-4">
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>👉</span>
                        <span className="hover:underline">Shadcn/ui</span>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>👍 Open Source</p>
                            <p>👍 Uses Tailwind CSS</p>
                            <p>👍 Deeply integrated with Vercel ecossystem</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
            <li className="mb-2">
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>👉</span>
                        <span className="hover:underline">Supabase</span>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>👍 Good free tier plan</p>
                            <p>👍 Easy setup with Next.js and Shadcn</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
        </ul>
    )
}
