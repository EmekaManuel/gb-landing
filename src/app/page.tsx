import Navigation from "@/components/inavbar";
import {
  AboutUsSection,
  // DonationBreakdownSection,
  EventsNewsletterSection,
  HeroSection,
  ProjectsSection,
  TrustedBySection,
  WhatWeDoSection,
} from "./hero";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <TrustedBySection />
      <WhatWeDoSection />
      <ProjectsSection />
      {/* <DonationBreakdownSection /> */}
      <EventsNewsletterSection />
    </>
  );
}
