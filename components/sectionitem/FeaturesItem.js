"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import { featuresList, withAndWithout } from "@/config/data";
import classNames from "classnames";
import Image from "next/image";
import dashboard from "@/public/images/dashboard.png";
import SectionItemTitle from "../headings/SectionItemTitle";

function FeaturesItem() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="w-full flex justify-evenly items-center flex-wrap gap-4 mb-16">
        {featuresList.map((item) => (
          <Button
            key={item.id}
            variant="text"
            color="primary"
            className={classNames(
              "text-lightpurple font-nunito text-center text-px12 font-bold w-32 capitalize px-2",
              {
                "border-b-4 border-solid border-blue-600 bg-transparent":
                  item.id === active,
                "outline outline-1 outline-slate-200 bg-white":
                  item.id !== active,
              }
            )}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <Image src={dashboard} alt="dashboard" />
      <div className="flex flex-row flex-wrap mt-28 justify-evenly w-full gap-x-10 gap-y-20">
        {withAndWithout.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <SectionItemTitle text={item.title} className="mb-20" />
            <Image src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturesItem;
