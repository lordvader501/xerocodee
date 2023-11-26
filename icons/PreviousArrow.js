"use client";
export const PrevArrow = ({ onClick, className }) => {
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
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 46)"
        fill="#293FCC"
      />
      <g clipPath="url(#clip0_2731_30550)">
        <path
          d="M21.6521 23L27.3446 17.3075L25.7185 15.6814L18.3999 23L25.7185 30.3186L27.3446 28.6925L21.6521 23Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2731_30550">
          <rect
            width="27.6"
            height="27.6"
            fill="white"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 9.19995 9.19995)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
