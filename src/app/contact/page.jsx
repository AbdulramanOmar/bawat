import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../sections/ContactSection";

const page = () => {
  return (
    <main className="bg-[#394854]">
      <Navbar />
      <div className="pt-40"/>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default page;
