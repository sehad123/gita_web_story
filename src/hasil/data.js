import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Data = forwardRef((props, ref) => {
  const imagesUtama = ["/img/Hasil/Data utama/4a. 2014.jpg", "/img/Hasil/Data utama/4b. 2019.jpg", "/img/Hasil/Data utama/4c. 2024.jpg"];
  const labelsUtama = ["2014", "2019", "2024"];

  const imagesPendukung = ["/img/Hasil/Data pendukung/Badan Air.png", "/img/Hasil/Data pendukung/DEM.png", "/img/Hasil/Data pendukung/Jalan.png", "/img/Hasil/Data pendukung/Slope baru.png"];
  const labelsPendukung = ["Badan Air", "DEM", "Jalan", "Slope Baru"];

  return (
    <section className="relative overflow-hidden py-12 px-4 bg-gradient-to-b from-pink-200 via-orange-100 to-yellow-100 text-gray-800">
      {/* Awan Kiri */}
      <div className="absolute top-10 left-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-8 left-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 left-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>

      {/* Awan Kanan */}
      <div className="absolute top-16 right-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 right-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-18 right-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>

      {/* --- Bagian wave & rumput DIHAPUS --- */}

      <motion.div ref={ref} id="data" className="relative max-w-7xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-center mb-8">Hasil Penelitian</h2>

        {/* Data Utama */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Data Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagesUtama.map((src, idx) => (
              <div key={idx} className="text-center">
                <p className="font-medium mb-2">{labelsUtama[idx]}</p>
                <img src={src} alt={`data-utama-${idx}`} className="rounded-xl shadow-md w-[620px] h-54 object-cover border-2 border-black" />
              </div>
            ))}
          </div>
        </div>

        {/* Data Pendukung */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Data Pendukung</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imagesPendukung.map((src, idx) => (
              <div key={idx} className="text-center">
                <p className="font-medium mb-2">{labelsPendukung[idx]}</p>
                <div className="bg-white p-2 rounded-2xl shadow-lg border-2 border-black flex items-center justify-center">
                  <img src={src} alt={`data-pendukung-${idx}`} className="rounded-xl object-contain w-full h-[400px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metode */}
        <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-inner leading-relaxed">
          <h4 className="font-semibold mb-2">Metode yang digunakan:</h4>
          <p>
            1. Identifikasi lahan terbangun: <strong>Maximum Likelihood Classification (MLC)</strong>
          </p>
          <p>
            2. Prediksi perkembangan lahan terbangun: <strong>Cellular Automata dan ANN</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
});

export default Data;
