import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";

const Data = forwardRef((props, ref) => {
  // Gabungan semua data
  const allData = [
    { label: "TUTUPAN LAHAN TAHUN 2014", src: "/img/Hasil/Data utama/4a. 2014 1.jpg" },
    { label: "TUTUPAN LAHAN TAHUN 2019", src: "/img/Hasil/Data utama/4b. 2019 1.jpg" },
    { label: "TUTUPAN LAHAN TAHUN 2024", src: "/img/Hasil/Data utama/4c. 2024 1.jpg" },
    { label: "DEM", src: "/img/Hasil/Data pendukung/DEM 1.png" },
    { label: "SLOPE", src: "/img/Hasil/Data pendukung/Slope baru 1.png" },
    { label: "JARAK TERHADAP BADAN AIR", src: "/img/Hasil/Data pendukung/Badan Air 1.png" },
    { label: "JARAK TERHADAP JARINGAN JALAN", src: "/img/Hasil/Data pendukung/Jalan 1.png" },
  ];

  const [selectedLabel, setSelectedLabel] = useState(allData[0].label);

  const selectedItem = allData.find((item) => item.label === selectedLabel);

  return (
    <section className="relative overflow-hidden py-12 px-4 bg-cover h-screen"
      style={{
        backgroundImage: "url('/img/hasil-bg.png')",
      }}
    >
      <motion.div
        ref={ref}
        id="data"
        className="relative max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Dropdown Pilihan */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Apa saja data yang digunakan?</h2>
          <label className="mr-2 text-lg font-bold text-lg text-white">Pilih data :</label>
          <select
            onChange={(e) => setSelectedLabel(e.target.value)}
            value={selectedLabel}
            className="p-2 rounded border-2 text-gray-800 text-base font-bold bg-pink-100 text-center"
          >
            {allData.map((item, idx) => (
              <option key={idx} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Gambar yang Dipilih */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-white inline-block">
            <img
              src={selectedItem.src}
              alt={selectedItem.label}
              className="rounded-xl object-contain max-h-[300px] w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default Data;
