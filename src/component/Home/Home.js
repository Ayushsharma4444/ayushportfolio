import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import Banner from '../../utils/Banner/Banner'
import Skills from '../../utils/Skills/Myskills'
import Features from '../../utils/Features/Features'
import Footer from '../../utils/Footer/Footer'
import Aboutme from '../../utils/aboutme/Aboutme'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Aboutme/>
    <Skills/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Home