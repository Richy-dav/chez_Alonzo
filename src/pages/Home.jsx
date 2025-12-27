import React from 'react';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Menu from "../components/sections/Menu";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import BookNow from "../components/sections/BookNow";
import Footer from "../components/layout/Footer";

const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Contact />
        <BookNow/>
        <Footer />
        </>
    );
};

export default Home;