import { AnimatedContainer } from "@/components/animated-container";
import StackList from "@/components/stack-list";
import { Info } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4 lg:pt-12">
        <AnimatedContainer>
          <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">About</h2>
          <p className="mb-3 lg:mb-5">This project serves as my personal knowledge base for Next.js. Here, I document insights, tests, and lessons learned from hands-on experience, courses, and official documentation.</p>
          <p className="mb-3 lg:mb-5">Summarizing key concepts helps me quickly review important topics and make informed decisions during development.</p>
          <p className="mb-2 lg:mb-4">The stack I have been using is:</p>
          <StackList />
          <div className="flex gap-1.5 items-center lg:mt-8">
            <Info className="text-primary" />
            <span className="text-base font-medium italic">Click each topic for more details</span>
          </div>
        </AnimatedContainer>
      </div>
    </main >
  );
}
