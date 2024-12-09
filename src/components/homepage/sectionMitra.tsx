'use client'
import Image from "next/image";

import MitraIcon from "@publicAsset/partner-black.webp";
import MitraLogo from "@publicAsset/mitra-logo.webp";

export default function Mitra() {
  return (
    <div className="w-full flex flex-col bg-white p-10">
      <div className="flex flex-row items-center mb-5">
        <Image src={MitraIcon} alt="Event Icon" width={500} height={500} className="w-1/4 md:w-1/12" />
        <p className="md:text-4xl text-2xl font-extrabold text-black">Mitra / Relasi</p>
      </div>
      <Image src={MitraLogo} alt="Mitra" width={1000} className="mx-auto" />
    </div>
  );
}
  