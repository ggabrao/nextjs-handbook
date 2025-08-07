import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updatePostNoRevalidation } from "@/lib/actions"
import { fakePostNoRevalidation } from "@/lib/fake-data"
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AnimatedButton } from "./animated-button"

export default function UpdateFormNoRevalidation() {
    return (
        <div className="flex flex-col gap-3">
            <div className="border rounded-sm shadow-sm lg:rounded-lg p-4 px-8 w-full">
                <h2 className="font-semibold mb-4 lg:text-xl"> Update Form 2</h2>
                <form action={updatePostNoRevalidation} className="flex flex-col gap-4 lg:gap-6">
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
                    <AnimatedButton />
                </form>
            </div>
            <Alert className="py-8 shadow-sm">
                <AlertTitle className="text-center text-base">User ID: {fakePostNoRevalidation.userId}</AlertTitle>
            </Alert>
        </div>
    )
}
