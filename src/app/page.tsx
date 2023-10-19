import Banner from "@/components/ui/Banner";
import MainNav from "@/components/ui/nav/MainNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillshub | Home",
};

const HomePage = () => {
  return (
    <>
      <Banner />
      <h2 className="text-themeSecondary">Home page</h2>
      <h4>Hello Skills Hub</h4>
    </>
  );
};

export default HomePage;
