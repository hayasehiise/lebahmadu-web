'use client'
import Image from "next/image";
import BleedSection from "@publicAsset/bleedsection.webp";
import CompanyProfileIcon from "@publicAsset/company-profile.webp";

export default function CompanyProfile() {
    return (
      <div className="w-full flex flex-col p-10 pt-32 text-white relative">
          <Image
          src={BleedSection}
          alt="stripe"
          className="absolute top-0 right-0 z-0"
          height={400}
        />
        <div className="flex flex-row items-center mb-5 z-10">
          <Image src={CompanyProfileIcon} alt="Event Icon" width={100} />
          <p className="text-4xl font-extrabold ml-3">Company Profile</p>
        </div>
        <article className="flex flex-col gap-3 text-justify z-10">
          <p className="indent-8">
            Lebah Madu Indonesia mengambil filosofi selayaknya Lebah sebagai hewan
            pekerja keras yang hanya menghisap saripati bunga sesuai kebutuhannya
            dimana Lebah hanya mengambil yang inti dan membiarkan yang lainnya.
            Ini mengajarkan bahwa setiap manusia harus mengambil sesuatu yang baik
            dan halal. Sebab mengambil hak yang lain hukumnya adalah haram.
            Sementara Madu yang berasal dari saripati bunga merupakan sumber
            manfaat yang bersifat menyembuhkan.
          </p>
          <p className="indent-8">
            Dari filosofi di atas kami berdua “Ari dan Budi” pada tahun 2015
            tepatnya tanggal 14 April mendirikan perusahaan dengan nama CV ANNAHL.
            Annahl itu sendiri mempunyai makna LEBAH, beriringan waktu tepatnya
            tanggal 13 Januari 2020 nama perusahaan kami berganti menjadi CV
            LEBAHMADU INDONESIA yang bergerak dalam bisnis Event Organizer dengan
            harapan dapat menjadi mitra terpercaya dan pilihan utama dalam
            perencanaan dan penyelenggaraan event yang berkesan dan inovatif bukan
            hanya di Sulawesi Tengah tetapi Indonesia dan Dunia.
          </p>
          <p className="indent-8">
            Kantor LEBAHMADU pertama bertempat di Jl.Manimbaya tepatnya di Rumah
            Ari. Berjalan waktu dengan keseriusan kami berdua selaku Founder
            LEBAHMADU, kami dapat membeli Ruko di Jl. Setia Budi No.109C tepatnya
            di depan 168 House.
          </p>
          <p className="indent-8">
            Sejak pertama kali dibentuk hingga saat ini LEBAHMADU terus
            bertransformasi dan berkomitmen untuk selalu menghadirkan ide-ide
            kreatif, unik dan inovatif serta berkesan dalam setiap penyelenggaraan
            event.
          </p>
        </article>
      </div>
    );
  }