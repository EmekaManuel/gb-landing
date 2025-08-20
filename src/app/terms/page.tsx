import React from "react";
import Navigation from "@/components/inavbar";
import { TermsOfServiceSection } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <TermsOfServiceSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
