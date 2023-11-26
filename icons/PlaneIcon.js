"use client";
import { useState, useLayoutEffect } from "react";

function PlaneIcon() {
  const [screenWidth, setScreenWidth] = useState(null);
  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={screenWidth >= 1024 ? "150" : screenWidth > 638 ? "120" : "75"}
      height={screenWidth >= 1024 ? "150" : screenWidth > 638 ? "120" : "75"}
      viewBox="0 0 150 150"
      fill="none"
    >
      <g clipPath="url(#clip0_2731_31134)">
        <path
          d="M86.7188 109.734L63.2812 128.906L58.5938 100.781L86.7188 109.734Z"
          fill="#C6DEFF"
        />
        <path
          d="M75.3516 70.3125L37.5 96.0938L2.34375 84.375L75.3516 70.3125Z"
          fill="white"
        />
        <path
          d="M147.656 21.0938L75.3516 70.3125L2.34375 84.375L147.656 21.0938Z"
          fill="white"
        />
        <path
          d="M147.656 21.0938L88.1719 74.3203L58.5938 100.781L63.2812 128.906L37.5 96.0938L75.3516 70.3125L147.656 21.0938Z"
          fill="#C6DEFF"
        />
        <path
          d="M88.1719 74.3203L110.156 117.188L86.7188 109.734L58.5938 100.781L88.1719 74.3203Z"
          fill="white"
        />
        <path
          d="M147.656 21.0938L110.156 117.188L88.1719 74.3203L147.656 21.0938Z"
          fill="white"
        />
        <path
          d="M63.2813 131.25C62.5781 131.25 61.8938 130.934 61.4391 130.355L36.0914 98.0953L1.60313 86.5969C0.682039 86.2899 0.0468826 85.4485 0.00235137 84.4805C-0.0421799 83.5102 0.517976 82.6125 1.4086 82.2258L146.721 18.9446C147.591 18.5719 148.596 18.75 149.28 19.4039C149.963 20.0602 150.183 21.0633 149.838 21.9446L112.338 118.038C111.888 119.191 110.62 119.796 109.446 119.421L61.5352 104.177L65.5172 128.067C65.618 128.327 65.6695 128.609 65.6695 128.904C65.6695 130.2 64.6219 131.248 63.3258 131.248C63.3117 131.248 63.2977 131.25 63.2813 131.25ZM8.88282 84.0844L38.2406 93.8719C38.6766 94.0172 39.0586 94.2867 39.3422 94.6453L59.4633 120.253L56.2828 101.166C56.1469 100.362 56.4422 99.5461 57.0586 99.0094C57.6773 98.475 58.5305 98.3039 59.3039 98.5477L108.771 114.288L143.423 25.493L8.88282 84.0844Z"
          fill="#0C5BC6"
        />
        <path
          d="M58.5937 103.125C57.9515 103.125 57.3093 102.863 56.8476 102.345C55.9851 101.379 56.0671 99.8977 57.0304 99.0352L146.093 19.3477C147.059 18.4852 148.54 18.5649 149.402 19.5305C150.265 20.4961 150.183 21.9774 149.219 22.8399L60.157 102.527C59.7093 102.928 59.1492 103.125 58.5937 103.125Z"
          fill="#0C5BC6"
        />
        <path
          d="M37.5023 98.4376C36.7523 98.4376 36.0164 98.079 35.564 97.411C34.8328 96.3423 35.1117 94.8844 36.1828 94.1555L146.339 19.1555C147.408 18.4196 148.866 18.7055 149.594 19.7743C150.326 20.843 150.047 22.3008 148.976 23.0298L38.8195 98.0298C38.4164 98.3063 37.9546 98.4376 37.5023 98.4376ZM63.2835 131.25C62.6039 131.25 61.9312 130.957 61.4671 130.39C60.6468 129.389 60.7968 127.913 61.7999 127.092L85.2374 107.916C86.2382 107.095 87.7148 107.245 88.5351 108.249C89.3554 109.249 89.2054 110.726 88.2023 111.546L64.7648 130.723C64.3289 131.077 63.8062 131.25 63.2835 131.25ZM110.159 119.531C109.308 119.531 108.485 119.067 108.07 118.256L86.0789 75.3915C85.4882 74.2407 85.9406 72.8274 87.096 72.2368C88.2445 71.6415 89.6601 72.0985 90.2507 73.254L112.242 116.119C112.833 117.27 112.38 118.683 111.225 119.273C110.885 119.449 110.517 119.531 110.159 119.531Z"
          fill="#0C5BC6"
        />
        <path
          d="M2.34137 86.7187C1.23981 86.7187 0.257779 85.9406 0.0421544 84.818C-0.201596 83.5453 0.630436 82.3172 1.90075 82.0711L74.9226 68.0086C76.2 67.7719 77.4211 68.5945 77.6695 69.8672C77.9133 71.1398 77.0812 72.368 75.8109 72.6141L2.78903 86.6765C2.63669 86.7047 2.48903 86.7187 2.34137 86.7187Z"
          fill="#0C5BC6"
        />
      </g>
      <defs>
        <clipPath id="clip0_2731_31134">
          <rect width="150" height="150" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlaneIcon;