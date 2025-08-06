export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number
}

export type fakePost = {
    title?: string;
    description?: string;
}

export type fakePostNoRevalidation = {
    title?: string;
    description?: string;
}
