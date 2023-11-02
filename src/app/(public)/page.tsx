import EventSection from "@/components/Sections/EventSection";
import ProductSummary from "@/components/Sections/ServiceSummary";
import UpcomingServices from "@/components/Sections/UpcomingServices";
import WhyUsSection from "@/components/Sections/WhyUsSection";
import Banner from "@/components/ui/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillshub | Home",
};

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductSummary />
      <WhyUsSection />
      <EventSection />
      <UpcomingServices />
    </>
  );
};

export default HomePage;
