import React from "react";
import { Container } from "../layouts/Container";
import SectionTitle from "../headings/SectionTitle";
import SectionDescription from "../headings/SectionDescription";
import SectionMenuItem from "../sectionitem/SectionMenuItem";
import SectionItemTitle from "../headings/SectionItemTitle";
import Image from "next/image";
import { infraList, withAndWithout, featuresList } from "@/config/data";
import InfrastructureCard from "../cards/InfrastructureCard";
import dashboard from "@/public/images/dashboard.png";

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
          className="mt-5 mb-16 lg:!text-xl"
        />
        <SectionMenuItem menuButtons={featuresList}>
          <Image src={dashboard} alt="dashboard" />
        </SectionMenuItem>
        <div className="flex flex-row flex-wrap my-28 justify-evenly w-full gap-x-10 gap-y-20">
          {withAndWithout.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <SectionItemTitle text={item.title} className="mb-20" />
              <Image src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
        <SectionTitle className="mt-20">
          Self serve infrastructure platform for{" "}
          <span className="text-darkblue">scaling teams</span>
        </SectionTitle>
        <div className="flex flex-wrap justify-center lg:justify-between max-w-[1115px] gap-x-1 gap-y-10 mt-14">
          {infraList.map((item) => (
            <InfrastructureCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FeatureSection;
