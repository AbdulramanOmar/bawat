import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../sections/ServiceHero'
import ProjectsSection from '../sections/ProjectsSection'

const page = () => {
  return (
    <main className="bg-[#394854]">
        <Navbar />
        <ServiceHero />
        <ProjectsSection />
        <Footer />
    </main>
  )
}

export default page