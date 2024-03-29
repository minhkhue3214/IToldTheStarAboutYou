import React from 'react';
import Navbar from '../../components/Navbar2/Navbar2'
import Slider from '../../components/Slider/Slider'
import MagicVideo from '../../components/MagicVideo/MagicVideo'
import GridGift from '../../components/GridGift/GridGift';
import Footer from '../../components/Footer2/Footer';
import MagicBg from '../../components/MagicBg/MagicBg';
import TerminalText from '../../components/TerminalText/TerminalText';

import './style.css'

const happy = () => {
  return (
    <div className='happy-container'>
      <Navbar />
      <Slider />
      <MagicVideo />
      <TerminalText />
      <GridGift />
      <Footer />
    </div>
  )
}

export default happy