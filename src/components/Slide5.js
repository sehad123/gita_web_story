import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide5 = ({ id, onScrollToNext }) => {
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
      id={id} // Ini penting!
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(to top, #fde68a 0%, #fcd34d 40%, #fbcfe8 100%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Matahari Sore */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-orange-300 rounded-full z-10 shadow-md" />

      {/* Awan */}
      <div className="absolute top-20 left-10 w-40 h-20 bg-white/70 rounded-full shadow-md z-20"></div>
      <div className="absolute top-28 right-20 w-52 h-24 bg-white/70 rounded-full shadow-md z-20"></div>

      {/* Gunung Belakang */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-64">
          <path
            fill="#52796f" // <- hijau lumut
            d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,192C840,171,960,117,1080,122.7C1200,128,1320,192,1380,224L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Gunung Depan */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-72">
          <path
            fill="#2f3e46" // <- hijau tua banget
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Judul */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 z-30 drop-shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Begini Hasil Risetnya Guys
      </motion.h1>

      {/* Tombol */}
      <motion.button
        className="mt-8 z-30 bg-orange-200 text-orange-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-300 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={onScrollToNext}
      >
        Hasil Penelitian ↓
      </motion.button>
    </motion.section>
  );
};

export default Slide5;
