import React, { useEffect } from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import AOS from "aos";
import ProjectList from "../components/ProjectList";
import Skill from "../components/Skill";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Number from "../components/Number";
import CtaBlock from "../components/CtaBlock";
import Contact from "../components/Contact";
import Loader from "../components/Loader";
type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });
  return (
    <div
      data-spy="scroll"
      data-target=".site-navbar-target"
      data-offset="300"
      data-aos-easing="slide"
      data-aos-duration="800"
      data-aos-delay="0"
    >
      <NavBar />
      <HeroSection />
      <About />
      <Resume />
      <Skill />
      <Services />
      <ProjectList />
      <Blog />
      <Number />
      <CtaBlock />
      <Contact />
      <Footer />
      {/* <Loader /> */}
    </div>
  );
};

export default HomePage;
