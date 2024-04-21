import Link from "next/link";
import Image from "next/image";

import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";
import { StaticData } from "@/lib/staticdata";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:w-[300px] bg-white sticky h-screen left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <h1 className="text-2xl font-extrabold text-primary tracking-wide">
            {StaticData.SiteName}
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" />
        <SidebarItem label="Leaderboard" href="/leaderboard" />
        <SidebarItem label="quests" href="/quests" />
        <SidebarItem label="shop" href="/shop" />
      </div>
      {/* <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>  */}
    </div>
  );
};
