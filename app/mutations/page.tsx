import { AnimatedContainer } from "@/components/animated-container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import UpdateForm from "@/components/update-form";
import UpdateFormNoRevalidation from "@/components/update-form-no-revalidation";
import { InfoIcon, NotebookPenIcon } from "lucide-react";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Mutations',
};

export default function MutationsPage() {
  return (
    <main className="lg:text-lg">
      <AnimatedContainer>
        <div className="flex flex-col pt-4 lg:pt-12">
          <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Mutations</h2>
          <p className="mb-4 lg:mb-8 lg:text-lg">Advantages of using <strong>Server Actions</strong> for data mutations:</p>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-base">No API endpoints</Badge>
              <p className="ml-1 text-sm lg:text-lg lg:pt-0.5">Server Actions allow you to run asynchronous code directly on the server, eliminating the need of API entpoints to mutate data.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-base">Progressive enhancement</Badge>
              <p className="ml-1 text-sm lg:text-lg lg:pt-0.5">Invoking a Server Action within a Server Component allow forms to work even if JavaScript has not yet loaded on the client.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-base">Caching</Badge>
              <p className="ml-1 text-sm lg:text-lg lg:pt-0.5">Server Actions are deeply integrated with Next.js caching.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-base">Revalidations</Badge>
              <p className="ml-1 text-sm lg:text-lg lg:pt-0.5">When a form is submitted through a Server Action, you can also revalidate the associated cache using APIs like revalidatePath and revalidateTag.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6 lg:mt-20">
          <div className="lg:flex lg:gap-16">
            <div className="lg:max-w-96">
              <Card>
                <CardHeader>
                  <CardTitle className="lg:text-xl">Example 1</CardTitle>
                  <CardDescription className="lg:text-lg">With cache revalidation on-demand</CardDescription>
                  <Separator />
                </CardHeader>
                <CardContent>
                  <p className="lg:text-base">Update the initial data and submit.</p>
                  <p className="lg:text-base lg:mt-3">A server action that updates the data and revalidates the path will be invoked.</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <Separator />
                    <p className="pt-2 font-medium lg:text-base">💡 Cached data will be purged and UI will be immediately updated with fresh data.</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="min-w-96">
              <UpdateForm />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:mt-20">
            <div className="lg:flex lg:gap-16">
              <div className="lg:max-w-96">
                <Card>
                  <CardHeader>
                    <CardTitle className="lg:text-xl">Example 2</CardTitle>
                    <CardDescription className="lg:text-lg">No cache revalidation on-demand</CardDescription>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="lg:text-base">Update the initial data and submit.</p>
                    <p className="lg:text-base lg:mt-3">A server action that updates the data will be invoked.</p>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <Separator />
                      <p className="pt-2 font-medium text-destructive lg:text-base">💡 UI will not be updated immediatly so data displayed is now stale.</p>
                      <p className="pt-2 italic lg:text-base">In this specific example, if we navigate away and come back or refresh the page, we would then see updated data.</p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="min-w-96">
                <UpdateFormNoRevalidation />
              </div>
            </div>
          </div>
          <Alert variant="default" className="flex shadow-sm gap-2 mb-2 lg:mt-6">
            <div className="pt-1 text-primary">
              <NotebookPenIcon size={18} />
            </div>
            <div>
              <AlertTitle className="lg:text-lg lg:font-medium">Important</AlertTitle>
              <AlertDescription>
                <p className="text-base text-foreground">It does not mean that on-demand revalidation is always necessary.
                  The important thing to take note is that understanding the caching mechanism of Next.js and how to manipulate it is extremely important to prevent unexpected behaviour
                  and bad user experience.
                </p>
              </AlertDescription>
            </div>
          </Alert>
        </div >
      </AnimatedContainer>
    </main >
  );
}
