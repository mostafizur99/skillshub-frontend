import { Metadata } from "next";
import SingleService from "@/components/Sections/SingleService";

export const metadata: Metadata = {
  title: "Skillshub | Service Details",
};

const Services = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <SingleService serviceId={id} />
    </>
  );
};

export default Services;
