import React from "react";
import WhyUsCard from "../Cards/WhyUsCard";
import { whyChooseData } from "@/assets/data/whyChooseData";

const WhyUsSection = () => {
  return (
    <div className="container mx-auto py-20 md:py-24 px-5 md:px-0">
      <div className="text-center mb-14">
        <p className="text-themeSecondary font-bold text-sm leading-none mb-4 uppercase tracking-widest">
          Why Choose Us
        </p>
        <h2 className="text-3xl font-bold text-themePrimary">
          Learn From The Best Platform
        </h2>
      </div>

      <div className="grid gap-6 xl:gap-8 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:px-16">
        {whyChooseData.slice(0, 4).map((item: any, index: number) => (
          <div key={index}>
            <WhyUsCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
