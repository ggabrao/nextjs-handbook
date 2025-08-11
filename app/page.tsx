import { AnimatedContainer } from "@/components/animated-container";
import StackList from "@/components/stack-list";
import { Info } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4 lg:pt-12">
        <AnimatedContainer>
          <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl">About</h2>
          <p className="mb-4 lg:mb-5">This project is designed to assist beginners in Next.js by sharing my personal knowledge and insights into key concepts of the framework.</p>
          <p className="mb-4 lg:mb-5">I have compiled these summarized notes and practical examples based on my hands-on experience, courses, and study of the official documentation. These resources aim to provide a clear and concise quick reference.</p>
          <p className="mb-3 lg:mb-4">The stack I have been using is:</p>
          <StackList />
          <div className="flex gap-1.5 items-center mt-5 lg:mt-8">
            <Info size={20} className="text-primary lg:hidden" />
            <Info className="hidden text-primary lg:block" />
            <span className="text-sm font-medium italic lg:text-base">Click on each topic for more details</span>
          </div>
        </AnimatedContainer>
      </div>
    </main >
  );
}
