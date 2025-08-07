import { Button } from '@/components/ui/button';
import { FileQuestionMarkIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2 py-10">
            <FileQuestionMarkIcon className="w-10 text-gray-400" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Could not find the requested page.</p>
            <Button asChild>
                <Link href="/">Go Back</Link>
            </Button>
        </main>
    );
}
