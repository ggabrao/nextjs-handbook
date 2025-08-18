import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThumbsUpIcon } from "lucide-react";
import StreamingMenu from "@/components/streaming-menu";

import { Metadata } from "next";
import { AnimatedContainer } from "@/components/animated-container";

export const metadata: Metadata = {
    title: 'Streaming',
};

export default function StreamingLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <AnimatedContainer>
                <div className="flex flex-col pt-4 lg:pt-12">
                    <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Streaming</h2>
                </div>
                <p className="lg:text-lg">
                    Streaming is recommended to prevent slow data requests from blocking the whole page, and to allow interaction with the UI without waiting for everything to load.
                    There are three ways of implementing it:
                </p>
                <div className="mt-6 w-full overflow-x-auto lg:mt-8">
                    <table className="w-full min-w-[600px] text-sm lg:text-base">
                        <thead>
                            <tr className="even:bg-muted m-0 border-t p-0">
                                <th className="border px-3 py-2 text-left font-bold w-[25%] [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Strategy
                                </th>
                                <th className="border px-3 py-2 text-left font-bold w-[30%] [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Implementation
                                </th>
                                <th className="border px-3 py-2 text-left font-bold w-[45%] [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Effect
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-muted m-0 border-t p-0">
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    At the Page level <span className="italic">(most basic)</span>
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Add a <code className="text-xs bg-muted px-1 rounded">loading.tsx</code>
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    The whole page is streamed. The content will be displayed <span className="font-semibold">all at once</span>, so a slower data fetch in one of the components may lead to a <span className="text-destructive">longer loading time</span>.
                                </td>
                            </tr>
                            <tr className="even:bg-muted m-0 border-t p-0">
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    At the Component level
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Wrap each component in <code className="text-xs bg-muted px-1 rounded">&lt;Suspense&gt;</code> and fetch data in the components
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Each component is streamed individually. That may lead to parts of the UI <span className="font-semibold">popping in</span> as each component gets ready.
                                </td>
                            </tr>
                            <tr className="even:bg-muted m-0 border-t p-0">
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    At the Section level
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    Wrap the section in <code className="text-xs bg-muted px-1 rounded">&lt;Suspense&gt;</code> and fetch data in the section
                                </td>
                                <td className="border px-3 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    The section is streamed, so the components inside of it will be displayed at the same time. That may create a more <span className="font-semibold">staggered effect</span> in the UI.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Alert variant="default" className="bg-secondary text-primary mt-9 2xl:max-w-lg">
                    <ThumbsUpIcon className="lg:scale-125 " />
                    <AlertTitle className="text-foreground text-base">Good Practice</AlertTitle>
                    <AlertDescription className="text-foreground lg:text-base">It may vary depending on the application, but generally it is a good practice to use the Component level strategy.</AlertDescription>
                </Alert>

                <h3 id="testing" className="font-semibold mt-12 mb-2 lg:mb-1 lg:text-xl">📋 Examples</h3>
                <p className="mb-4 lg:text-lg lg:mb-2">
                    Click on the tabs below to see the different streaming effects in action:
                </p>
                <StreamingMenu />
            </AnimatedContainer>
            <div className="min-h-80">
                {children}
            </div>
        </div >
    )
}
