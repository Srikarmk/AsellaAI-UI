import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'
import Carousel from './Carousel'
import AllCategories from './categories/AllCategories'
import TrendingTools from './TrendingTools'
import HowItWorks from './HowItWorks'
import NewProducts from './NewProducts'
import FreeTrials from './FreeTrials'
import ByNumbers from './ByNumbers'
import FaqSupport from './FaqSupport'
import SellArea from './SellArea'
const Landing = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Carousel></Carousel>
        <AllCategories></AllCategories>
        <TrendingTools></TrendingTools>
        <HowItWorks></HowItWorks>
        <NewProducts></NewProducts>
        <ByNumbers></ByNumbers>
        <FreeTrials></FreeTrials>
        <FaqSupport></FaqSupport>
        <SellArea></SellArea>
        <Footer></Footer>
      
    </div>
  )
}

export default Landing
