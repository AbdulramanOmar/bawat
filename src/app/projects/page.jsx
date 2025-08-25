import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "../sections/ProjectsSection";
import BasieHero from "../sections/BasieHero";

const page = () => {
  return (
    <main className="bg-[#394854]">
      <Navbar />
        <div  className='pt-50'/>

      <BasieHero title="Projects" />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default page;
