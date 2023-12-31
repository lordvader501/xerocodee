"use client";

export const NextArrow = ({ onClick, className }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <circle
        cx="23"
        cy="23"
        r="23"
        transform="rotate(-180 23 23)"
        fill="#293FCC"
      />
      <g clipPath="url(#clip0_2731_30545)">
        <path
          d="M24.3478 23L18.6553 17.3075L20.2814 15.6814L27.6 23L20.2814 30.3186L18.6553 28.6925L24.3478 23Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2731_30545">
          <rect
            width="27.6"
            height="27.6"
            fill="white"
            transform="translate(36.8 9.19995) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
