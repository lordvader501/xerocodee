import React from "react";
import Image from "next/image";
import classNames from "classnames";
import SectionDescription from "../headings/SectionDescription";

function DetailsCard({ img, title, description, index }) {
  return (
    <div
      className={classNames(
        "flex max-w-[1115px] lg:flex-row flex-col items-center gap-x-10",
        {
          "lg:flex-row-reverse gap-y-8": index % 2 !== 0,
        }
      )}
    >
      <Image
        src={img}
        alt={title}
        className={classNames("", { "lg:w-2/3": index === 0 })}
      />
      <div
        className={classNames({
          "lg:w-1/3": index === 0,
          "lg:w-2/5": index !== 0,
        })}
      >
        <h3 className="text-clamp-heading font-bold lg:text-left text-center text-white leading-none">
          {title}
        </h3>
        <SectionDescription
          text={description}
          className="!text-white !font-normal lg:!text-left mt-3 !max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default DetailsCard;
