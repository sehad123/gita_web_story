import React, { useEffect, useState } from "react";

const Slide6 = ({ id, onScrollToNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("slide4");
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const metode = [
    {
      nama: "Maximum Likelihood Classification (MLC)",
      jabatan: "Klasifikasi",
      deskripsi:
        "Maximum likelihood merupakan salah satu metode klasifikasi terbimbing untuk data penginderaan jauh. Metode ini mengambil nilai probabilitas maximum sebagai hasil klasifikasi yang didapatkan melalui proses training area (Septianingsih et al., 2019). Metode Maximum likelihood memiliki asumsi bahwa objek homogen selalu berdistribusi normal dan proses klasifikasi untuk setiap pikselnya tidak didasarkan pada jarak euklidiannya, melainkan bentuk, ukuran, dan karakteristik sampel.",
      foto: "/img/mlc.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "Cellular Automata (CA)",
      jabatan: "Simulasi dan Prediksi",
      deskripsi:
        "Cellular Automata (CA) merupakan suatu sistem yang bersifat dinamis berkelanjutan. Ruang dalam sistem terbagi atas spatial cell yang teratur dan berlangsung dengan cara berkelanjutan. Kemudian, state dari setiap cell akan diperbarui berdasarkan rules. Rules didefinisikan sebagai aturan untuk sebuah state, di mana state pada waktu t+1 dipengaruhi oleh state itu sendiri dan state tetangganya pada waktu t. CA memiliki lima elemen dasar penyusun yang terdiri dari cell, state, neighborhood, rules, dan time (Liu, 2009).",
      foto: "/img/simulasi_ca.gif", // ganti sesuai path sebenarnya
    },
  ];

  return (
    <section 
      id={id} // Ini penting!
      className="bg-[#025464] py-16 px-6 text-white bg-cover h-screen"
      style={{
        backgroundImage: "url('/img/metode-bg.png')",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Metode Penelitian</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {metode.map((item, idx) => (
            <div key={idx} className="bg-[#E8F0F2] text-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-transform duration-300 hover:scale-105">
              <img src={item.foto} alt={item.nama} className="w-32 h-32 rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-bold text-pink-700">{item.nama}</h3>
                <p className="text-base text-pink-400 mb-2">{item.jabatan}</p>
                <p className="text-sm leading-relaxed text-justify">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Slide6;
