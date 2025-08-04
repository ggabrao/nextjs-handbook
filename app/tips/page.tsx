export default function TipsPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl lg:mb-5">Tips</h2>
        <h3 className="font-semibold mb-1.5 lg:text-lg lg:mb-3">⚙️ Project setup</h3>
        <ul className="flex flex-col gap-3 mb-10 lg:mb-16 lg:gap-5">
          <li className="list-disc ml-6">Use <strong>npx create-next-app -e with-supabase</strong> to start a new project with Next.js, Shadcn, and Supabase <em>(also including SSR authentication)</em></li>
          <li className="list-disc ml-6">Use the documentation to configure <em>Absolute Imports, Module Path and Typescript specific plugin for Vscode</em></li>
          <li className="list-disc ml-6"><strong>Mock API: </strong>https://jsonplaceholder.typicode.com</li>
        </ul>
        <h3 className="font-semibold mb-1.5 lg:text-lg lg:mb-3">ℹ Metadata</h3>
        <p>A common pattern for the title is <em>'App name - Page title'</em>. Implement it with the following steps:</p>
        <ol className="flex flex-col gap-3 mt-2 mb-10 lg:mt-4 lg:gap-8 lg:mb-16">
          <li>👉 Layout.tsx:
            <pre className="text-sm p-2 bg-primary-foreground">
              <code>
                {`export const metadata: Metadata = {
  title: {
    template: '%s | App name',
    default: 'App name',
  },
  ...
};`}
              </code>
            </pre>
          </li>
          <li>👉 Page.tsx:
            <pre className="text-sm p-2 bg-primary-foreground">
              <code>
                {`export const metadata: Metadata = {
    title: 'Page title',
};`}
              </code>
            </pre>
          </li>
        </ol>
        <h3 className="font-semibold mb-1.5 lg:text-lg lg:mb-3">🚀 Main Next.js optimizations:</h3>
        <ul>
          <li className="list-disc ml-4">Fonts</li>
          <li className="list-disc ml-4">Images</li>
          <li className="list-disc ml-4">Links</li>
        </ul>
      </div>
    </main>
  );
}
