import React from "react";
import { motion } from "framer-motion";

const perkembanganData = [
  {
    title: "1. Perkembangan Umum (2014–2019 & 2019–2024)",
    images: ["/img/Hasil/Perkembangan/4. 2014-2019 Changes Map (Legenda).png", "/img/Hasil/Perkembangan/5. 2019-2024 Changes Map (Legenda).png"],
    description:
      "Pada periode 2014-2019 dan 2019-2024, perkembangan lahan terbangun cenderung berada di wilayah pesisir utara. Daerah pesisir utara menunjukkan keberadaan lahan terbangun yang lebih luas jika dibandingkan dengan wilayah pesisir selatan, baik pada periode 2014-2019 maupun pada periode 2019-2024.",
  },
  {
    title: "2. Terhadap Jaringan Jalan",
    images: ["/img/Hasil/Perkembangan/4b. [2014-2019] perubahan thd jalan.png", "/img/Hasil/Perkembangan/5b. [2019-2024] perubahan thd jalan.png"],
    description:
      "Perkembangan lahan terbangun cenderung mengikuti pola jaringan jalan yang sudah ada. Kondisi ini menunjukkan bahwa adanya pengaruh aksesibilitas jalan terhadap perkembangan lahan terbangun. Jarak yang lebih dekat dengan jaringan jalan cenderung memiliki kemungkinan perkembangan lahan terbangun.",
  },
  {
    title: "3. Terhadap Badan Air",
    images: ["/img/Hasil/Perkembangan/4a. [2014-2019] perubahan thd air.png", "/img/Hasil/Perkembangan/5a. [2019-2024] perubahan thd air.png"],
    description:
      "Wilayah di sekitar badan air mengalami perubahan dari bukan lahan terbangun menjadi lahan terbangun. Wilayah di sekitar badan air seringkali berkembang menjadi pusat aktivitas perekonomian, seperti kawasan industri, karena kemudahan akses terhadap sumber daya air.",
  },
  {
    title: "4. Terhadap DEM (Ketinggian)",
    images: ["/img/Hasil/Perkembangan/4c. [2014-2019] perubahan thd dem.png", "/img/Hasil/Perkembangan/5c. [2019-2024] perubahan thd dem.png"],
    description:
      "Wilayah dengan ketinggian rendah cenderung lebih mengalami perkembangan lahan terbangun, baik selama periode 2014-2019 maupun periode 2019-2024. Daerah dengan ketinggian rendah cenderung mudah dikembangkan, karena mudah dalam membangun konstruksi bangunan dibandingkan dengan daerah yang lebih tinggi.",
  },
  {
    title: "5. Terhadap Kemiringan Lahan (Slope)",
    images: ["/img/Hasil/Perkembangan/4d. [2014-2019] perubahan thd slope.png", "/img/Hasil/Perkembangan/5d. [2019-2024] perubahan thd slope.png"],
    description:
      "Lahan dengan kemiringan datar hingga landai cenderung mengalami perubahan lahan terbangun, baik selama periode 2014-2019 maupun periode 2019-2024. Wilayah dengan kemiringan curam jarang dilakukan pembangunan, karena memiliki beberapa tantangan, baik secara teknis maupun non teknis.",
  },
];
const Perkembangan = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 bg-gradient-to-b from-orange-100 via-yellow-50 to-amber-100 text-gray-800">
      {/* Animasi Daun SVG */}
      {Array.from({ length: 15 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="absolute w-6 h-6 opacity-80 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <path d="M10 0 C12 5, 18 5, 10 20 C2 5, 8 5, 10 0 Z" fill="#DAA520" />
        </svg>
      ))}

      <motion.div className="relative max-w-6xl mx-auto space-y-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-center mb-8">Perkembangan</h2>

        {perkembanganData.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.images.map((img, i) => (
                <div key={i} className="text-center">
                  <p className="font-medium mb-2">{i === 0 ? "2014 - 2019" : "2019 - 2024"}</p>
                  <img src={img} alt={`Perkembangan ${item.title}`} className="rounded-xl shadow-md w-full object-contain border-2 border-orange-500" />
                </div>
              ))}
            </div>
            <p className="text-justify bg-white/60 backdrop-blur p-4 rounded-lg shadow-inner">{item.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Keyframes animasi daun */}
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

export default Perkembangan;
