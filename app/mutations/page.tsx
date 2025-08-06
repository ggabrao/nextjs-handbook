import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import UpdateForm from "@/components/update-form";
import UpdateFormNoRevalidation from "@/components/update-form-no-revalidation";
import { InfoIcon, MessageCircleWarningIcon, NotebookPenIcon } from "lucide-react";

export default function MutationsPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">Mutations</h2>
        <p className="mb-4">Advantages of using <strong>Server Actions</strong> for data mutations:</p>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <Badge className="bg-green-700 dark:text-foreground lg:text-sm">No API endpoints</Badge>
            <p className="ml-1 text-sm lg:text-base">Server Actions allow you to run asynchronous code directly on the server, eliminating the need of API entpoints to mutate data.</p>
          </div>
          <div>
            <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Progressive enhancement</Badge>
            <p className="ml-1 text-sm lg:text-base">Invoking a Server Action within a Server Component allow forms to work even if JavaScript has not yet loaded on the client.</p>
          </div>
          <div>
            <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Caching</Badge>
            <p className="ml-1 text-sm lg:text-base">Server Actions are deeply integrated with Next.js caching.</p>
          </div>
          <div>
            <Badge className="bg-green-700 dark:text-foreground lg:text-sm">Revalidations</Badge>
            <p className="ml-1 text-sm lg:text-base">When a form is submitted through a Server Action, you can also revalidate the associated cache using APIs like revalidatePath and revalidateTag.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-6 lg:mt-10">
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-7/12">
            <Alert variant="default">
              <InfoIcon />
              <AlertTitle className="lg:text-base">Form 1: cache revalidation on-demand</AlertTitle>
              <AlertDescription>
                <p>Update the initial data and submit the form.</p>
                <Separator />
                <p>A server action that updates the data and revalidates the path will be invoked.</p>
                <Separator />
                <p className="font-medium">Cached data will be purged and UI will be immediately updated with fresh data.</p>
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
                <AlertTitle className="lg:text-base">Form 2: no cache revalidation on-demand</AlertTitle>
                <AlertDescription>
                  <p>Update the initial data and submit the form.</p>
                  <Separator />
                  <p>A server action that updates the data will be invoked.</p>
                  <Separator />
                  <p className="font-medium">UI will not be updated immediatly so data displayed is now stale.</p>
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
            <p className="text-base">It does not mean that on-demand revalidation is always necessary. In this example, if we navigate away and come back or refresh the page, we would see the updated data.
            </p>
            <p className="text-base">
              The important thing to take note is that understanding the caching mechanism of Next.js is extremely important to prevent unexpected behaviour.</p>
          </AlertDescription>
        </Alert>
      </div >
    </main >
  );
}
