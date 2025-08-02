import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const perkembanganData = [
  {
    title: "Perkembangan Secara Umum (2014–2024)",
    images: ["/img/Hasil/Perkembangan/[2014-2019].png", "/img/Hasil/Perkembangan/[2019-2024].png"],
    description:
      "Perkembangan lahan terbangun yang terjadi selama periode 2014-2019 dan 2019-2024 cenderung berada di bagian utara Provinsi Jawa Timur. Pada periode 2014-2019, Kabupaten Lamongan memiliki proporsi perkembangan lahan terbangun tertinggi yaitu berkisar antara 12,17%-15,21%. Kemudian, diikuti dengan Kabupaten Gresik dan Tuban dengan rentang nilai 9,13%-12,17%. Tiga kabupaten tersebut terletak di wilayah pesisir utara Jawa Timur dan termasuk ke dalam wilayah yang dijadikan sebagai pusat perkembangan kawasan industri di Jawa Timur. Dari 14 kawasan industri yang masih beroperasi hingga saat ini di Jawa Timur, 5 di antaranya tersebar di Kabupaten Gresik, Lamongan, dan Tuban. Namun, pada periode 2019-2024, proporsi perkembangan lahan terbangun Kabupaten Lamongan tidak begitu tinggi seperti periode sebelumnya, hanya berkisar antara 6,08%-9,13%. Sedangkan, pada periode 2019-2024, Kabupaten Tuban memiliki proporsi perkembangan lahan terbangun tertinggi yang berkisar antara 9,13%-12,17%. Pada periode 2019-2024, Kabupaten Tulungagung, Nganjuk, dan Probolinggo menunjukkan peningkatan proporsi perkembangan lahan terbangun dari periode sebelumnya.",
  },
];

const perkembanganFaktor = [
  {
    title: "Jaringan Jalan",
    images: ["/img/Hasil/Perkembangan/4b. [2014-2019] perubahan thd jalan (2).png", "/img/Hasil/Perkembangan/5b. [2019-2024] perubahan thd jalan (2).png"],
    description:
      "Perkembangan lahan terbangun cenderung mengikuti pola jaringan jalan yang sudah ada. Kondisi ini menunjukkan bahwa adanya pengaruh aksesibilitas jalan terhadap perkembangan lahan terbangun. Jarak yang lebih dekat dengan jaringan jalan cenderung memiliki kemungkinan perubahan lahan.",
  },
  {
    title: "Badan Air",
    images: ["/img/Hasil/Perkembangan/4a. [2014-2019] perubahan thd air (2).png", "/img/Hasil/Perkembangan/5a. [2019-2024] perubahan thd air (2).png"],
    description:
      "Wilayah di sekitar badan air mengalami perubahan dari bukan lahan terbangun menjadi lahan terbangun. Wilayah di sekitar badan air seringkali berkembang menjadi pusat aktivitas perekonomian, seperti kawasan industri. Di Jawa Timur, sebagian besar kawasan industri memanfaatkan Pelabuhan Tanjung Perak sebagai infrastruktur pendukung dari kawasan industrinya. Oleh karena itu, wilayah yang berada di pesisir utara cenderung mengalami perubahan lahan karena banyak dilakukan pembangunan karena kemudahan akses terhadap sumber daya air untuk mendukung aktivitas perekonomian.",
  },
  {
    title: "DEM (Ketinggian)",
    images: ["/img/Hasil/Perkembangan/4c. [2014-2019] perubahan thd dem (2).png", "/img/Hasil/Perkembangan/5c. [2019-2024] perubahan thd dem (2).png"],
    description:
      "Wilayah dengan ketinggian rendah cenderung lebih mengalami perkembangan lahan terbangun, baik selama periode 2014-2019 maupun periode 2019-2024. Daerah dengan ketinggian rendah cenderung mudah dikembangkan, karena mudah dalam membangun konstruksi bangunan dibandingkan dengan daerah yang lebih tinggi.",
  },
  {
    title: "Slope (Kemiringan)",
    images: ["/img/Hasil/Perkembangan/4d. [2014-2019] perubahan thd slope (2).png", "/img/Hasil/Perkembangan/5d. [2019-2024] perubahan thd slope (2).png"],
    description:
      "Lahan dengan kemiringan datar hingga landai cenderung mengalami perubahan lahan terbangun, baik selama periode 2014-2019 maupun periode 2019-2024. Wilayah dengan kemiringan curam jarang dilakukan pembangunan, karena memiliki beberapa tantangan, baik secara teknis maupun non teknis.",
  },
];

const Perkembangan = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // default ke data pertama

  const data = perkembanganFaktor[selectedIndex];
  const tahunGambar = ["2014-2019", "2019-2024"];

  return (
    <section className="relative overflow-hidden px-4 py-12 bg-[#545454] text-gray-800 bg-cover"
      style={{ backgroundImage: "url('/img/perkembangan-bg.png')" }}
    >
      <motion.div className="relative max-w-6xl mx-auto space-y-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h4 className="text-2xl font-bold text-center text-pink-200 pb-2 pt-2">Peta Perkembangan Lahan Terbangun Jawa Timur</h4>
        <div className="bg-pink-500 text-white text-center rounded-2xl mx-auto w-[470px]">
          <p className="text-lg font-bold text-center text-pink-200 pb-2 pt-2">
            Peta perkembangan lahan terbangun terhadap luas wilayah
          </p>
        </div>

        {perkembanganData.map((item, index) => (
          <div key={index} className="space-y-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.images.map((img, i) => (
                <div key={i} className="text-center">
                  <div className="bg-pink-300 rounded-lg mx-auto w-[100px] h-[25px] flex justify-center items-center">
                    <p className="text-base font-bold mb-2 mt-2">
                      {i === 0 ? "2014-2019" : "2019-2024"}
                    </p>
                  </div>
                  <div className="pt-3">
                    <img src={img} className="rounded-xl shadow-md w-full object-contain border-2 border-white transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-justify bg-white/60 backdrop-blur p-4 text-sm rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">{item.description}</p>
          </div>
        ))}

        <div className="bg-pink-500 text-white text-center rounded-2xl mx-auto w-[600px]">
          <p className="text-lg font-bold text-center text-pink-200 pb-2 pt-2">
            Peta perkembangan lahan terbangun terhadap faktor pendorong
          </p>
        </div>

        {/* Dropdown Pilihan */}
      <div className="text-center">
        <label className="mr-2 text-lg font-bold text-white">Pilih faktor pendorong :</label>
        <select
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          value={selectedIndex}
          className="p-2 rounded border-2 text-gray-800 font-bold bg-pink-100 text-center"
        >
          {perkembanganFaktor.map((item, idx) => (
            <option key={idx} value={idx}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Gambar dan Keterangan */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.images.map((img, i) => (
            <div key={i} className="text-center">
              <div className="bg-pink-300 rounded-lg mx-auto w-[100px] h-[25px] flex justify-center items-center">
                <p className="text-base font-bold">{tahunGambar[i] || `Layer ${i + 1}`}</p>
              </div>
              <div className="pt-3">
                <img
                  src={img}
                  alt={`Gambar ${tahunGambar[i]}`}
                  className="rounded-xl shadow-md w-full object-contain border-2 border-white transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-justify text-sm bg-white/60 backdrop-blur p-4 rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">{data.description}</p>
      </div>
      </motion.div>
    </section>
  );
};

export default Perkembangan;
