"use client"

import AboutAmenities from "@/components/website/about/AboutAmenities";
import AboutHero from "@/components/website/about/AboutHero";
import AboutReconnect from "@/components/website/about/AboutReconnect";
import Reachout from "@/components/website/legals/Reachout";

const About = () => {
  return <div className="">
    <AboutHero />

    <AboutReconnect />

    <AboutAmenities />

    <Reachout position="left" />
  </div>
}

export default About;
