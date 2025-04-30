import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../Container/Slider'
import RecentProducts from '../Container/RecentProducts'
import Testimonials from '../Container/Testimonials'
import Services from './Services'

const Home = () => {
  return (
    <>
        <div className="hero_area">
            <Slider/>
        </div>
        <RecentProducts/>

        <Testimonials/>
    </>
  )
}

export default Home