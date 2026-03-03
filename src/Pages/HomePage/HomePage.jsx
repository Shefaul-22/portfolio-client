import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import Projects from './Projects/Projects';

const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Services></Services>
           <About></About>
           <Projects></Projects>
        </div>
    );
};

export default HomePage;