'use client'
import Image from "next/image";
import EventIcon from "@publicAsset/event-icon.webp";

export default function EventTimeline() {
  return (
    <div className="w-full p-10 flex flex-col text-white">
      <div className="flex flex-row items-center mb-5">
        <Image src={EventIcon} alt="Event Icon" width={500} height={500} className="w-1/4 md:w-1/12" />
        <p className="md:text-4xl text-2xl font-extrabold"> Projects & Events</p>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">
                HUT Kota Palu Ke-44 (27-28 September 2022)
              </div>
              Client Pemerintah Kota Palu
              <div className="text-lg font-black">
                DSDM Run Good Mining Practices (11 Desember 2022)
              </div>
              Client AR Official & Dinas ESDM Sulawesi Tengah
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">
                HUT Kota Palu Ke-45 (27-28 September 2023)
              </div>
              Client Pemerintah Kota Palu
              <div className="text-lg font-black">
                Perancangan Negeri Seribu Megalith (10 Oktober 2023)
              </div>
              Client Pemerintah Provinsi Sulawesi Tengah
              <div className="text-lg font-black">
                Familiarization Trip (13-17 Oktober 2023)
              </div>
              Client Balai Besar Taman Nasional Lore Lindu
              <div className="text-lg font-black">
                Palu Sport Event (9-24 November 2023)
              </div>
              Client Pemerintah Kota Palu
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                Peresmian Masjid Cheng Ho Pasangkayu (17 Januari 2024)
              </div>
              Client -
              <div className="text-lg font-black">
                Groundbreaking Rumah Sakit Dhuafa CT Arsa Palu (26 Januari 2024)
              </div>
              Client -
              <div className="text-lg font-black">
                Peresmian Gedung Universitas Terbuka Palu (27 Februari 2024)
              </div>
              Client UT Palu
              <div className="text-lg font-black">
                Festival Kumham Sulteng 2024 (12 Agustus 2024)
              </div>
              Client Kantor Wilayah (Kanwil) Kementerian Hukum dan Hak Asasi
              Manusia (Kemenkumham)
              <div className="text-lg font-black">
                HUT Kota Palu Ke-46 (26-28 September 2024)
              </div>
              Client Pemerintah Kota Palu
              <div className="text-lg font-black">
                Half Marathon Togean (13 Oktober 2024)
              </div>
              Client -
            </div>
            <hr className="bg-secondary" />
          </li>
        </ul>
      </div>
    </div>
  );
}
  