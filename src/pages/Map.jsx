import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Map from '../components/map/Map';

const Service = () => {

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
      <Map />

      {/* 底下用8個換行空出雨footer距離 */}
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  )
}

export default Service