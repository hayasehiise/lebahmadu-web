import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Image from "next/image";

import BannerLogo from "@publicAsset/logo.webp";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lebah Madu",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html>
  );
}
