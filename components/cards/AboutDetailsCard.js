import React from "react";
import Image from "next/image";
import classNames from "classnames";

function AboutDetailsCard({ title, description, img, index, isImgBig }) {
  return (
    <div
      className={classNames("flex justify-evenly items-center flex-col gap-5", {
        "lg:flex-row-reverse": index % 2 !== 0,
        "lg:flex-row": index % 2 === 0,
      })}
    >
      <Image
        src={img}
        alt={title}
        className={classNames("lg:w-[40%] w-full object-contain", {
          "max-w-[300px]": isImgBig && index > 0,
          " max-w-[180px]": isImgBig && index === 0,
        })}
      />
      <div className="flex flex-col justify-center lg:w-[40%] w-full">
        <h6 className="text-xl text-darkpurple font-semibold font-poppins">
          {title}
        </h6>
        <p className="font-nunito text-semilightpurple mt-1.5">{description}</p>
      </div>
    </div>
  );
}

export default AboutDetailsCard;
