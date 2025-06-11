import React from "react";
import { GlobalPayServicesSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <GlobalPayServicesSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
