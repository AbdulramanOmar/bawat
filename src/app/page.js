"use client";
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OurLocation from "./components/OurLocation";
import Services from "./sections/Services";
import Testimeniols from "./sections/Testimeniols";
import Blog from "./sections/Blog";
import Soical from "./sections/Soical";
import Partners from "./sections/Partners";
import Footer from "./components/Footer";
import Title from "./components/Title";
import ProcessFlow from "./components/HowItWorks";
import Staictes from "./components/Staictes";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
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
          <Title title={"Our Services"} color="white" />
        </div>
        <Services />
        <OurLocation />
        <Testimeniols />
        <Staictes />
        <Soical />
        <WhyWorkWithUs />
        <ProcessFlow />
        <Blog />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
