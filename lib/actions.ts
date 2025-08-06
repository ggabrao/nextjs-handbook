'use server';

import { revalidatePath } from "next/cache";
import { fakePost, fakePostNoRevalidation, } from "./fake-data";

export async function updatePost(formData: FormData) {
    const title = String(formData.get('title'));
    const description = String(formData.get('description'));
    fakePost.title = title;
    fakePost.description = description;
    revalidatePath("/mutations");
}

export async function updatePostNoRevalidation(formData: FormData) {
    const title = String(formData.get('title'));
    const description = String(formData.get('description'));
    fakePostNoRevalidation.title = title;
    fakePostNoRevalidation.description = description;
}