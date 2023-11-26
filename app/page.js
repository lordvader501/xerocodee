import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/section/HeroSection"));
const FeatureSection = dynamic(() =>
  import("@/components/section/FeatureSection")
);
const DetailsSection = dynamic(() =>
  import("@/components/section/DetailsSection")
);
const AboutSection = dynamic(() => import("@/components/section/AboutSection"));
const TestimonialSection = dynamic(() =>
  import("@/components/section/TestimonialSection")
);
const NewsLetterSection = dynamic(() =>
  import("@/components/section/NewsLetterSection")
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <DetailsSection />
      <AboutSection />
      <TestimonialSection />
      <NewsLetterSection />
    </>
  );
}
