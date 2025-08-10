import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceShowcase from "../components/ServiceShowcase";
import FuelSection from "../components/FuelSection";
import StatsScrollSection from "../components/StatsScrollSection";
import Certifications from "../components/Certifications";
import ProcessFlow from "../components/HowItWorks";
import BasieHero from "../sections/BasieHero";

const page = () => {
  return (
    <main className="bg-[#394854]">
      <Navbar />
      <div className="pt-50" />
      <BasieHero title="Services" />
      <FuelSection />
      <ServiceShowcase />
      <ProcessFlow />
      <Certifications />
      <Footer />
    </main>
  );
};

export default page;
