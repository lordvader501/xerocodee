"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import classNames from "classnames";

function SectionMenuItem({ menuButtons, className, children }) {
  const [active, setActive] = useState(1);
  return (
    <>
      <div
        className={classNames(
          "w-full flex justify-evenly items-center flex-wrap gap-4 mb-16",
          className
        )}
      >
        {menuButtons.map((item) => (
          <Button
            key={item.id}
            variant="text"
            color="primary"
            className={classNames(
              "text-lightpurple font-nunito text-center text-px10 sm:text-px12 font-bold w-32 capitalize px-2",
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
      {children}
    </>
  );
}

export default SectionMenuItem;
