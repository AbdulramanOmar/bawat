"use client";
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OurLocation from "./components/OurLocation";
import Services from "./sections/Services";
import Testimeniols from "./sections/Testimeniols";
import Blog from "./sections/Blog";
import Soical from "./sections/Soical";
import FuelStaicte from "./sections/FuelStaicte";
import Partners from "./sections/Partners";
import Footer from "./components/Footer";
import Title from "./components/Title";
export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* Intro Logo Animation */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      <main className=" bg-[#394854] z-[9998] min-h-screen">
        <Navbar />
        <Hero />
        <div className="py-20">


        <Title title={"Our Services"} color="white"/>
        </div>
        <Services />
        <OurLocation />
        <Testimeniols />
        <FuelStaicte />
        <Soical />
        <Blog />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
