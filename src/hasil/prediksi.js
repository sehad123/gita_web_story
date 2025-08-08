import React from "react";
import { motion } from "framer-motion";

const Prediksi = () => {
  return (
    <section className="px-4 py-12 text-gray-800 bg-cover no-repeat min-h-screen" 
      style={{ backgroundImage: "url('/img/prediksi-bg.png')"}}
      >
      <motion.div className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold text-center text-pink-400 pb-12">Prediksi Lahan Terbangun di Jawa Timur Tahun 2029</h3>
        <h4 className="text-2xl font-bold text-center text-pink-200 pb-8 pt-5">Peta Sebaran Lahan Terbangun Jawa Timur Tahun 2029</h4>
        <div className="flex justify-center">
          <img src="/img/Hasil/Prediksi/7. 2029Simulasi ke-2 (2).png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-[550px] object-contain transition-transform duration-300 hover:scale-105" />
        </div>

        <div className="pt-2 pb-8">
          <p className="text-justify text-sm bg-white/70 backdrop-blur p-4 rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">
              Hasil simulasi menunjukkan luas lahan terbangun 
              Provinsi Jawa Timur sebesar 6.584.559.900 m2 atau 13,77% 
              dari total luas wilayah Provinsi Jawa Timur. Angka ini 
              menunjukkan peningkatan dari tahun 2019 yaitu sebesar 
              451.599.000 m2. Pola sebaran lahan 
              terbangun hasil simulasi cenderung mengikuti pola sebaran 
              saat periode 2014-2019. Kondisi ini mencerminkan adanya 
              keterkaitan pola perkembangan dari periode sebelumnya.
          </p>
        </div>

        <div className="flex justify-center mb-4 pt-7">
            <div className="overflow-x-auto pb-2">
              <h4 className="text-2xl font-bold text-center text-pink-200 pb-8 pt-5">Perkembangan Lahan Terbangun Selama 2014-2024</h4>
              <table className="min-w-max bg-[#f9f6ef] text-[#5c4b3b] rounded-lg shadow-md text-center border-collapse">
                <thead>
                  <tr>
                    <th rowSpan="2" className="py-3 px-6 bg-[#d7c8b6] border">Klasifikasi</th>
                    <th colSpan="2" className="py-3 px-6 bg-[#d7c8b6] border">2014–2019</th>
                    <th colSpan="2" className="py-3 px-6 bg-[#d7c8b6] border">2019–2024</th>
                    <th colSpan="2" className="py-3 px-6 bg-[#d7c8b6] border">2024–2029</th>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 bg-[#e8ded0] border">Δ Luas (ha)</th>
                    <th className="py-2 px-4 bg-[#e8ded0] border">% Δ</th>
                    <th className="py-2 px-4 bg-[#e8ded0] border">Δ Luas (ha)</th>
                    <th className="py-2 px-4 bg-[#e8ded0] border">% Δ</th>
                    <th className="py-2 px-4 bg-[#e8ded0] border">Δ Luas (ha)</th>
                    <th className="py-2 px-4 bg-[#e8ded0] border">% Δ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#f3ede5] transition">
                    <td className="py-3 px-6 border">Lahan Terbangun</td>
                    <td className="py-3 px-6 border">199438,83</td>
                    <td className="py-3 px-6 border">4,17</td>
                    <td className="py-3 px-6 border">172604,86</td>
                    <td className="py-3 px-6 border">3,61%</td>
                    <td className="py-3 px-6 border">65183,57</td>
                    <td className="py-3 px-6 border">-1,36%</td>
                  </tr>
                  <tr className="hover:bg-[#f3ede5] transition">
                    <td rowSpan="1" className="py-3 px-6 border">Bukan Lahan<br />Terbangun</td>
                    <td className="py-3 px-6 border">-199438,83</td>
                    <td className="py-3 px-6 border">-4,17%</td>
                    <td className="py-3 px-6 border">-172604,86</td>
                    <td className="py-3 px-6 border">-3,61%</td>
                    <td className="py-3 px-6 border">-65183,57</td>
                    <td className="py-3 px-6 border">-1,36%</td>
                  </tr>
                </tbody>
              </table>
            </div>

        </div>

        <div className="pb-5">
          <p className="text-justify text-sm bg-[#f9f6ef]/80 p-4 rounded-lg shadow-inner text-[#5c4b3b] transition-transform duration-300 hover:scale-105">
              Perkembangan lahan terbangun pada tabel tersebut menunjukkan 
              adanya sebagian lahan yang berubah dari bukan lahan 
              terbangun menjadi lahan terbangun, sehingga menyebabkan 
              perubahan tutupan lahan Provinsi Jawa Timur dalam beberapa
              waktu terakhir dan diprediksi akan terus berlanjut hingga tahun 
              2029. Namun, perkembangan lahan terbangun selama tiga 
              periode terakhir semakin mengalami penurunan. Oleh karena 
              itu, proporsi perkembangan lahan terbangun terhadap luas 
              wilayah masing-masing kabupaten/kota juga mengalami 
              penurunan, seperti yang disajikan pada gambar di bawah ini. 
          </p>
        </div>

        <h4 className="text-2xl font-bold text-center text-pink-200 pt-12">Peta Perkembangan Lahan Terbangun Terhadap Luas Wilayah</h4>
        <div className="flex justify-center pt-7 pb-3 transition-transform duration-300 hover:scale-105">
          <img src="/img/Hasil/Prediksi/2-[2024-2029].png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-[550px] object-contain transition-transform duration-300 hover:scale-105" />
        </div>

        <div className="pb-5">
          <p className="text-justify text-sm bg-white/70 backdrop-blur p-4 rounded-lg shadow-inner transition-transform duration-300 hover:scale-105">
              Gambar tersebut menunjukkan adanya konsentrasi pertumbuhan lahan di wilayah tertentu, seperti Kabupaten Lamongan, Bojonegoro, Sidoarjo, dan Mojokerto yang memiliki proporsi perkembangan lahan terbangun minimal pada rentang 3,04%-6,08% dari tiga periode terakhir. Sedangkan, wilayah lainnya cenderung konsisten dengan pertumbuhan lahan dengan rentang 0%-3,04%. Hal ini menunjukkan adanya polarisasi pembangunan di wilayah-wilayah tertentu. Wilayah tersebut mungkin memiliki fasilitas yang lengkap, aksesibilitas tinggi, atau kebijakan zonasi yang mendukung pembangunan. Oleh karena itu, perkembangan lahan terbangun banyak terjadi di wilayah tersebut.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Prediksi;
