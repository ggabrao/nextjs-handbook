'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Page level', href: "/streaming/page-level#testing" },
    { name: 'Compoment level', href: "/streaming/component-level#testing" },
    { name: 'Section level', href: "/streaming/section-level#testing" },
];

export default function StreamingMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center items-center text-center">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-12 grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}>
                        <p className="">{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}
