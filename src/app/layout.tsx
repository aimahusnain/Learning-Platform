import { StaticData } from "@/lib/staticdata";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
const font = Nunito({ subsets: ["latin"] });

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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
