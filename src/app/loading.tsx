import Footer from "@/components/ui/Footer";
import MainNav from "@/components/ui/nav/MainNav";

const Loading = () => {
  return (
    <>
      <MainNav />
      <div className="h-screen flex justify-center items-center">
        <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-themeSecondary" />
      </div>
      <Footer />
    </>
  );
};

export default Loading;
