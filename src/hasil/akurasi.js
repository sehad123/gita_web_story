import React from "react";
import { motion } from "framer-motion";

const Akurasi = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 bg-gradient-to-b from-sky-200 via-blue-100 to-yellow-100 text-gray-800">
      {/* Awan Kiri */}
      <div className="absolute top-8 left-10 w-40 h-20 bg-white rounded-full shadow-md opacity-80"></div>
      <div className="absolute top-12 left-32 w-32 h-14 bg-white rounded-full shadow-md opacity-80"></div>

      {/* Awan Kanan */}
      <div className="absolute top-10 right-10 w-36 h-18 bg-white rounded-full shadow-md opacity-80"></div>
      <div className="absolute top-16 right-28 w-28 h-12 bg-white rounded-full shadow-md opacity-80"></div>

      {/* Ombak */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
          <path
            fill="#fcd34d" /* Pasir warna kuning */
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div className="relative max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center">Analisis Tabel Uji Akurasi</h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Akurasi/uji akurasi.png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-full object-contain" />
        </div>

        <p className="text-justify bg-white/80 backdrop-blur p-4 rounded-lg shadow-inner">
          Tabel uji akurasi menunjukkan bahwa hasil klasifikasi citra satelit untuk tahun 2014, 2019, dan 2024 memiliki tingkat keakuratan yang tinggi. Nilai <strong>Overall Accuracy</strong> berkisar antara <strong>92,78%</strong> hingga{" "}
          <strong>94,33%</strong>. Sementara itu, nilai <strong>Indeks Kappa</strong> berada di kisaran <strong>0,851</strong> hingga <strong>0,883</strong>, yang mengindikasikan tingkat kesesuaian yang sangat baik antara hasil klasifikasi
          dan data referensi.
        </p>
      </motion.div>
    </section>
  );
};

export default Akurasi;
