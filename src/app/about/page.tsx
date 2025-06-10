import Navigation from "@/components/inavbar";
import { AboutUsSection } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <AboutUsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
