import StackList from "@/components/stack-list";

export default function AboutPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">About</h2>
        <p className="mb-3 lg:mb-5">I use this project to create my <strong>own notes</strong> about things I have learnt in Next.js from my experience in projects, documentation and courses.</p>
        <p className="mb-3 lg:mb-5">Keeping things summarized help me quickly reviewing important concepts before making important decisions.</p>
        <StackList />
      </div >
    </main >
  );
}
