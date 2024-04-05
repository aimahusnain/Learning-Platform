import { Button } from "@/components/ui/button";
import { StaticData } from "@/lib/staticdata";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex items-center justify-center flex-col w-full h-screen mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold mb-4">
        Welcome to {StaticData.SiteName}
      </h1>
      <p className="mb-4">Welcome to {StaticData.Description}</p>
      <div className="flex flex-col space-y-4">
        <Link href="/english">
          <Button size="lg" variant="success">
            English
          </Button>
        </Link>
      </div>
    </div>
  );
}
