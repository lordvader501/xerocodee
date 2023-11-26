"use client";
import React from "react";
import Button from "@mui/material/Button";
import classNames from "classnames";

function HeroButton({ text, className }) {
  return (
    <Button
      variant="contained"
      color="primary"
      className={classNames(
        "bg-darkblue sm:px-6 px-4 rounded-md sm:py-3 py-2 font-nunito text-center text-px12 sm:text-xl font-bold",
        className
      )}
      size="large"
    >
      {text}
    </Button>
  );
}

export default HeroButton;
