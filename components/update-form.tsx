import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updatePost } from "@/lib/actions"
import { fakePost } from "@/lib/fake-data"
import { AnimatedButton } from "./animated-button"
import { AnimatedAlert } from "./animated-alert"

export default function UpdateForm() {
    return (
        <div className="flex flex-col gap-3">
            <div className="border shadow-sm rounded-lg p-4 px-8 w-full">
                <h2 className="font-semibold mb-4 lg:text-xl">Update Form 1</h2>
                <form action={updatePost} className="flex flex-col gap-4 lg:gap-6">
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
            </div>
            <div>
                <AnimatedAlert value={fakePost.userId} />
            </div>
        </div>

    )
}
