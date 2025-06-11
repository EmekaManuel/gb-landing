import Navigation from "@/components/inavbar";
import {
  AboutUsSection,
  EventsNewsletterSection,
  HeroSection,
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

      <EventsNewsletterSection />
    </>
  );
}
