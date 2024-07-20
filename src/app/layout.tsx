import { StaticData } from "@/lib/staticdata";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
const font = Nunito({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";
import NextThemeProvider from "@/providers/next-theme-provider";

export const metadata: Metadata = {
  title: `${StaticData.SiteName} - ${StaticData.Description}`,
  description: StaticData.Description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white`}>
        {/* <NextThemeProvider> */}
          <Toaster />
          <NextAuthProvider>{children}</NextAuthProvider>
        {/* </NextThemeProvider> */}
      </body>
    </html>
  );
}
