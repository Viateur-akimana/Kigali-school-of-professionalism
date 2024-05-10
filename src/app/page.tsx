'use client'
import React from 'react';
import Introduction from './components/Introduction';
import Choose from './components/Choose';
// import Carousel from './components/Carousel';
import 

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Introduction/>
      <Choose/>
      {/* <Carousel/> */}
    </div>
  );
};

export default HomePage;