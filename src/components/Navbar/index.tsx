"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { StaticData } from "@/lib/staticdata";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import ThemeToggler from "../themes";

const Navbar = () => {
  return (
    <nav className="sticky shadow-md h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex text-2xl z-40 font-bold">
            {StaticData.SiteName}
          </Link>
          <MobileNav />
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Portfolio
            </Link>
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Careers
            </Link>
          </div>
          <div className="hidden items-center space-x-4 sm:flex">
           <ThemeToggler />
            <Link href="/talk" className="text-white">
              <Button
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Let&apos;s Talk <MessagesSquare className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
