import { Toaster } from "@/components/ui/sonner";
import { StaticData } from "@/lib/staticdata";
import NextAuthProvider from "@/providers/next-auth-provider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
const font = Nunito({ subsets: ["latin"] });

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
