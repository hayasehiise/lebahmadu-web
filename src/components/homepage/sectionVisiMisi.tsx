'use client'

export default function VisiMisi() {
  return (
    <div className="w-full p-10 flex lg:flex-row flex-col gap-5 bg-primary text-white">
      <div className="lg:w-1/2 w-full flex flex-col">
        <p className="text-center font-bold text-4xl">Visi</p>
        <p className="text-justify">
          &quot;Menjadi penyelenggara acara terkemuka yang menciptakan
          pengalaman tak terlupakan dan inovatif bagi setiap klien, dengan
          mengedepankan profesionalisme, kreativitas, dan keunggulan dalam
          setiap detail acara.&quot;
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col">
        <p className="text-center font-bold text-4xl">Misi</p>
        <p className="text-justify">
          memberikan layanan event organizer yang profesional dan berkualitas
          tinggi dengan selalu berinovasi dalam merancang konsep acara yang unik
          dan kreatif, serta mengutamakan kepuasan klien melalui solusi yang
          fleksibel dan personalisasi layanan. Kami berkomitmen untuk membangun
          kemitraan yang kuat dengan berbagai pihak serta menjaga keberlanjutan
          dan tanggung jawab sosial dalam setiap acara yang kami selenggarakan,
          sehingga setiap momen yang tercipta menjadi pengalaman yang berkesan
          dan tak terlupakan.
        </p>
      </div>
    </div>
  );
}