import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/font-awesome.min.css";
import "./assets/style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About_Us/About";
import OurServices from "./components/OurServices/OurServices";
import Training from "./components/Training/Training";
import ContactUs from "./components/ContactUs/ContactUs";
import BentChair from "./components/WorkShop/BentChair";
import MPCT from "./components/WorkShop/MPCT";
import RJIT from "./components/WorkShop/RJIT";
import Xiaomi_Mi_Company from "./components/WorkShop/Xiaomi_Mi_Company";
import PlacementDesk from "./components/Placement/PlacementDesk";
import PlacementGallery from "./components/Placement/PlacementGallery";
import Birthday from "./components/Events/Birthday";
import Aniversary from "./components/Events/Aniversary";
import Tours from "./components/Events/Tours";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<OurServices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/bentchair" element={<BentChair />} />
        <Route path="/mpct" element={<MPCT />} />
        <Route path="/rjit" element={<RJIT />} />
        <Route path="/xiaomi" element={<Xiaomi_Mi_Company />} />
        <Route path="/placement_desk" element={<PlacementDesk />} />
        <Route path="/placement_gallery" element={<PlacementGallery />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/aniversary" element={<Aniversary />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
