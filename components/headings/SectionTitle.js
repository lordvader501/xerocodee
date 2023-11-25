import classNames from "classnames";
import React from "react";

function SectionTitle({ className, children }) {
  return (
    <h2
      className={classNames(
        "text-semiblack font-poppins text-px44 font-semibold leading-none",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
