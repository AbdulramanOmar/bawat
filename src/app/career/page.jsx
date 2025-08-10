import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../sections/Team'
import BasieHero from '../sections/BasieHero'

const page = () => {
  return (
    <main className="bg-[#394854]">
        <Navbar />
        <div  className='pt-50'/>
        <BasieHero title="Career"/>
        <Team />
        <Footer />
    </main>
  )
}

export default page