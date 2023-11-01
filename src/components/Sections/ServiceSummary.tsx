"use client";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import ServiceCard from "../Cards/ServiceCard";
import { SectionLoader } from "../ui/Loader";

const Service = () => {
  const { data, isLoading } = useGetServicesQuery({ status: "ongoing" });
  const ServiceData = data?.data || [];

  return (
    <div className="container mx-auto  py-20 md:py-24  px-5 md:px-0">
      <div className="text-center mb-14">
        <p className="text-themeSecondary font-bold text-sm leading-none mb-4 uppercase tracking-widest">
          Trending Courses
        </p>
        <h2 className="text-3xl font-bold text-themePrimary">
          Popular Online Courses Around You
        </h2>
        <p className="text-themeSecondary text-sm leading-none mt-3">
          The ultimate planning solution for ones who want to reach their
          personal goals
        </p>
      </div>

      {data && ServiceData?.length > 0 && (
        <div className="grid gap-5 xl:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {ServiceData.slice(0, 4).map((item: any, index: number) => (
            <div key={index}>
              <ServiceCard data={item} />
            </div>
          ))}
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

export default Service;
