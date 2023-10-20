import ProductSummary from "@/components/Sections/ServiceSummary";
import UpcomingServices from "@/components/Sections/UpcomingServices";
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
      <UpcomingServices />
    </>
  );
};

export default HomePage;
