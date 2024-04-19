"use client";

import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  const isAuthenticated = false;
  const [showDescription, setShowDescription] = useState(null);

  const handleMouseEnter = (description: any) => {
    setShowDescription(description);
  };

  const handleMouseLeave = () => {
    setShowDescription(null);
  };


  return (
    <div className="sm:hidden">
     <Sheet>
        <SheetTrigger>   <Menu

          className="relative z-50 h-5 w-5 text-zinc-700"
        /></SheetTrigger>
        <SheetContent className="text-left">
          <SheetHeader className="w-full text-left">
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetTitle>Links Links</SheetTitle>
            <SheetTitle>Links Links</SheetTitle>
            <SheetTitle>Links Links</SheetTitle>
            <SheetTitle>Links Links</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  );
};

export default MobileNav;
