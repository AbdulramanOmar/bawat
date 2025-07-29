import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceHero from "../sections/ServiceHero";
import ServiceShowcase from "../components/ServiceShowcase";
import FuelSection from "../components/FuelSection";
import StatsScrollSection from "../components/StatsScrollSection";
import Certifications from "../components/Certifications";
import ProcessFlow from "../components/HowItWorks";

const page = () => {
  return (
    <main className="bg-[#394854]">
      <Navbar />
      <ServiceHero />
      <FuelSection />
      <ServiceShowcase />
      <ProcessFlow />
      <Certifications />
      <Footer />
    </main>
  );
};

export default page;
