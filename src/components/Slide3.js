import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Changed to false initially
  const [isHovering, setIsHovering] = useState(false); // New state for hover effect

  // Auto play image every 3 seconds
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 11);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Fade in when section visible
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide3");
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

  // Image filenames: kondisi jatim 2014.png ~ 2024.png
  const images = Array.from({ length: 11 }, (_, i) => `/img/Kondisi_Jatim_2/kondisi_jatim_${2014 + i}.png`);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.section
      id="slide3"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{ backgroundImage: "url('/img/2_1.png')"}}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Judul */}
      <motion.h2 className="text-3xl md:text-4xl font-bold text-white max-w-5xl text-center mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Lantas, apa dampak terhadap tutupan lahan di Provinsi Jawa Timur?
      </motion.h2>

      <motion.p className="mt-3 text-lg max-w-5xl text-center mb-10 text-white" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <br></br><br></br>Dari tahun ke tahun, tutupan lahan Jawa Timur terus mengalami perubahan. Berikut rekaman citra satelit Provinsi Jawa Timur selama <span className="text-pink-300">sepuluh tahun terakhir.</span>
      </motion.p>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Left column - Image slideshow */}
        <motion.div className="w-full lg:w-1/2 relative" initial={{ opacity: 0, x: -30 }} animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="w-[680px] bg-white shadow-lg rounded-lg overflow-hidden relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="w-full h-[320px] relative">
              <img src={images[currentIndex]} alt={`Kondisi Jatim ${2014 + currentIndex}`} className="w-full h-full object-cover" />

              {/* Play/Pause button overlay - only shows when not playing or when hovering */}
              {(isHovering || !isPlaying) && (
                <button onClick={togglePlay} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-40">
                  <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg text-pink-600 text-3xl">{isPlaying ? "❚❚" : "▶"}</div>
                </button>
              )}

              {/* Year indicator */}
              <div className="absolute bottom-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{2014 + currentIndex}</div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-pink-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right column - Research findings */}
        <motion.div
          className="ml-32 w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Styled Title */}
          <div className="justify-center text-center">
            <div className="relative inline-block">
              <h3 className="text-2xl font-bold text-pink-200 relative">
                Hasil Penelitian
              </h3>
              <div className="absolute top-9 left-0 bottom-1 w-full h-2 bg-pink-500 rounded-lg"></div>
            </div>
          </div>

          {/* Single Container for all list items */}
          <div className="bg-white p-2 rounded-2xl shadow-lg border-l-8 border-pink-400">
            <ul className="space-y-2 list-none">
              <li className="relative w-full rounded-lg transition-colors duration-300 hover:bg-pink-100 cursor-pointer">
                <div className="pl-6 py-2 pr-4">
                  <span className="absolute left-2 top-[20px] transform -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full"></span>
                  <h4 className="font-bold text-sm mb-1">Kabupaten Sidoarjo (2020)</h4>
                  <p className="text-xs">
                    Perkembangan wilayah telah mengubah lahan hijau sebesar <span className="font-bold text-pink-600">6.032 ha</span> menjadi lahan terbangun.
                  </p>
                </div>
              </li>

              <li className="relative w-full rounded-lg transition-colors duration-300 hover:bg-pink-100 cursor-pointer">
                <div className="pl-6 py-2 pr-4">
                  <span className="absolute left-2 top-[20px] transform -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full"></span>
                  <h4 className="font-bold text-sm mb-1">Kabupaten Gresik (2021)</h4>
                  <p className="text-xs">
                    Terjadi lonjakan penambahan luas lahan terbangun sebesar <span className="font-bold text-pink-600">7%</span> dari tahun sebelumnya.
                  </p>
                </div>
              </li>

              <li className="relative w-full rounded-lg transition-colors duration-300 hover:bg-pink-100 cursor-pointer">
                <div className="pl-6 py-2 pr-4">
                  <span className="absolute left-2 top-[20px] transform -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full"></span>
                  <h4 className="font-bold text-sm mb-1">Tuban-Bojonegoro (2010–2018)</h4>
                  <p className="text-xs">
                    Di perbatasan kedua kabupaten terjadi penambahan lahan industri sebesar <span className="font-bold text-pink-600">25,46 ha</span>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Optional: Modal Preview */}
      {isPreviewVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg">
            <button onClick={togglePreview} className="absolute rounded-full p-1 top-0 right-0 text-3xl font-bold bg-pink-500 text-white">
              ×
            </button>
            <img src={images[currentIndex]} alt="Preview" className="w-full h-96 object-cover mb-4" />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Slide3;
