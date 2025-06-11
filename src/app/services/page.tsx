import React from "react";
import { FAQSection, GlobalPayServicesSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <GlobalPayServicesSection />
      <FAQSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
