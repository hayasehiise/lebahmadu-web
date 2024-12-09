'use client'
import Image from "next/image";

import DirectorAndViceIcon from "@publicAsset/director-and-vice.webp";

export default function HeadAndVice() {
    return (
      <div className="w-full flex flex-col p-10 text-white">
        <div className="flex flex-row items-center mb-5">
          <Image src={DirectorAndViceIcon} alt="Event Icon" width={100} />
          <p className="text-4xl font-extrabold ml-3">Director & Vice Director</p>
        </div>
        <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col lg:w-[90%] w-full bg-primary p-5 lg:rounded-full rounded-t-full items-center mx-auto mb-5">
          <Image src={'/About/Director.webp'} alt="Direktur" width={250} height={250} />
          <div className="flex flex-col w-full px-5">
            <div className="flex flex-col mb-3">
              <p className="text-4xl font-bold underline">ABDUR RIFAI</p>
              <p className="text-xl font-semibold">Direktur</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col mb-3">
                  <p className="text-2xl font-semibold">Pendidikan</p>
                  <p className="text-base">Universitas Tadulako (2006 - 2010)</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold">Pengalaman Kerja</p>
                  <ul className="list-inside list-disc">
                    <li>Direktur Lebah Madu (2016 - Sekarang)</li>
                    <li>Manager Marketing Telkom Palu (2006 - 2010)</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col my-auto lg:ml-5 lg:mt-0 mt-5">
                <p className="text-2xl font-semibold">Kontak</p>
                <p className="text-base">Instagram : @aridaeng</p>
                <p className="text-base">Email : aridaeng99@gmail.com</p>
                <p className="text-base">Telp : 0811-4502-223</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex lg:flex-row flex-col lg:w-[90%] w-full bg-primary p-5 lg:rounded-full rounded-t-full items-center mx-auto">
          <Image src={'/About/Vice Director.webp'} alt="Direktur" width={250} height={250} />
          <div className="flex flex-col w-full px-5">
            <div className="flex flex-col mb-3">
              <p className="text-4xl font-bold underline">BUDI HI. LOLO</p>
              <p className="text-xl font-semibold">Vice Direktur</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col mb-3">
                  <p className="text-2xl font-semibold">Pendidikan</p>
                  <p className="text-base">
                    Universitas Negeri Malang (2006 - 2010)
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold">Pengalaman Kerja</p>
                  <ul className="list-inside list-disc">
                    <li>Wakil Direktur Lebah Madu (2016 - Sekarang)</li>
                    <li>Ketua Backstagers Sulteng (2022 – Sekarang)</li>
                    <li>
                      Ketua Indonesia City Creative Network Sulteng (2022 –
                      Sekarang)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col my-auto lg:ml-5 lg:mt-0 mt-5">
                <p className="text-2xl font-semibold">Kontak</p>
                <p className="text-base">Instagram : @budi_hilolo</p>
                <p className="text-base">Email : budidesign33@gmail.com</p>
                <p className="text-base">Telp : 0811-4510-330</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
  