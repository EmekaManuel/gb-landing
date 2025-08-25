import React from "react";
import Navigation from "@/components/inavbar";
import { PrivacySection } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <PrivacySection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
