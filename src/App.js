import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide1 from "./components/Slide1";
import Peta from "./hasil/peta";
import Perkembangan from "./hasil/perkembangan";
import Akurasi from "./hasil/akurasi";
import Simulasi from "./hasil/simulasi";
import Validasi from "./hasil/validasi";
import Prediksi from "./hasil/prediksi";
import Data from "./hasil/data";
import Slide6 from "./components/Slide6";

function App() {
  const slide2Ref = useRef(null);
  const dataRef = useRef(null);

  const handleScrollToSlide2 = () => {
    if (slide2Ref.current) {
      slide2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToData = () => {
    if (dataRef.current) {
      dataRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <Slide1 onScrollToNext={handleScrollToSlide2} />
      <Slide2 ref={slide2Ref} />
      <Slide3 />
      <Slide4 />
      <Slide5 id="hasil" onScrollToNext={handleScrollToData} />
      <Data ref={dataRef} />
      <Peta />
      <Akurasi />
      <Perkembangan />
      <Simulasi />
      <Validasi />
      <Prediksi />
      <Slide6 />
    </div>
  );
}

export default App;
