import React from "react";
import { motion } from "framer-motion";

const Simulasi = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 bg-gradient-to-b from-green-100 via-green-50 to-green-200 text-gray-800">
      {/* Animasi daun hijau kecil */}
      {Array.from({ length: 12 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="absolute w-5 h-5 opacity-70 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <path d="M10 0 C12 5, 18 5, 10 20 C2 5, 8 5, 10 0 Z" fill="#228B22" />
        </svg>
      ))}

      <motion.div className="relative max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center">Hasil Simulasi</h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Input dan hasil simulasi/6. Simulasi 2024 LULC Administrasi (Legenda).png" alt="Hasil Simulasi LULC 2024" className="rounded-xl shadow-md max-w-full object-contain border-2 border-green-500" />
        </div>

        <p className="text-justify bg-white/70 backdrop-blur p-4 rounded-lg shadow-inner">
          Pola sebaran lahan terbangun hasil simulasi cenderung mengikuti pola sebaran saat periode 2014-2019. Hal ini menunjukkan bahwa model yang telah dibuat dapat menangkap pola perkembangan yang telah terjadi.
        </p>
      </motion.div>

      {/* Keyframes daun jatuh */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Simulasi;
