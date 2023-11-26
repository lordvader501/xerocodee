import React from "react";
import Image from "next/image";

function InfrastructureCard({ title, description, img }) {
  return (
    <div className="max-w-[465px] w-full rounded-[15px] flex p-4 justify-start items-center gap-5 bg-white shadow-infra">
      <div className="p-4 flex items-center justify-center rounded-[16px] bg-white shadow-infraimg">
        <Image src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-darkpurple capitalize font-semibold font-poppins text-2xl">
          {title}
        </p>
        <p className="text-lightpurple font-nunito">{description}</p>
      </div>
    </div>
  );
}

export default InfrastructureCard;
