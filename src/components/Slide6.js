import React from "react";

const Slide6 = () => {
  const peneliti = [
    {
      nama: "GITA KIRANA APRILIA",
      jabatan: "D-IV KOMPUTASI STATISTIK",
      deskripsi:
        "I am a highly motivated individual specializing in Sistem Informasi with a strong foundation in data analytics, programming, and statistical modeling. My interests lie at the intersection of technology and environmental science, focusing on utilizing big data and remote sensing to uncover patterns and insights that drive impactful decisions.",
      foto: "/img/Peneliti/gita.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "Dr. Rindang Bangun Prasetyo, S.S.T., M.Si.",
      jabatan: "Dosen Politeknik Statistika STIS / Researcher",
      deskripsi:
        "Research interests include diverse fields such as Disaster Management, Computational Statistics, Environmental Studies, Fuzzy Clustering, and Social Science. Notable achievements include the Master's Scholarship from BPS in 2009, a Research Grant from Bank Indonesia in 2021, and a Research Grant from ERIA in 2020.",
      foto: "/img/Peneliti/rindang.png", // ganti sesuai path sebenarnya
    },
  ];

  return (
    <section className="bg-[#025464] py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">TENTANG PENELITI</h2>

        <div className="space-y-10">
          {peneliti.map((item, idx) => (
            <div key={idx} className="bg-[#E8F0F2] text-gray-800 rounded-xl shadow-md p-6 md:flex md:items-center gap-6">
              <img src={item.foto} alt={item.nama} className="w-32 h-32 rounded-xl object-cover mb-4 md:mb-0" />
              <div>
                <h3 className="text-lg font-bold text-[#4CAF50]">{item.nama}</h3>
                <p className="font-medium text-[#76AB5C] mb-2">{item.jabatan}</p>
                <p className="text-sm leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide6;
