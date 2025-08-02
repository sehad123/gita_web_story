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
      className="relative h-[700px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2_2.png')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
  <motion.h2
    className="text-3xl md:text-4xl font-bold max-w-5xl text-center pb-12 text-white"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Adakah cara untuk mengantisipasi pertumbuhan lahan terbangun yang pesat?
  </motion.h2>

  {/* Konten Gambar dan Deskripsi - dua kolom */}
  <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 max-w-6xl mx-auto">
    {/* Kiri - Gambar dan Deskripsi */}
    <motion.div
      className="w-full lg:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <img
        src="img/Antisipasi/masalah.png"
        alt="Masalah_Lahan_Terbangun"
        className="w-full h-80 object-cover rounded-md"
      />
      <div className="" style={{ backgroundColor: "pink" }}>
        <p className="mt-4 font-bold">
          Pemerintah Provinsi Jawa Timur telah menyusun Rencana Tata Ruang Wilayah (RTRW) Provinsi Jawa Timur tahun 2023–2043 yang tertuang dalam Perda No. 10 Tahun 2023. Regulasi tersebut membahas terkait rencana tata ruang selama tahun 2023-2043.
        </p>
      </div>
    </motion.div>

    {/* Kanan - Research findings */}
    <motion.div
      className="w-full lg:w-1/2 space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-center max-w-4xl mx-auto">
        <img
          src="img/ques_2.png"
          alt="pertaanyaan"
          className="relative w-20 h-20 rounded-md"
        ></img>
        <div className="relative inline-block rounded-3xl">
          <h3 className="text-base font-bold text-pink-300 mb-4 relative m-2 text-left">
            Namun, apakah kondisi saat ini sudah sesuai dengan yang direncanakan?
          </h3>
        </div>
      </div>
      
        <ul className="space-y-2 list-none text-xs text-white text-justify" style={{ textIndent: "2em" }}>
          Perencanaan dalam jangka waktu yang panjang diperlukan suatu proses pemantauan untuk melihat apakah kondisi di lapangan sesuai dengan yang direncanakan.
          Penelitian ini menawarkan suatu alternatif yang dapat digunakan untuk memantau perkembangan lahan terbangun agar hasil di lapangan sesuai dengan rencana yang sudah tertera pada RTRW. 
          Oleh karena itu, penelitian ini dilakukan untuk <span className="text-pink-300">melihat perkembangan lahan terbangun di periode sebelumnya (2014-2024), memprediksi sebaran lahan terbangun di masa mendatang (tahun 2029), menganalisis faktor-faktor yang dapat mempengaruhi 
          perkembangan lahan terbangun di masa mendatang, serta menampilkan seluruh informasi hasil penelitian dengan media yang interaktif</span>.
          Dengan memanfaatkan data citra satelit dan metode analisis spasial, diharapkan dapat menjadi alternatif yang terjangkau dalam mengawasi dinamika perubahan penggunaan lahan secara berkala tanpa memerlukan biaya operasional yang tinggi dan perangkat yang kompleks, 
          serta dengan informasi yang telah disajikan dapat menambah pengetahuan masyarakat.
        </ul>
      
      <div className="relative inline-block rounded-xl bg-pink-600 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-base font-bold text-white mb-4 relative m-3 text-center">
          <a href="#metode"> Yuk, kita simak penjelasannya !!</a>
        </h3>
      </div>

      
    </motion.div>
  </div>
</motion.section>
  );
};

export default Slide4;
