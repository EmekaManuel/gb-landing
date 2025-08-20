import React from "react";
import Navigation from "@/components/inavbar";
import { CookiePolicySection } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <CookiePolicySection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
