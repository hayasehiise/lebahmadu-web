'use client'
import Image from "next/image";

import BleedSection from "@publicAsset/bleedsection.webp";

export default function About() {
  return (
    <div className="w-full text-white p-10 flex items-center justify-center relative">
      <Image
        src={BleedSection}
        alt="stripe"
        className="absolute top-0 right-0 z-0"
        height={400}
      />
      <h1 className="lg:text-2xl lg:pt-36 pt-4 font-semibold lg:w-1/2 w-full text-center z-10">
        Dalam 9 tahun berpengalaman dalam bisnis Event Organizer dengan harapan
        dapat menjadi mitra terpercaya dan pilihan utama dalam perencanaan dan
        penyelenggaraan event yang berkesan dan inovatif
      </h1>
    </div>
  );
}
  