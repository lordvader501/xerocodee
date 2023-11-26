import React from "react";
import { Container } from "../layouts/Container";
import SectionTitle from "../headings/SectionTitle";
import { detailsList } from "@/config/data";
import DetailsCard from "../cards/DetailsCard";

function DetailsSection() {
  return (
    <div className="lg:px-6 px-4 overflow-hidden mt-32">
      <Container className="bg-darkblue rounded-[35px] pb-20">
        <SectionTitle className="!text-white">
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </SectionTitle>
        <div className="flex flex-col gap-y-16 lg:mt-28 mt-16">
          {detailsList.map((item, index) => (
            <DetailsCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              index={index}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default DetailsSection;
