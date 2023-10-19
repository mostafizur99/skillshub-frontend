import { Metadata } from "next";
import AllServices from "@/components/Sections/AllServices";

export const metadata: Metadata = {
  title: "Skillshub | Services",
};

const Services = () => {
  return (
    <>
      <AllServices />
    </>
  );
};

export default Services;
