import React from 'react';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Numbers from '../components/Numbers';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <>
    <Nav />
    <Landing />
    <Features /> 
    <Numbers /> 
    <Reviews />  
    <Footer />
    </>
  )
}

export default Home