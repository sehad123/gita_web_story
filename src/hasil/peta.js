import React from "react";
import { motion } from "framer-motion";

const Peta = () => {
  const sebaranData = [
  {
    title: "Perkembangan Secara Umum (2014–2024)",
    images: ["/img/Grafik/2014.png", "/img/Grafik/2019.png", "/img/Grafik/2024.png"],
    description:
      "Secara umum, luas lahan terbangun terus mengalami peningkatan dari tahun 2014, 2019, hingga 2024 di setiap kabupaten dan kota. Kota Surabaya, Malang, Blitar, Mojokerto, dan Madiun memiliki persentase tertinggi selama tahun 2014, 2019, dan 2024. Kontribusi lahan terbangun cenderung lebih dominan di wilayah perkotaan. Hal ini disebabkan karena luas wilayah perkotaan relatif kecil, sehingga penambahan luas lahan terbangun sangat berpengaruh terhadap komposisi wilayahnya.",
  },
];

  const grafik = [
    {
      src: "/img/Hasil/Peta sebaran/grafik luas lahan terbangun.png",
    },
  ];

  const legenda = [
    {
      src: "/img/Hasil/Peta sebaran/Legenda.png",
    },
  ];

  const maps = [
    {
      src: "/img/Hasil/Peta sebaran/1. Tutupan Lahan 2014.png",
      year: "2014",
    },
    {
      src: "/img/Hasil/Peta sebaran/1. Tutupan Lahan 2019.png",
      year: "2019",
    },
    {
      src: "/img/Hasil/Peta sebaran/1. Tutupan Lahan 2024.png",
      year: "2024",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-12 px-4 bg-[#545454] text-gray-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/peta-bg.png')" }}
    >
      {/* Awan Kiri */}
      {/*
      <div className="absolute top-10 left-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-8 left-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 left-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>
      */}

      {/* Awan Kanan */}
      {/*
      <div className="absolute top-16 right-10 w-40 h-20 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-12 right-28 w-28 h-14 bg-white rounded-full shadow-lg opacity-80"></div>
      <div className="absolute top-18 right-16 w-32 h-16 bg-white rounded-full shadow-lg opacity-80"></div>
      */}

      {/* Ornamen Rumput */}
      {/*
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
          <path
            fill="#22c55e"
            d="M0,320L30,288C60,256,120,192,180,181.3C240,171,300,213,360,213.3C420,213,480,171,540,133.3C600,96,660,64,720,85.3C780,107,840,181,900,202.7C960,224,1020,192,1080,160C1140,128,1200,96,1260,96C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      */}

      <motion.div className="relative max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        
        {/* Peta Sebaran */}
        <div className="">
          <h3 className="text-3xl font-bold text-center text-pink-400 pb-12 pt-5">Perkembangan Lahan Terbangun di Jawa Timur Selama Periode 2014-2024</h3>
          <h4 className="text-2xl font-bold text-center text-pink-200 pb-8 pt-5">Peta Sebaran Lahan Terbangun Jawa Timur</h4>
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-10">
              {maps.map((map, index) => (
                <div key={index} className=" relative text-center justify-center items-center ">
                  <img src={map.src} alt={`Peta ${map.year}`} className="rounded-2xl shadow-md w-full object-contain transition-transform duration-300 hover:scale-105" />
                  <div className="bg-pink-300 mt-3 rounded-lg mx-auto w-[80px] h-[25px] flex justify-center items-center">
                    <p className="absolute text-sm font-bold text-black ">{`LULC ${map.year}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analisis */}
        <div className="bg-white/80 backdrop-blur p-4 text-justify rounded-xl shadow-inner leading-relaxed transition-transform duration-300 hover:scale-105">
          <p className=" text-sm ">
<t></t>Pada tahun 2014, lahan terbangun di Jawa Timur terkonsentrasi di wilayah ibukota provinsi yaitu 
Kota Surabaya dan sekitarnya, seperti Kabupaten Gresik, 
Sidoarjo, dan Mojokerto. Hal ini dapat disebabkan karena 
pengaruh letak geografis yang dekat dengan ibukota provinsi, 
sehingga memberikan dampak terhadap wilayah di sekitarnya. Pada tahun 2019, sebaran lahan 
terbangun mulai meluas ke wilayah Lamongan dan Tuban. 
Sebaran lahan terbangun yang paling terlihat terletak di sebelah utara wilayah Lamongan 
dan Tuban. Wilayah pesisir utara 
cenderung memiliki kondisi topografi dataran rendah dan 
kemiringan lahan yang landai. Selain itu, wilayah pesisir utara 
juga dilewati jalur nasional yang menjadi urat nadi utama 
transportasi untuk pergerakan barang dan penumpang di Pulau 
Jawa yang biasa disebut dengan Jalur Pantura (Jalur Pantai 
Utara). Sedangkan, pada tahun 2024, lahan terbangun semakin 
menyebar ke wilayah Bojonegoro, Pasuruan, dan Probolinggo.
          </p>
        </div>

        {/* Grafik */}
        <div className="">
          <div className="mb-6 mt-12 text-center">
            <h4 className="text-2xl font-bold text-center text-pink-200 pb-8 pt-5">Grafik Luas Lahan Terbangun dan Bukan Lahan Terbangun Jawa Timur</h4>
            {grafik.map((item, index) => (
              <img key={index} src={item.src} alt="Grafik Luas Lahan Terbangun" className="mx-auto rounded-xl shadow-md max-w-2xl object-contain transition-transform duration-300 hover:scale-105" />
            ))}
          </div>
          <div className="mx-auto bg-white/80 backdrop-blur p-4 w-[700px] h-[80px] rounded-xl shadow-inner items-center leading-relaxed transition-transform duration-300 hover:scale-105">
            <p className="text-sm text-justify">
              Luas lahan terbangun mengalami peningkatan dari tahun 2014 ke tahun 2019, dan terus meningkat hingga tahun 2024. Sebaliknya, lahan bukan terbangun secara konsisten mengalami penurunan luas.
            </p>
          </div>
        </div>

        <div className="bg-pink-500 text-white text-center rounded-2xl mx-auto w-[470px] m-[60px]">
          <p className="text-lg font-bold text-center text-pink-200 pb-2 pt-2">
            Persentase perkembangan luas lahan terbangun terhadap luas wilayah
          </p>
        </div>

        {sebaranData.map((item, index) => (
          <div key={index} className="space-y-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.images.map((img, i) => (
                <div key={i} className="text-center">
                  <div className="bg-pink-300 rounded-lg mx-auto w-[100px] h-[25px] flex justify-center items-center">
                    <p className="text-base font-bold mb-2 mt-2">
                      {i === 0 ? "2014": i=== 1 ? "2019" : "2024"}
                    </p>
                  </div>
                  <div className="pt-3">
                    <img src={img} className="rounded-xl shadow-md w-full object-contain border-2 border-white transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-justify bg-white/60 backdrop-blur p-4 text-sm rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Peta;
