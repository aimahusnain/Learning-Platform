import { StaticData } from "@/lib/staticdata";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
const font = Nunito({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";
import NextThemeProvider from "@/providers/next-theme-provider";
import Themes from "@/components/themes";

export const metadata: Metadata = {
  title: StaticData.SiteName,
  description: StaticData.Description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextThemeProvider>
          <Toaster />
          <Themes />
          <NextAuthProvider>{children}</NextAuthProvider>
          <div className="fixed bottom-0 p-6 w-full bg-zinc-100 dark:bg-zinc-900 h-fit py-6">
            <p className="opacity-55">Note: This is an Admin Panel!</p>
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
