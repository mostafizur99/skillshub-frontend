import Image from "next/image";

type EventCardProps = {
  data: any;
  index?: number;
};
const EventCard = ({ data, index }: EventCardProps) => {
  return (
    <div
      key={index}
      className={`h-64 bg-cover bg-center relative group border rounded-md overflow-hidden ${
        index === 1 ? "md:col-span-2" : ""
      }`}
    >
      <div className="w-full h-full relative">
        <Image
          fill
          className="h-full w-full rounded-lg object-cover transition-transform transform group-hover:scale-105"
          src={data?.thumb || "/images/events/events-1.jpg"}
          alt="Box 1"
          priority
          sizes="(max-width: 768px) 72vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
      <div className="absolute inset-0 bg-themeSecondary opacity-0 group-hover:opacity-90 transition-opacity flex flex-col items-center justify-center text-white text-lg font-bold">
        <h3 className="uppercase text-white"> {data?.title}</h3>
        <p className="text-white text-sm leading-none mt-3">
          {data?.date} at {data?.time}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
