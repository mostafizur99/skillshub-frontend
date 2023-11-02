import React from "react";
import EventCard from "../Cards/EventCard";
import eventsData from "@/assets/data/eventsData.json";

const EventSection = () => {
  return (
    <div className="container mx-auto py-20 md:py-24  px-5 md:px-0">
      <div className="text-center mb-14">
        <p className="text-themeSecondary font-bold text-sm leading-none mb-4 uppercase tracking-widest">
          Upcoming Events
        </p>
        <h2 className="text-3xl font-bold text-themePrimary">
          Follow Us To Join Our Events
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {eventsData.slice(0, 3).map((item, index) => (
          <EventCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
