import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import InteriorDesignShowcase from '../components/testimonial-one'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import FAQCTA from '../components/faq'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import CreativeDirector from '../components/creative-director'
import ConsequencesSection from '../components/consequences'
import FloatingButtons from '../components/floating-buttons'
import { Divider } from '@chakra-ui/core'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <InteriorDesignShowcase />
      <DreamHome />
      <Service />
      <About />
      <CreativeDirector />
      <ConsequencesSection/>
      <FAQCTA />
      <OurProject />
      <FloatingButtons/>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default Home
