'use client'
import React from 'react';
import Introduction from './components/Introduction';
import Choose from './components/Choose';

import Main from './components/Main'
import Chance from './components/Chance';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Introduction/>
      <Choose/>
      <Chance/>
      <Main/>
    </div>
  );
};

export default HomePage;