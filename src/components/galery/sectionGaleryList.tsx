"use client";
import Link from "next/link";
import Image from "next/image";

import EventGaleryImage from "@publicAsset/event-galery.webp";

export default function EventGaleryList() {
  const galeryList = [
    {
      src: "/EventGalery/Familiarization/1.webp",
      alt: "galery event",
      title: "Familiarization Trip",
      link: "/galery/familiarization",
    },
    {
      src: "/EventGalery/HUT45/1.webp",
      alt: "galery event",
      title: "HUT Kota Palu Ke-45",
      link: "/galery/hut45",
    },
    {
      src: "/EventGalery/KumHam/1.webp",
      alt: "galery event",
      title: "Festival Kumham Sulteng 2024",
      link: "/galery/kumhamfest",
    },
    {
      src: "/EventGalery/PSE/1.webp",
      alt: "galery event",
      title: "Palu Sport Event 2023",
      link: "/galery/pse2023",
    },
    {
      src: "/EventGalery/HUT46/1.webp",
      alt: "galery event",
      title: "HUT Kota Palu Ke-46",
      link: "/galery/hut46",
    },
    {
      src: "/EventGalery/Togean/1.webp",
      alt: "galery event",
      title: "Togean Half Marathon",
      link: "/galery/togean",
    },
    {
      src: "/EventGalery/PLN/1.webp",
      alt: "galery event",
      title: "PLN Customer Gathering",
      link: "/galery/pln",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col text-white">
        <div className="flex flex-row items-center mb-5">
        <div className="flex flex-row items-center">
            <Image src={EventGaleryImage} alt="Event Icon" className="w-1/5 md:w-[10%]" width={1000} />
            <p className="md:text-4xl text-lg font-extrabold">Gallery</p>
          </div>
        </div>
        <div className="flex p-10 justify-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {galeryList.map((item, index) => (
              <div key={index} className="stack">
                <div className="card card-compact bg-white w-full shadow-xl text-black">
                  <figure className="">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1920}
                      height={1080}
                      className=" rounded-t-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions">
                      <Link
                        href={item.link}
                        className="btn btn-primary text-white"
                      >
                        More Image
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-white w-full shadow-xl text-black">
                  <figure className="">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1920}
                      height={1080}
                      className=" rounded-t-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                  </div>
                </div>
                <div className="card card-compact bg-white w-full shadow-xl text-black">
                  <figure className="">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1920}
                      height={1080}
                      className=" rounded-t-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
