import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex items-center justify-center flex-col w-full h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Language Learning Platform
      </h1>
      <div className="flex flex-col space-y-4">
        <Link href="/english">
          <Button size="lg">English</Button>
        </Link>
        {/* Add more language options here */}
      </div>
    </div>
  );
}
