import React from "react";

const Slide1 = ({ onScrollToNext }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/bg.png')" }}>
      {/* Teks Animasi */}
      <h1
        className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight hover:animate-wobble bg-white bg-opacity-70 p-6 rounded-2xl shadow-xl font-[PlayfairDisplay] tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span className="text-pink-600">Di Balik Peta</span>
        <span className="text-blue-700">:</span> <br />
        <span className="italic">Melihat Masa Depan Jawa Timur</span> <br />
        <span className="text-blue-700">Melalui Peta Tutupan Lahan Terbangun</span>
      </h1>

      {/* Subtitle */}
      <p
        className="mt-6 text-lg font-medium text-blue-700 hover:scale-110 transition-transform duration-300 bg-white bg-opacity-70 px-4 py-2 rounded-lg shadow-md font-[Poppins] cursor-pointer"
        onClick={onScrollToNext} // Menambahkan event onClick untuk pindah ke Slide2
      >
        Scroll Ke Bawah ↓
      </p>
      
    </section>
  );
};

export default Slide1;
