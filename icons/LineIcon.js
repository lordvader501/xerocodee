"use client";
import { useState, useLayoutEffect } from "react";

function LineIcon() {
  const [screenWidth, setScreenWidth] = useState(null);
  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={screenWidth >= 1024 ? "86" : screenWidth > 638 ? "70" : "40"}
      height="12"
      viewBox="0 0 86 12"
      fill="none"
    >
      <path
        d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM74.6667 6C74.6667 8.94552 77.0545 11.3333 80 11.3333C82.9455 11.3333 85.3333 8.94552 85.3333 6C85.3333 3.05448 82.9455 0.666667 80 0.666667C77.0545 0.666667 74.6667 3.05448 74.6667 6ZM6 7H80V5H6V7Z"
        fill="#0C5BC6"
      />
    </svg>
  );
}

export default LineIcon;
