import React from "react";
import { FAQSection, GlobalpayServicesSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <GlobalpayServicesSection />
      <FAQSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
