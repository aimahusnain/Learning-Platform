import { AlignRight } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/SideBar/sidebar";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";
import SideLinks from "./SideLinks";

export const MobileSidebar = () => {
  return (
    <div className="flex lg:hidden">
      {/* <Sheet>
        <SheetTrigger>
          <AlignRight className="right-6 top-5 absolute p-2 w-fit h-fit" />{" "}
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet> */}

      <Drawer>
        <DrawerTrigger>
          <AlignRight className="right-6 top-5 absolute p-2 w-fit h-fit" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-center">
                {StaticData.SiteName}
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <SideLinks />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
