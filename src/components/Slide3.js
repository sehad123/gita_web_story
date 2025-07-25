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
  const images = Array.from({ length: 11 }, (_, i) => `/img/kondisi_jatim/kondisi jatim ${2014 + i}.png`);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.section
      id="slide3"
      className="relative min-h-screen flex flex-col items-center justify-center bg-no-repeat px-4 py-10"
      style={{ backgroundColor: "#fbe4a1" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Judul */}
      <motion.h2 className="text-3xl md:text-4xl font-bold max-w-5xl text-center mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Lantas, apa dampak terhadap tutupan lahan di Provinsi Jawa Timur?
      </motion.h2>

      <motion.p className="mt-3 text-lg max-w-5xl text-center mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 0.6, delay: 0.4 }}>
        Dari tahun ke tahun, tutupan lahan Jawa Timur terus mengalami perubahan. Berikut rekaman citra satelit Provinsi Jawa Timur selama sepuluh tahun terakhir.
      </motion.p>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Left column - Image slideshow */}
        <motion.div className="w-full lg:w-1/2 relative" initial={{ opacity: 0, x: -30 }} animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="w-[680px] bg-white shadow-lg rounded-lg overflow-hidden relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="w-full h-[400px] relative">
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
        <motion.div className="ml-32 w-full lg:w-1/2 space-y-6" initial={{ opacity: 0, x: 30 }} animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <h3 className="text-2xl font-bold text-pink-600">Hasil Penelitian Tutupan Lahan di Jawa Timur</h3>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-pink-500">
              <h4 className="font-bold text-lg mb-2">Kabupaten Sidoarjo (2020)</h4>
              <p>
                Perkembangan wilayah telah mengubah lahan hijau sebesar <span className="font-bold text-pink-600">6.032 ha</span> menjadi lahan terbangun.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-pink-500">
              <h4 className="font-bold text-lg mb-2">Kabupaten Gresik (2021)</h4>
              <p>
                Terjadi lonjakan penambahan luas lahan terbangun sebesar <span className="font-bold text-pink-600">7%</span> dari tahun sebelumnya.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-pink-500">
              <h4 className="font-bold text-lg mb-2">Tuban-Bojonegoro (2010-2018)</h4>
              <p>
                Di perbatasan kedua kabupaten terjadi penambahan lahan industri sebesar <span className="font-bold text-pink-600">25,46 ha</span>.
              </p>
            </div>
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
