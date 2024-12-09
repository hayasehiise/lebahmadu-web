import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lebah Madu",
  description: "Galery Page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
