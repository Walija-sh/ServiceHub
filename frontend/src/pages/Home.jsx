import React from 'react'
import HomeHero from '../components/HomeHero'
import PopularServices from '../components/PopularServices'
import HowBookingWorks from '../components/HowBookingWorks'
import TopRatedProviders from '../components/TopRatedProviders'
import ProviderCTA from '../components/ProviderCTA'
import CustomerReviews from '../components/CustomerReviews'
import TrustSection from '../components/TrustSection'
import FAQSection from '../components/FAQSection'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <PopularServices/>
    <HowBookingWorks/>
    <TopRatedProviders/>
    <ProviderCTA/>
    <CustomerReviews/>
    <TrustSection/>
    <FAQSection/>
    <Newsletter/>
    </>
  )
}

export default Home