import React from "react";
import { motion } from "framer-motion";

const Validasi = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 bg-[#f5f0e1] text-gray-800">
      {/* Ornamen grunge / paper texture dengan gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5f0e1] via-[#e8dbc3] to-[#d8c3a5] opacity-70 pointer-events-none"></div>

      {/* Ornamen border hias */}
      <div className="absolute inset-0 border-4 border-dashed border-[#a68a64] rounded-xl pointer-events-none"></div>

      <motion.div className="relative max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center text-[#5c4b3b]">Analisis Tabel Uji Akurasi</h2>

        <div className="flex justify-center transition-transform duration-300 hover:scale-105">
          <img src="/img/Hasil/Validasi simulasi/validasi simulasi.png" alt="Tabel Uji Akurasi" className="rounded-lg shadow-lg border-2 border-[#a68a64] max-w-full object-contain transition-transform duration-300 hover:scale-105" />
        </div>

        <p className="text-justify bg-pink/80 p-4 rounded-lg shadow-inner text-[#5c4b3b] font-serif transition-transform duration-300 hover:scale-105">
          Table menunjukkan hasil evaluasi klasifikasi citra satelit menggunakan berbagai metrik: <strong>Akurasi</strong> sebesar <strong>95,83%</strong> menunjukkan bahwa sebagian besar piksel berhasil diklasifikasikan dengan benar.
          <strong>Presisi</strong> sebesar <strong>79,17%</strong> mengindikasikan bahwa dari seluruh prediksi lahan terbangun, sekitar 79% memang benar.
          <strong>Recall</strong> sebesar <strong>94,49%</strong> menandakan model sangat baik dalam menangkap lahan terbangun yang sesungguhnya.
          <strong>F1-Score</strong> sebesar <strong>85,85%</strong> mencerminkan keseimbangan antara presisi dan recall. Sementara itu, <strong>Indeks Kappa</strong> sebesar <strong>83,72%</strong> mengindikasikan kesesuaian yang sangat
          baik antara hasil klasifikasi dan data referensi, mengoreksi kemungkinan kesepakatan acak.
        </p>
      </motion.div>
    </section>
  );
};

export default Validasi;
