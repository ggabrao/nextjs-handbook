import { AnimatedContainer } from "@/components/animations/animated-container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import UpdateForm from "@/components/update-form";
import UpdateFormNoRevalidation from "@/components/update-form-no-revalidation";
import { InfoIcon, NotebookPenIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mutations',
};

export default function MutationsPage() {
  return (
    <main className="lg:text-lg">
      <AnimatedContainer>
        <div className="flex flex-col pt-4 lg:pt-12">
          <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Mutations</h2>
          <p className="mb-4">Advantages of using <strong>Server Actions</strong> for data mutations:</p>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-sm">No API endpoints</Badge>
              <p className="ml-1 text-sm lg:text-base lg:pt-0.5">Server Actions allow you to run asynchronous code directly on the server, eliminating the need of API entpoints to mutate data.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Progressive enhancement</Badge>
              <p className="ml-1 text-sm lg:text-base lg:pt-0.5">Invoking a Server Action within a Server Component allow forms to work even if JavaScript has not yet loaded on the client.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Caching</Badge>
              <p className="ml-1 text-sm lg:text-base lg:pt-0.5">Server Actions are deeply integrated with Next.js caching.</p>
            </div>
            <div>
              <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Revalidations</Badge>
              <p className="ml-1 text-sm lg:text-base lg:pt-0.5">When a form is submitted through a Server Action, you can also revalidate the associated cache using APIs like revalidatePath and revalidateTag.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6 lg:mt-20">
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-7/12">
              <Alert variant="default">
                <InfoIcon />
                <AlertTitle className="lg:text-lg">Form 1: with cache revalidation on-demand</AlertTitle>
                <AlertDescription>
                  <p className="text-foreground lg:text-base lg:py-1">Update the initial data and submit the form.</p>
                  <Separator />
                  <p className="text-foreground lg:text-base lg:py-1">A server action that updates the data and revalidates the path will be invoked.</p>
                  <Separator />
                  <p className="font-medium text-foreground lg:text-base lg:py-1">Cached data will be purged and UI will be immediately updated with fresh data.</p>
                </AlertDescription>
              </Alert>
            </div>
            <div className="lg:w-6/12">
              <UpdateForm />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-6">
            <div className="lg:flex lg:gap-8">
              <div className="lg:w-7/12">
                <Alert variant="default" className="mb-2">
                  <InfoIcon />
                  <AlertTitle className="lg:text-lg">Form 2: no cache revalidation on-demand</AlertTitle>
                  <AlertDescription>
                    <p className="text-foreground lg:text-base lg:py-1">Update the initial data and submit the form.</p>
                    <Separator />
                    <p className="text-foreground lg:text-base lg:py-1">A server action that updates the data will be invoked.</p>
                    <Separator />
                    <p className="font-medium text-foreground lg:text-base lg:py-1">UI will not be updated immediatly so data displayed is now stale.</p>
                  </AlertDescription>
                </Alert>
              </div>
              <div className="lg:w-6/12">
                <UpdateFormNoRevalidation />
              </div>
            </div>
          </div>
          <Alert variant="default" className="mb-2">
            <NotebookPenIcon />
            <AlertTitle className="lg:text-lg">Important</AlertTitle>
            <AlertDescription>
              <p className="text-base text-foreground">It does not mean that on-demand revalidation is always necessary. In this example, if we navigate away and come back or refresh the page, we would see the updated data.
              </p>
              <p className="text-base text-foreground">
                The important thing to take note is that understanding the caching mechanism of Next.js is extremely important to prevent unexpected behaviour.</p>
            </AlertDescription>
          </Alert>
        </div >
      </AnimatedContainer>
    </main >
  );
}
