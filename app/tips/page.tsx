import { AnimatedContainer } from "@/components/animated-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tips',
};

export default function TipsPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4 lg:pt-12">
        <AnimatedContainer>
          <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl lg:mb-5">Tips</h2>
          <h3 className="font-semibold mb-1.5 lg:text-lg lg:mb-3">⚙️ Project setup</h3>
          <ul className="flex flex-col gap-3 mb-10 text-sm lg:text-lg lg:mb-16 lg:gap-5">
            <li className="list-disc ml-6">Use <strong>npx create-next-app -e with-supabase</strong> to start a new project with Next.js, Shadcn, and Supabase <em>(also including SSR authentication)</em></li>
            <li className="list-disc ml-6">Use the documentation to configure <em>Absolute Imports, Module Path and Typescript specific plugin for Vscode</em></li>
            <li className="list-disc ml-6">Mock API: https://jsonplaceholder.typicode.com</li>
          </ul>
          <h3 className="font-semibold mb-1.5 lg:text-lg lg:mb-3">ℹ Metadata</h3>
          <p className="text-sm lg:text-lg">A common pattern for the title is <em>&apos;Page title | App name&apos;</em>. Implement it with the following steps:</p>
          <ol className="flex flex-col gap-8 mb-10 mt-4 lg:mb-16">
            <li>👉 Layout.tsx:
              <pre className="text-sm p-2 bg-primary-foreground dark:bg-secondary mt-1 lg:mt-0">
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
              <pre className="text-sm p-2 bg-primary-foreground dark:bg-secondary mt-1 lg:mt-0">
                <code>
                  {`export const metadata: Metadata = {
    title: 'Page title',
};`}
                </code>
              </pre>
            </li>
          </ol>
          <h3 className="font-semibold lg:text-lg mb-3">🗒️ Reminders</h3>
          <ul className="flex flex-col gap-3 mb-10 text-sm lg:text-lg lg:mb-16 lg:gap-5">
            <li className="list-disc ml-4">Optimizations: Fonts, Images and Links</li>
            <li className="list-disc ml-4">Add &apos;use client&apos; to <em>specific interactive components</em> instead of making large parts of the UI be client components <span className="font-medium">(it reduces the size of the JS bundles)</span></li>
            <li className="list-disc ml-4">Use <em>(route)</em> to create route groups, and <em>[route]</em> to create dynamic segments</li>
            <li className="list-disc ml-4">Check for updates on Partial Prerendering and learn about it when it gets production ready</li>
          </ul>
        </AnimatedContainer>
      </div>
    </main >
  );
}
