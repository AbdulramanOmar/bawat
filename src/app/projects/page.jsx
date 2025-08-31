import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "../sections/ProjectsSection";
import BasieHero from "../sections/BasieHero";
import MobileProjectsSection from "../sections/MobileProjectsSection";

const page = () => {
  return (
    <main className="bg-[#394854]">
      <Navbar />
        <div  className='pt-50'/>
      <BasieHero title="Projects" />
      <ProjectsSection />
      <MobileProjectsSection />
      <Footer />
    </main>
  );
};

export default page;

