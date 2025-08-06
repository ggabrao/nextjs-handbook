import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { updatePostNoRevalidation } from "@/lib/actions"
import { fakePostNoRevalidation } from "@/lib/fake-data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function UpdateFormNoRevalidation() {
    return (
        <div className="border rounded shadow p-4 w-full">
            <h2 className="font-semibold mb-4"> Update Form 2 (no revalidation)</h2>
            <form action={updatePostNoRevalidation} className="flex flex-col gap-4 mb-4">
                <div>
                    <Label htmlFor="title" className="mb-2">Title:</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={fakePostNoRevalidation.title}
                    />
                </div>
                <div>
                    <Label htmlFor="description" className="mb-2">Description:</Label>
                    <Textarea
                        id="description"
                        name="description"
                        defaultValue={fakePostNoRevalidation.description}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
            <Alert variant="destructive">
                <AlertTitle>Data</AlertTitle>
                <AlertDescription>
                    <p className="font-medium">Title: <span className="font-base text-foreground">{fakePostNoRevalidation.title}</span></p>
                    <p className="font-medium">Description: <span className="font-base text-foreground">{fakePostNoRevalidation.description}</span></p>
                </AlertDescription>
            </Alert>
        </div>
    )
}