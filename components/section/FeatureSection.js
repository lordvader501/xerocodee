import React from "react";
import { Container } from "../layouts/Container";
import SectionTitle from "../headings/SectionTitle";
import SectionDescription from "../headings/SectionDescription";
import FeaturesItem from "../sectionitem/FeaturesItem";

function FeatureSection() {
  return (
    <div>
      <Container className="mb-10">
        <h2 className="py-6 px-11 bg-lightblue text-darkblue font-nunito font-bold text-lg rounded-full mb-20">
          Features
        </h2>
        <SectionTitle>
          <span className="text-darkblue">Save 1000s</span> of expensive coder
          hours
        </SectionTitle>
        <SectionDescription
          text="With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability."
          className="mt-5 mb-16 !text-xl"
        />
        <FeaturesItem />
      </Container>
    </div>
  );
}

export default FeatureSection;
