import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updatePost } from "@/lib/actions"
import { fakePost } from "@/lib/fake-data"
import { AnimatedButton } from "./animated-button"
import { AnimatedAlert } from "./animated-alert"

export default function UpdateForm() {
    return (
        <div className="border rounded-sm shadow-sm p-4 w-full">
            <h2 className="font-semibold mb-4">Update Form 1</h2>
            <form action={updatePost} className="flex flex-col gap-4 mb-4">
                <div>
                    <Label htmlFor="userId" className="mb-2">User ID:</Label>
                    <Input
                        id="userId"
                        name="userId"
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={fakePost.userId}
                    />
                </div>
                <AnimatedButton />
            </form>
            <AnimatedAlert value={fakePost.userId} />
        </div>
    )
}
