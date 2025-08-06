import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThumbsUpIcon } from "lucide-react";
import StreamingMenu from "@/components/streaming-menu";

export default function StreamingLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="flex flex-col pt-4 lg:pt-12">
                <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Streaming</h2>
            </div>
            <p className="lg:text-lg">
                Streaming is recommended to prevent slow data requests from blocking the whole page, and to allow interaction with the UI without waiting for everything to load.
                There are three ways of implementing it:
            </p>
            <div className="my-6 w-full overflow-y-auto">
                <table className="w-full">
                    <thead>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                Strategy
                            </th>
                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                Effect
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                At the Page level
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                The whole page is streamed. The content will be displayed <span className="font-semibold">all at once</span>.
                            </td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                At the Component level
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Each component is streamed individually. That may lead to parts of the UI <span className="font-semibold">popping</span> as each component is ready.
                            </td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                At the Section level
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Page sections are streamed using wrappers. That may create a <span className="font-semibold">staggered effect</span>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Alert variant="default">
                <ThumbsUpIcon className="lg:scale-125" />
                <AlertTitle className="lg:text-base">Good Practice</AlertTitle>
                <AlertDescription className="text-foreground lg:text-base">It may vary depending on the application, but generally it is a good practice to use the Component level strategy.</AlertDescription>
            </Alert>

            <h3 id="testing" className="text-xl font-semibold mt-8 mb-1">📋 Testing</h3>
            <p className="lg:text-lg lg:mb-2">
                Click on the tabs and check the results below:
            </p>
            <StreamingMenu />
            <div className="min-h-80">
                {children}
            </div>
        </div >
    )
}
