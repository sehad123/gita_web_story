import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const SimulasiValidasi = () => {
  const [showSimulasi, setShowSimulasi] = useState(true);

  const handleToggle = () => {
    setShowSimulasi((prev) => !prev);
  };

  // Variants untuk animasi geser
  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <section className="relative overflow-hidden px-4 py-12 text-gray-800 bg-cover no-repeat" style={{ backgroundImage: "url('/img/simulasi-bg.png')" }}>
      <motion.div
        className="relative max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-center text-pink-400 mb-8">
          {showSimulasi
            ? "Prediksi Lahan Terbangun di Jawa Timur Tahun 2024"
            : "Analisis Tabel Uji Akurasi"}
        </h3>

        {/* Konten berubah tergantung state dengan animasi geser */}
        <div className="relative h-[500px]">
          <AnimatePresence custom={showSimulasi ? 1 : -1} mode="wait">
            {showSimulasi ? (
              <motion.div
                key="simulasi"
                custom={1}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src="/img/Hasil/Input dan hasil simulasi/6. Simulasi 2024 LULC Administrasi (Legenda) (2).png"
                    alt="Hasil Simulasi LULC 2024"
                    className="rounded-xl shadow-md max-w-[550px] object-contain border-2 border-white transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-justify text-sm bg-white/70 backdrop-blur p-4 rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">
                  Hasil prediksi tahun 2024 menunjukkan luas lahan terbangun 
                  Provinsi Jawa Timur sebesar 6.584.559.900 m2 atau 13,77% 
                  dari total luas wilayah Provinsi Jawa Timur. Angka ini 
                  menunjukkan peningkatan dari tahun 2019 yaitu sebesar 
                  451.599.000 m2. Pola sebaran lahan 
                  terbangun hasil simulasi cenderung mengikuti pola sebaran 
                  saat periode 2014-2019. Kondisi ini mencerminkan adanya 
                  keterkaitan pola perkembangan dari periode sebelumnya.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="validasi"
                custom={-1}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="flex justify-center mb-4">
                  <div className="overflow-x-auto">
                    <table className="w-[350px] bg-[#f9f6ef] text-[#5c4b3b] rounded-lg shadow-md text-center">
                      <thead>
                        <tr className="bg-[#e8ded0] text-center">
                          <th className="py-3 px-6 font-semibold border-b">Metrik</th>
                          <th className="py-3 px-6 font-semibold border-b">Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-[#f3ede5] transition">
                          <td className="py-3 px-6 border-b">Akurasi</td>
                          <td className="py-3 px-6 border-b">95,83%</td>
                        </tr>
                        <tr className="hover:bg-[#f3ede5] transition">
                          <td className="py-3 px-6 border-b">Presisi</td>
                          <td className="py-3 px-6 border-b">79,17%</td>
                        </tr>
                        <tr className="hover:bg-[#f3ede5] transition">
                          <td className="py-3 px-6 border-b">Recall</td>
                          <td className="py-3 px-6 border-b">94,49%</td>
                        </tr>
                        <tr className="hover:bg-[#f3ede5] transition">
                          <td className="py-3 px-6 border-b">F1-Score</td>
                          <td className="py-3 px-6 border-b">85,85%</td>
                        </tr>
                        <tr className="hover:bg-[#f3ede5] transition">
                          <td className="py-3 px-6 border-b">Indeks Kappa</td>
                          <td className="py-3 px-6 border-b">83,72%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
                <p className="text-justify text-sm bg-[#f9f6ef]/80 p-4 rounded-lg shadow-inner text-[#5c4b3b]">
                  Tabel menunjukkan hasil evaluasi klasifikasi citra satelit menggunakan berbagai metrik: <strong>Akurasi</strong> sebesar <strong>95,83%</strong>, <strong>Presisi</strong> sebesar <strong>79,17%</strong>,
                  <strong>Recall</strong> sebesar <strong>94,49%</strong>, <strong>F1-Score</strong> sebesar <strong>85,85%</strong>, dan <strong>Indeks Kappa</strong> sebesar <strong>83,72%</strong>.
                  Berdasarkan indikator evaluasi tersebut, model 
                  memiliki performa yang baik dalam memprediksi lahan 
                  terbangun, dengan <strong>akurasi</strong> sebesar <strong>95,83%</strong>. Nilai <strong>presisi</strong>
                  sebesar <strong>94,49%</strong> menunjukkan bahwa hampir semua lahan 
                  terbangun dalam data simulasi berhasil diidentifikasi oleh 
                  model, meskipun nilai <strong>recall</strong> yang lebih rendah yaitu sebesar 
                  <strong>79,17%</strong>, mengindikasikan adanya sejumlah kesalahan 
                  simulasi. <strong>F1-Score</strong> sebesar <strong>85,85%</strong> menunjukkan 
                  keseimbangan yang baik antara nilai presisi dan recall. 
                  Sedangkan, <strong>indeks Kappa</strong> sebesar <strong>0,83</strong> menunjukkan 
                  tingkat kesesuaian yang kuat antara hasil simulasi dan data 
                  referensi. Secara umum, dapat diartikan bahwa antara 
                  model hasil simulasi dengan data referensi sudah 
                  menunjukkan kesesuaian yang baik, sehingga model dapat 
                  diterima dan dapat digunakan untuk prediksi pada tahun 
                  berikutnya.  
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tombol panah kiri & kanan di tengah halaman */}
        <button
          onClick={handleToggle}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition z-10"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={handleToggle}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition z-10"
        >
          <ChevronRight size={36} />
        </button>
      </motion.div>
    </section>
  );
};

export default SimulasiValidasi;
