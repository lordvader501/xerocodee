import classNames from "classnames";
import React from "react";

function SectionTitle({ className, children }) {
  return (
    <h2
      className={classNames(
        "text-semiblack font-poppins text-clamp-heading font-semibold leading-none text-center max-w-[1115px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
