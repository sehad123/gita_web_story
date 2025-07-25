import React from "react";
import { motion } from "framer-motion";

const Peta = () => {
  const grafik = [
    {
      src: "/img/Hasil/Peta sebaran/grafik luas lahan terbangun.png",
    },
  ];

  const maps = [
    {
      src: "/img/Hasil/Peta sebaran/1. 2014 LULC Administrasi (Legenda).png",
      year: "2014",
    },
    {
      src: "/img/Hasil/Peta sebaran/2. 2019 LULC Administrasi (Legenda).png",
      year: "2019",
    },
    {
      src: "/img/Hasil/Peta sebaran/3. 2024 LULC Administrasi (Legenda).png",
      year: "2024",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 px-4 bg-gradient-to-b from-sky-200 via-green-100 to-yellow-100 text-gray-800">
      {/* Awan Kiri */}
      <div className="absolute top-10 left-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-8 left-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 left-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>

      {/* Awan Kanan */}
      <div className="absolute top-16 right-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 right-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-18 right-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>

      {/* Ornamen Rumput */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
          <path
            fill="#22c55e"
            d="M0,320L30,288C60,256,120,192,180,181.3C240,171,300,213,360,213.3C420,213,480,171,540,133.3C600,96,660,64,720,85.3C780,107,840,181,900,202.7C960,224,1020,192,1080,160C1140,128,1200,96,1260,96C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div className="relative max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        {/* Grafik */}
        <div className="mb-12 text-center">
          {grafik.map((item, index) => (
            <img key={index} src={item.src} alt="Grafik Luas Lahan Terbangun" className="mx-auto rounded-xl shadow-md w-full max-w-4xl object-contain" />
          ))}
        </div>

        {/* Peta Sebaran */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">Peta Sebaran Lahan Terbangun</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {maps.map((map, index) => (
              <div key={index} className="text-center">
                <img src={map.src} alt={`Peta ${map.year}`} className="rounded-xl shadow-md w-full object-contain" />
                <p className="mt-2 text-sm font-medium">{`LULC ${map.year}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analisis */}
        <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-inner leading-relaxed">
          <h4 className="font-semibold mb-2">Analisis Grafik:</h4>
          <p>Luas lahan terbangun mengalami peningkatan dari tahun 2014 ke tahun 2019, dan terus meningkat hingga tahun 2024. Sebaliknya, lahan bukan terbangun secara konsisten mengalami penurunan luas.</p>

          <h4 className="font-semibold mt-4 mb-2">Analisis Peta:</h4>
          <p>
            Secara visual, sebaran lahan terbangun cenderung memusat di wilayah ibukota provinsi yaitu Kota Surabaya dan sekitarnya, seperti Kabupaten Sidoarjo dan Gresik. Pada tahun 2019, mulai meluas ke wilayah Kabupaten Lamongan dan
            Tuban, serta pada tahun 2024 meluas hingga ke wilayah Kabupaten Bojonegoro, Pasuruan, dan Probolinggo.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Peta;
