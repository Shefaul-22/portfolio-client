import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Services></Services>
           <About></About>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default HomePage;