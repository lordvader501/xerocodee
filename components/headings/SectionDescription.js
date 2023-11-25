import classNames from "classnames";
import React from "react";

function SectionDescription({ text, className }) {
  return (
    <p
      className={classNames(
        "text-semigrey font-bold text-2xl text-center max-w-[1144px] font-nunito",
        className
      )}
    >
      {text}
    </p>
  );
}

export default SectionDescription;
