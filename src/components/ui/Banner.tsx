import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative h-96 md:h-[500px] bg-cover bg-bottom flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-75 bg-themePrimary/60 z-20"></div>
      <div className="text-center z-30">
        <h1 className="text-4xl font-medium mb-2">
          It&apos;s time to <span className="font-bold">skill-up</span> your
        </h1>
        <h1 className="text-4xl font-bold mb-2">Dream Career</h1>
        <p className="text-lg mb-8 text-white/70 font-medium pt-2">
          We Provide the Best Learning Frame for You!
        </p>
        <Link
          href={"/pc-builder"}
          className="px-6 py-3 bg-themeSecondary font-semibold rounded hover:bg-themeGray ase-in duration-300 uppercase tracking-wide"
        >
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Banner;
