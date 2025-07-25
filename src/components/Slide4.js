import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide4 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide2");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="slide2"
      className="relative h-[800px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2.jpeg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 className="text-3xl md:text-4xl mt-4 font-bold max-w-5xl text-center mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Adakah cara untuk mengantisipasi pertumbuhan lahan terbangun yang pesat?
      </motion.h2>

      {/* Konten Gambar dan Deskripsi */}
      <motion.div
        className="relative w-11/12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          {/* Gambar */}
          <div className="w-full">
            <img src="img/antisipasi/masalah.png" alt="Masalah Lahan Terbangun" className="w-full h-80 object-cover" />
          </div>

          {/* Deskripsi */}
          <div className="p-6 text-left">
            <p className="text-gray-700">
              Pemerintah Provinsi Jawa Timur telah menyusun Rencana Tata Ruang Wilayah (RTRW) Provinsi Jawa Timur tahun 2023–2043 yang tertuang dalam Perda No. 10 Tahun 2023. Namun, apakah kondisi saat ini sudah sesuai dengan yang
              direncanakan?
            </p>
            <p className="text-gray-700 mt-2">
              Oleh karena itu, dilakukan penelitian ini untuk mengidentifikasi dan memprediksi perkembangan lahan terbangun, serta menganalisis perkembangannya di tahun 2029. Dengan mempertimbangkan faktor-faktor pendorong perkembangan
              lahan terbangun, memanfaatkan data citra satelit, dan menggunakan metode analisis spasial, diharapkan dapat menjadi alternatif yang terjangkau dalam mengawasi dinamika perubahan penggunaan lahan secara berkala tanpa memerlukan
              biaya operasional yang tinggi dan perangkat yang kompleks.
            </p>
            <p className="text-gray-700 mt-2 font-semibold">Yuk, kita simak hasilnya!</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Slide4;
