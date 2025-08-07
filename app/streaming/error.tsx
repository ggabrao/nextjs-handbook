'use client';

import { ServerCrashIcon } from 'lucide-react';

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {

    return (
        <main className="flex h-full flex-col items-center justify-center py-4">
            <ServerCrashIcon />
            <span className='text-red-500 font-semibold mt-3'>Error: {error.message}</span>
        </main>
    );
}
