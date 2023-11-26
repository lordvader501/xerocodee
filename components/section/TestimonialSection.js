import React from "react";
import { Container } from "../layouts/Container";
import TestimonialCarousel from "../carousel/TestimonialCarousel";

function TestimonialSection() {
  return (
    <div>
      <Container>
        <h1 className="font-poppins font-semibold text-clamp-heading capitalize leading-none mb-16">
          See our success stories
        </h1>
        <TestimonialCarousel />
      </Container>
    </div>
  );
}

export default TestimonialSection;
