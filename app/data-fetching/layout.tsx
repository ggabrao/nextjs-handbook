import Link from "next/link";
import { ReactNode } from "react";

export default function DataFetchingLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="lg:text-lg">
                <div className="flex flex-col pt-4">
                    <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Data Fetching</h2>
                </div>
            </div>
            <nav className="flex flex-col gap-2">
                <Link href="/data-fetching/no-streaming">No streaming</Link>
                <Link href="/data-fetching/page-level">Page level streaming</Link>
                <Link href="/data-fetching/component-level">Compoment level streaming</Link>
                <Link href="/data-fetching/section-level">Section level streaming</Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}