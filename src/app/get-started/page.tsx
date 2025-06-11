import Navigation from "@/components/inavbar";
import { GetStartedPage } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <GetStartedPage />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
