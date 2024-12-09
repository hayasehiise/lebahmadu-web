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
        {/* <Navbar /> */}
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">
                <a href="/">
                  <Image src={BannerLogo} alt="Banner" width={200} />
                </a>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a href="/galery">
                    <Image src={'/event-galery.webp'} alt="icon" width={20} height={20} />
                    Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                    <Image src={'/about-us.webp'} alt="icon" width={20} height={20} />
                    About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            <main>
            {children}
            </main>
            <Footer />
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-dvh w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a href="/">
                <Image src={'/home.webp'} alt="icon" width={20} height={20} />
                Home
                </a>
              </li>
              <li>
                <a href="/galery">
                <Image src={'/event-galery.webp'} alt="icon" width={20} height={20} />
                Gallery
                </a>
              </li>
              <li>
                <a href="/about">
                <Image src={'/about-us.webp'} alt="icon" width={20} height={20} />
                About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
