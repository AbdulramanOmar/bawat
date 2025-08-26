import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/About";
import Staictes from "../components/Staictes";
import Mission from "../sections/Mission";
import OurLocation from "../components/OurLocation";
import TestimonialHero from "../sections/Testimeniols";
import TimeLine from "../components/TimeLine";
import Certifications from "../components/Certifications";
import SplitBanner from "../components/SplitBanner";

const Page = () => {
  return (
    <main className="bg-[#394854] relative">
      <Navbar />
      <About />
      <Staictes />
      <Mission />
      <OurLocation />
      <Certifications />
      <TimeLine />
      <TestimonialHero />
      <SplitBanner />
      <Footer />
    </main>
  );
};

export default Page;
