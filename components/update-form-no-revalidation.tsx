import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { updatePostNoRevalidation } from "@/lib/actions"
import { fakePostNoRevalidation } from "@/lib/fake-data"
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function UpdateFormNoRevalidation() {
    return (
        <div className="border rounded shadow p-4 w-full">
            <h2 className="font-semibold mb-4"> Update Form 2</h2>
            <form action={updatePostNoRevalidation} className="flex flex-col gap-4 mb-4">
                <div>
                    <Label htmlFor="userId" className="mb-2">User ID:</Label>
                    <Input
                        id="userId"
                        name="userId"
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={fakePostNoRevalidation.userId}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
            <Alert>
                <AlertTitle className="text-center">User ID: {fakePostNoRevalidation.userId}</AlertTitle>
            </Alert>
        </div>
    )
}
