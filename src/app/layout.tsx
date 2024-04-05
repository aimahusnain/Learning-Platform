import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./providers/next-auth-provider";
import BackButton from "@/components/BackButton";
import { StaticData } from "@/lib/staticdata";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* <NextAuthProvider> */}
        <BackButton />
        {children}
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}
