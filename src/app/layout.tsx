import { StaticData } from "@/lib/staticdata";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
const font = Nunito({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
        <p className="absolute bottom-0 p-6 opacity-55">Note: This is an Admin Panel!</p>
      </body>
    </html>
  );
}
