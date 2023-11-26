import classNames from "classnames";
import React from "react";

function SectionHeading({ text, className }) {
  return (
    <h1
      className={classNames(
        "text-semiblack font-bold text-clamp-heading-md text-center max-w-[1144px] font-poppins leading-none",
        className
      )}
    >
      {text}
    </h1>
  );
}

export default SectionHeading;
