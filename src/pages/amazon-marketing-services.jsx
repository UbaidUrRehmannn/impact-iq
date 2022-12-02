import React from "react";
import Navbar from "../components/Navbar/navbar";
import Services from "../components/ams-Services/services";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import Clients from "../components/Clients/clients";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import PagesHeader from "../components/amazon-marketing-services";
import AboutIntro from "../components/About-ams-intro";
import LightTheme from "../layouts/Light";
import Team from "../components/Team/team";
import MinimalArea from "../components/Minimal-Area/minimal-area";

const AmazonMarketingServices = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      {/* <SkillsCircle from="aboutPage" /> */}
      <div className="mt-70">
        <Team />
      </div>
      <MinimalArea />
      <Clients theme="light" />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default AmazonMarketingServices;
