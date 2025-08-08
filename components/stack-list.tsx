import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function StackList() {
    return (
        <ul>
            <li className="mb-4">
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>🔸</span>
                        <span className="hover:underline">Next.js</span>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-80 sm:w-96 lg:w-full">
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>🚀 Allows developers to build full-stack applications using React</p>
                            <p>🚀 Leverages many advanced React features such as React Server Components and Suspense</p>
                            <p>🚀 Gives us many optimizations out of the box</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
            <li className="mb-4">
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>🔸</span>
                        <span className="hover:underline">Shadcn/ui</span>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-80 sm:w-96 lg:w-full">
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>🚀 Open Source</p>
                            <p>🚀 Uses Tailwind CSS</p>
                            <p>🚀 Deeply integrated with Vercel ecosystem</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
            <li>
                <Popover>
                    <PopoverTrigger className="flex items-center gap-1 hover:cursor-pointer">
                        <span>🔸</span>
                        <span className="hover:underline">Supabase</span>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-80 sm:w-96 lg:w-full">
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>🚀 Good free tier plan for starter projects</p>
                            <p>🚀 Easy setup with Next.js and Shadcn</p>
                            <p>🚀 Provides authentication, database, and real-time features out of the box</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </li>
        </ul>
    )
}
