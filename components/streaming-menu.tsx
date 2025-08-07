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
    const pathname = usePathname() + '#testing';

    return (
        <nav className="flex justify-center items-center text-center">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-12 border grow items-center justify-center p-3 text-sm font-medium hover:text-primary hover:bg-primary-foreground dark:hover:text-primary-foreground dark:hover:bg-primary',
                            {
                                'text-primary bg-primary-foreground dark:text-primary-foreground dark:bg-primary': pathname === link.href,
                            },
                        )}>
                        <p className="">{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}
