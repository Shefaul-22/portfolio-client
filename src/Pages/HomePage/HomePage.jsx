import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import SkillAndTechStack from './Skills/SkillAndTechStack';
import Certificate from './Certificate/Certificate';


const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Services></Services>
           <About></About>
           <SkillAndTechStack></SkillAndTechStack>
           <Certificate></Certificate>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default HomePage;