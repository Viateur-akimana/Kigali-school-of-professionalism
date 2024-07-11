'use client'

import React from 'react';
import Introduction from './components/Introduction';
import Choose from './components/Choose';
import Main from './components/Main'
import Chance from './components/Chance';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto pt-24">
            <Introduction/>
            <Choose/>
            <Chance/>
            <Main/>
        </div>
    );
};

export default HomePage;