// Generic slowFetch simulation function
export async function slowFetch<T>(fn: () => Promise<T>, delay = 5000): Promise<T> {
    try {
        console.log('Delaying execution...');
        await new Promise((resolve) => setTimeout(resolve, delay));

        const data = await fn();

        console.log('Fetch completed');

        return data;
    } catch (error) {
        console.error('Error in fetching:', error);
        throw new Error('Failed to fetch data.');
    }
}
