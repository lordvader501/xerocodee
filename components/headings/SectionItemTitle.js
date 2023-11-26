import classNames from "classnames";
import React from "react";

function SectionItemTitle({ text, className }) {
  return (
    <h4
      className={classNames(
        "text-semiblack font-bold font-nunito text-center text-base md:text-px28",
        className
      )}
    >
      {text}
    </h4>
  );
}

export default SectionItemTitle;
