import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/section/HeroSection"));
const FeatureSection = dynamic(() =>
  import("@/components/section/FeatureSection")
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  );
}
