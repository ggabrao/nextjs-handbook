import StackList from "@/components/stack-list";

export default function AboutPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">About</h2>
        <p className="mb-3 lg:mb-5">This project serves as my personal knowledge base for Next.js. Here, I document insights, tests, and lessons learned from hands-on experience, courses, and official documentation.</p>
        <p className="mb-3 lg:mb-5">Summarizing key concepts helps me quickly review important topics and make informed decisions during development.</p>
        <StackList />
      </div >
    </main >
  );
}
