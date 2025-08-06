'use server';

import { revalidatePath } from "next/cache";
import { fakePost, fakePostNoRevalidation, } from "./fake-data";

export async function updatePost(formData: FormData) {
    const id = Number(formData.get('userId'));
    fakePost.userId = id;
    revalidatePath("/mutations");
}

export async function updatePostNoRevalidation(formData: FormData) {
    const id = Number(formData.get('userId'));
    fakePostNoRevalidation.userId = id;
}
