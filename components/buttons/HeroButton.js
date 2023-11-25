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
        "bg-darkblue px-6 rounded-md py-3 font-nunito text-center text-xl font-bold",
        className
      )}
      size="large"
    >
      {text}
    </Button>
  );
}

export default HeroButton;
