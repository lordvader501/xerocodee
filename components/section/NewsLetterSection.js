import React from "react";
import { Container } from "../layouts/Container";
import PlaneIcon from "@/icons/PlaneIcon";
import SectionTitle from "../headings/SectionTitle";
import SectionDescription from "../headings/SectionDescription";

function NewsLetterSection() {
  return (
    <div className="lg:px-6 px-4 overflow-hidden mt-32">
      <Container className="bg-semilightblue rounded-[35px] pb-20  bg-[url('/images/news.png')] backdrop-blur-xl">
        <PlaneIcon />
        <SectionTitle className="mt-10 !max-w-[885px] !leading-normal">
          Subscribe to Our Newsletter & get the Coupon code.
        </SectionTitle>
        <p className="text-center text-semiblack font-nunito text-px10 sm:text-xl mt-4">
          All your information is completely confidential
        </p>
        <form className="gap-x-3 flex w-full items-center justify-center mt-20 mb-10">
          <input
            type="email"
            className="sm:py-4 py-2 focus:outline-none rounded-md px-3 text-semiblack max-w-[155px] sm:max-w-[591px] w-full"
            placeholder="Type your email"
          />
          <button className="bg-darkblue font-extrabold text-px10 sm:text-2xl font-nunito text-center text-white px-6 py-3 rounded-md">
            Subscribe
          </button>
        </form>
      </Container>
    </div>
  );
}

export default NewsLetterSection;
