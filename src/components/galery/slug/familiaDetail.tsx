"use client";
import Image from "next/image";

import EventGaleryImage from "@publicAsset/event-galery.webp";
import Link from "next/link";

export default function FamiliaDetail() {
  const imageList = Array.from({length: 6}, (_, i) => <Image key={i} src={`/EventGalery/Familiarization/${i+1}.webp`} alt="gallery" className="border-dashed border-white border-4" width={1920} height={1080} />)
  return (
    <>
      <div className="w-full flex flex-col text-white">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Image
              src={EventGaleryImage}
              alt="Event Icon"
              className="w-1/4 md:w-[10%]"
              width={1000}
            />
            <p className="md:text-4xl text-lg font-extrabold">
              Familiarization Trip
            </p>
          </div>
          <div className="flex items-center justify-center m-10">
            <Link
              href={"/galery"}
              className="btn btn-error font-black text-2xl md:text-4xl"
            >
              X
            </Link>
          </div>
        </div>
        <div className="flex justify-center p-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {imageList}
          </div>
        </div>
      </div>
    </>
  );
}
