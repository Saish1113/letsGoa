import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home(props) {
  return (
    <>
  
      <HeroSection status={props.status}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
