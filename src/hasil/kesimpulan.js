import React, { useEffect, useState } from "react";

const Kesimpulan = ({ id, onScrollToNext }) => {
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
        "Pemanfaatan citra Landsat-8 untuk menganalisis perkembangan lahan terbangun di Jawa Timur selama periode 2014-2024 menghasilkan peta sebaran lahan terbangun tahun 2014, 2019, dan 2024 dengan tingkat akurasi yang sangat baik, yaitu sebesar 93,51%, 92,78%, dan 94,33%. Perkembangan lahan terbangun selama periode 2014-2024 cenderung memusat di wilayah Kota Surabaya dan sekitarnya. Sementara itu, kontribusi perkembangan lahan terbangun terhadap luas wilayah masing-masing kabupaten/kota lebih terlihat untuk wilayah perkotaan, karena memiliki luas wilayah administrasi yang relatif kecil, seperti Kota Surabaya, Mojokerto, Malang, Madiun, dan Blitar.",
      foto: "/img/no1.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "Cellular Automata (CA)",
      jabatan: "Simulasi dan Prediksi",
      deskripsi:
        "Penggunaan metode Cellular Automata sebagai model prediksi menghasilkan model dengan tingkat akurasi sebesar 95,83%. Cellular Automata dapat menangkap pola perkembangan lahan terbangun yang terjadi di tahun sebelumnya, sehingga model yang dihasilkan dapat merepresentasikan keadaan di masa mendatang. Prediksi lahan terbangun tahun 2029 masih memiliki pola yang sama dengan tahun-tahun sebelumnya, yaitu memusat di Kota Surabaya dan sekitarnya, terutama di wilayah perkotaan.",
      foto: "/img/no2.png", // ganti sesuai path sebenarnya
    },
    {
      nama: "Cellular Automata (CA)",
      jabatan: "Simulasi dan Prediksi",
      deskripsi:
        "Web story yang dihasilkan dapat memberikan informasi terkait perkembangan lahan terbangun selama periode 2014-2024 hingga prediksi di tahun 2029 secara informatif dan cakupan yang lebih luas. Informasi pada web story disusun dengan alur seperti cerita, sehingga pengguna tidak merasa bosan saat mengakses informasi. Penyajian web story yang mengutamakan aspek visual, seperti warna, elemen, dan grafis, menjadi daya tarik tersendiri bagi pengguna karena informasi tidak hanya disajikan dalam bentuk teks, tetapi juga dilengkapi dengan dekorasi yang menarik dan tidak membosankan.",
      foto: "/img/no3.png", // ganti sesuai path sebenarnya
    },
  ];

  return (
    <section 
      id={id} // Ini penting!
      className="py-16 px-6 text-white bg-cover min-h-screen"
      style={{
        backgroundImage: "url('/img/kesimpulan-bg.png')",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Kesimpulan</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {metode.map((item, idx) => (
            <div key={idx} className="bg-[#E8F0F2] text-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col">
                <img src={item.foto} alt={item.nama} className="w-20 h-20 rounded-xl object-cover items-center mx-auto top-0" />
                <p className="text-sm leading-relaxed text-justify">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Kesimpulan;
