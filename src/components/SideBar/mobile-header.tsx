import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden fixed px-6 h-[50px] flex items-centerfixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
