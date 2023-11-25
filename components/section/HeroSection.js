import React from "react";
import { Container } from "../layouts/Container";
import SectionHeading from "../headings/SectionHeading";
import SectionDescription from "../headings/SectionDescription";
import HeroButton from "../buttons/HeroButton";
import Image from "next/image";
import heroImg from "@/public/images/hero.png";
import Partners from "../carousel/Partners";
function HeroSection() {
  return (
    <>
      <div className="bg-lightwhite">
        <Container>
          <SectionHeading text="Build your audience and grow your brand" />
          <SectionDescription
            text="no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows."
            className="my-8"
          />
          <HeroButton text="Get Started Now" className="mt-4 mb-2" />
          <Image src={heroImg} alt="hero img" />
        </Container>
      </div>
      <div className="bg-semiwhite mb-14">
        <Container>
          <Partners />
          <Partners />
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
