import React from "react";
import { motion } from "framer-motion";

const Prediksi = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-800" style={{ backgroundImage: "url('/img/2.jpeg')" }}>
      <motion.div className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center"> Prediksi Perkembangan Lahan Terbangun Tahun 2029 </h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Prediksi/7. 2029Simulasi ke-2.png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-full object-contain" />
        </div>
      </motion.div>
    </section>
  );
};

export default Prediksi;
