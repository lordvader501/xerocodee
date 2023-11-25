"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import p1 from "@/public/images/partners/p1.png";
import p2 from "@/public/images/partners/p2.png";
import p3 from "@/public/images/partners/p3.png";
import p4 from "@/public/images/partners/p4.png";
function Partners() {
  const partners = [p1, p2, p3, p4];
  return (
    <Marquee
      gradient={false}
      gradientWidth={100}
      className="mt-6 h-24 overflow-hidden"
      autoFill
      speed={60}
      loop={0}
    >
      {partners?.map((item, i) => {
        return (
          <Image
            key={i}
            src={item}
            alt="xerocodee Client list"
            className="sm:mx-16 mx-4 sm:h-[175px] sm:w-[205px] h-10 w-20 object-contain"
            priority
          />
        );
      })}
    </Marquee>
  );
}

export default Partners;
