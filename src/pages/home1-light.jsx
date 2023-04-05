import React from "react";
import Navbar from "../components/Navbar/navbar";
import Head from "next/head";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../components/About-us/about-us";
import Services from "../components/Services/services";
import Works from "../components/Works/works";
import Numbers from "../components/Numbers/numbers";
import Testimonials from "../components/Testimonials/testimonials";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import Clients from "../components/Clients/clients";
import Blogs1 from "../components/blogs/Blogs1/blogs1";
import appData from "../data/app.json";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";

const Homepage = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <>
    <Head>
        <title>
        ImpactIQ | Impacting The Digital Tomorrow
        </title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        {/* <link legacyBehavior rel="icon" href="/fav.png" /> */}
      </Head>
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        {/* <Works /> */}
        {/* <Testimonials /> */}
        <Numbers />
        <VideoWithTestimonials />
        {/* <SkillsCircle theme="light" /> */}
        {/* <div style={{marginTop: "4rem"}}>
        <Clients theme="light" />

        </div> */}
        <div style={{ marginTop: "4rem" }}>
          <CallToAction />
        </div>
        <Blogs1 />
        <Footer />
      </div>
    </LightTheme>
    </>

  );
};

export default Homepage;
