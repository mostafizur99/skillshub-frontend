"use client";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import ServiceCard from "../Cards/ServiceCard";
import { SectionLoader } from "../ui/Loader";

const UpcomingServices = () => {
  const { data, isLoading } = useGetServicesQuery({ status: "upcoming" });
  const ServiceData = data?.data || [];

  return (
    <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
      <div className="text-center mb-14">
        <p className="text-themeSecondary font-bold text-sm leading-none mb-4 uppercase tracking-widest">
          Upcoming Courses
        </p>
        <h2 className="text-3xl font-bold text-themePrimary">
          New Courses About To Release
        </h2>
        <p className="text-themeSecondary text-sm leading-none mt-3">
          Get ready to get new skills
        </p>
      </div>

      {data && ServiceData?.length > 0 && (
        <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {ServiceData.slice(0, 3).map((item: any, index: number) => (
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

export default UpcomingServices;
