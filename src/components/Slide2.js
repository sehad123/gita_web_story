import React, { useEffect, useState, forwardRef } from "react";
import { motion } from "framer-motion";

const Slide2 = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/Berita/pembangunan_infrastruktur_(2).png",
    "/img/Berita/pembangunan_infrastruktur_(3).png",
    "/img/Berita/pembangunan_infrastruktur_(4).png",
    "/img/Berita/pertumbuhan_industri_(1).png",
    "/img/Berita/pertumbuhan_industri_(3).png",
    "/img/Berita/pertumbuhan_industri_(4).png",
  ];

  const links = [
    "https://binamarga.pu.go.id/index.php/berita/presiden-resmikan-infrastruktur-jalan-dan-jembatan-di-jawa-timur",
    "https://www.detik.com/jatim/berita/d-7641378/pansela-terealisasi-386-91-km-wilayah-selatan-jatim-terkoneksi-jalan-mulus",
    "https://jatimtimes.com/baca/326029/20241125/074400/pemprov-jatim-ungkap-target-pengembangan-perumahan-dan-permukiman-2025-2045#:~:text=JATIMTIMES%20-%20Pemerintah%20Provinsi%20Jawa%20Timur%20%28Pemprov%20Jatim%29,dokumen%20Rencana%20Pembangunan%20Jangka%20Panjang%20Daerah%20%28RPJPD%29%202025%E2%80%932045",
    "https://www.suarasurabaya.net/ekonomibisnis/2021/tiga-kawasan-industri-baru-sedang-dibangun-di-jatim/",
    "https://www.kompas.id/baca/nusantara/2022/07/06/kawasan-industri-berkembang-ke-pesisir-jawa-timur",
    "https://www.ayobandung.com/umum/7914584019/siap-saingi-cikarang-daerah-di-jawa-timur-ini-akan-bangun-kawasan-industri-1200-hektare-diproyeksikan-sebagai-the-next-rungkut",
  ];

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openLink = () => {
    window.open(links[currentIndex], "_blank");
  };

  return (
    <motion.section
      ref={ref}
      id="slide2"
      className="relative h-[800px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2.jpeg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 className="text-3xl md:text-4xl mx-20 font-bold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Bagaimana kondisi lahan terbangun di Jawa Timur saat ini?
      </motion.h2>

      <motion.p className="mt-3 text-lg mx-64" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 0.6, delay: 0.4 }}>
        Keberadaan lahan terbangun di suatu wilayah dapat dipengaruhi oleh beberapa faktor, seperti kawasan industri, pembangunan infrastruktur, kepadatan penduduk, dan sebagainya. Mari kita simak beritanya!
      </motion.p>

      <motion.div
        className="relative mt-8 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-full">
            <img src={images[currentIndex]} alt="Berita" className="w-full h-90 object-cover" />
          </div>
          <div className="p-6">
            <button onClick={openLink} className="mt-1 px-6 py-2 bg-pink-500 text-white font-bold rounded-full flex items-center gap-2">
              Lihat Berita <span>👁</span>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={prevSlide}
      >
        ←
      </motion.button>

      <motion.button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={nextSlide}
      >
        →
      </motion.button>
    </motion.section>
  );
});

export default Slide2;
