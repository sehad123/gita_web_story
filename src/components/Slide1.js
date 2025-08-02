import React from "react";

const Slide1 = ({ onScrollToNext }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/cover.png')" }}>
      {/* Teks Animasi */}
      
<h1
  className="absolute top-[180px] text-5xl md:text-5xl font-black leading-tight hover:animate-wobble font-[Poppins] tracking-wide"
  style={{
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)' // lebih halus dan terlihat
  }}
>
  <span className="text-yellow-400 drop-shadow-md text-4xl md:text-5xl">
    Di Balik Peta :
  </span><br />
  <span className="italic text-white">
    Melihat Masa Depan Jawa Timur
  </span><br />
  <span className="text-white">
    Melalui <span className="text-pink-500">
    Peta Tutupan Lahan Terbangun
  </span>
  </span>
  
</h1>

      {/* Subtitle */}
      <p
        className="relative top-[40px] mt-6 text-xs font-medium text-pink-700 hover:scale-110 transition-transform duration-300 bg-white bg-opacity-70 px-4 py-2 rounded-lg shadow-md font-[Poppins] cursor-pointer"
        onClick={onScrollToNext} // Menambahkan event onClick untuk pindah ke Slide2
      >
        SCROLL KE BAWAH ↓
      </p>
    </section>
  );
};

export default Slide1;
