"use client";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import ServiceCard from "../Cards/ServiceCard";
import { SectionLoader } from "../ui/Loader";

const SingleService = ({ serviceId }: { serviceId: string }) => {
  const { data, isLoading } = useGetSingleServiceQuery(serviceId);
  const ServiceData = data?.data || {};

  return (
    <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
      <div className="text-center mb-14">
        <p className="text-themeSecondary font-bold text-sm leading-none mb-4 uppercase tracking-widest">
          Course Details
        </p>
        <h2 className="text-3xl font-bold text-themePrimary">
          {ServiceData?.title}
        </h2>
      </div>

      {!isLoading && ServiceData && (
        <div className="">
          <div className="grid gap-6 xl:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <ServiceCard data={ServiceData} single={true} />
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <SectionLoader />
        </div>
      )}
    </div>
  );
};

export default SingleService;
