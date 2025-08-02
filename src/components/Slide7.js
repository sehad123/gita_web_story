import React, { useEffect, useState } from "react";

const Slide7 = () => {
   const metode = [
    {
      nama: "Google Earth Engine",
      jabatan: "Pengumpulan data citra",
      foto: "/img/gee.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "USGS",
      jabatan: "Pengumpulan data jaringan jalan dan badan air",
      foto: "/img/usgs.jpg", // ganti sesuai path sebenarnya
    },
    {
      nama: "Open Street Map",
      jabatan: "Pengumpulan data DEM dan Slope",
      foto: "/img/osm.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "ENVI",
      jabatan: "Klasifikasi",
      foto: "/img/envi.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "QGIS",
      jabatan: "Simulasi dan Prediksi",
      foto: "/img/qgis.png", // ganti sesuai path sebenarnya
    },
  ];

  return (
    <section
      className="bg-[#025464] py-16 px-6 text-white bg-cover h-screen"
      style={{
        backgroundImage: "url('/img/tools-bg.png')",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tools</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {metode.map((item, idx) => (
            <div key={idx} className="bg-[#E8F0F2] text-gray-800 rounded-xl shadow-md p-3 flex items-center gap-6 transition-transform duration-300 hover:scale-105">
              <img src={item.foto} alt={item.nama} className="w-30 h-20 rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-bold text-pink-700">{item.nama}</h3>
                <p className="text-sm text-pink-400 mb-2">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Slide7;
