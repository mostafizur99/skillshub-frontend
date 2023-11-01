import React from "react";

type WhyUsCardProps = {
  data: any;
};

const WhyUsCard = ({ data }: WhyUsCardProps) => {
  return (
    <div className={`h-full max-w-lg bg-white group transition-all`}>
      <div className="flex justify-center items-center mb-6 text-themeSecondary text-7xl group-hover:-translate-y-3.5 transition duration-[400ms] ">
        {data?.icon}
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold capitalize text-themePrimary group-hover:text-themeSecondary transition-all leading-5 mb-2.5">
          {data?.title}
        </h3>
        <p className="text-center text-black/60 text-sm leading-8">
          {data?.desc}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
