import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { updatePost } from "@/lib/actions"
import { fakePost } from "@/lib/fake-data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function UpdateForm() {
    return (
        <div className="border rounded-sm shadow-sm p-4 w-full">
            <h2 className="font-semibold mb-4">Update Form 1</h2>
            <form action={updatePost} className="flex flex-col gap-4 mb-4">
                <div>
                    <Label htmlFor="title" className="mb-2">Title:</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={fakePost.title}
                    />
                </div>
                <div>
                    <Label htmlFor="description" className="mb-2">Description:</Label>
                    <Textarea
                        id="description"
                        name="description"
                        defaultValue={fakePost.description}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
            <Alert>
                <AlertTitle>Data</AlertTitle>
                <AlertDescription>
                    <p className="font-medium">Title: <span className="font-base text-foreground">{fakePost.title}</span></p>
                    <p className="font-medium">Description: <span className="font-base text-foreground">{fakePost.description}</span></p>
                </AlertDescription>
            </Alert>
        </div>
    )
}
