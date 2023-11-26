import React from "react";
import { Container } from "../layouts/Container";
import SectionTitle from "../headings/SectionTitle";
import RocketIcon from "@/icons/RocketIcon";
import { aboutList } from "@/config/data";
import LineIcon from "@/icons/LineIcon";
import SectionMenuItem from "../sectionitem/SectionMenuItem";
import AboutDetailsCard from "../cards/AboutDetailsCard";
import classNames from "classnames";

function AboutSection() {
  return (
    <div className="lg:mt-20 mt-10 px-4">
      <Container className="pb-10 !pt-10 max-lg:rounded-[15px] max-lg:border border-solid border-black/25">
        <SectionTitle className="flex gap-x-3">
          The Xerocodee way <RocketIcon />
        </SectionTitle>
        <div className="flex flex-col gap-y-12">
          {aboutList.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-center mt-10 lg:mt-24"
            >
              <div className="flex flex-col items-center text-clamp-heading-sm text-semiblack font-semibold leading-none">
                {item.number}
                <LineIcon />
              </div>
              <h5 className="text-center text-darkpurple text-xl sm:text-2xl font-semibold font-poppins mt-5 lg:mt-14">
                {item.title}
              </h5>
              <p className="text-center font-nunito text-semilightpurple mt-1">
                {item.description}
              </p>
              {item.menuItems && (
                <SectionMenuItem
                  menuButtons={item.menuItems}
                  className="!justify-start mt-8"
                >
                  {item?.menuDetails.map((detail, index) => (
                    <AboutDetailsCard
                      key={detail.title}
                      title={detail.title}
                      description={detail.description}
                      img={detail.img}
                      index={index}
                    />
                  ))}
                </SectionMenuItem>
              )}
              <div
                className={classNames("flex flex-col gap-y-20 mt-10 lg:mt-20", {
                  hidden: !item.details,
                })}
              >
                {item.details?.map((detail, index) => (
                  <AboutDetailsCard
                    key={detail.title}
                    title={detail.title}
                    description={detail.description}
                    img={detail.img}
                    index={index}
                    isImgBig={true}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
