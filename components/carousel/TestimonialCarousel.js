"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PrevArrow } from "@/icons/PreviousArrow";
import { NextArrow } from "@/icons/NextArrow";
import Quote from "@/icons/Quote";

import { testimonialList } from "@/config/data";

function TestimonialCarousel() {
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    centerPadding: "15px",
    cssEase: "linear",
    easeing: "linear",
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };
  return (
    <div className="">
      <div className="">
        <div className="xl:max-w-[1125px] md:max-w-[580px] lg:max-w-[880px] sm:max-w-[500px] max-w-[300px]">
          <Slider ref={slider} {...settings}>
            {testimonialList.map((item, index) => (
              <div
                key={index}
                className="rounded-[40px] lg:shadow-testimonial !flex lg:flex-row flex-col-reverse relative md:max-w-[580px] lg:max-w-[880px] xl:max-w-[1115px] sm:max-w-[500px] left-1/2 -translate-x-1/2 h-auto"
              >
                <div className="max-w-[155px] rounded-l-[40px] lg:flex items-center justify-center bg-darkblue font-nunito font-bold text-center px-10 w-56 hidden">
                  <Quote />
                </div>
                <div className="p-8 md:max-w-[644px] lg:max-w-[560px] xl:max-w-[744px] flex flex-col justify-center items-center mt-3">
                  <div>
                    <p className="font-nunito text-semiblack text-base lg:text-lg max-md:max-w-[390px] text-center lg:text-left">
                      {item.text}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="w-full text-center lg:text-right font-nunito text-base lg:text-lg font-semibold text-semiblack">
                      -{item.name}
                    </p>
                    <p className="w-full text-center lg:text-right font-nunito text-px14 lg:text-base text-semiblack">
                      {item.designation}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full bg-darkblue p-2">
                    <Image
                      src={item.profileImg}
                      alt={item.name}
                      className="object-cover w-32"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
