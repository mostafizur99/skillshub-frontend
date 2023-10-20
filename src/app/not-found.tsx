import Footer from "@/components/ui/Footer";
import MainNav from "@/components/ui/nav/MainNav";

const NotFoundPage = () => {
  return (
    <>
      <MainNav />
      <div className="text-themePrimary text-xl font-bold h-screen flex justify-center items-center">
        <h1>404!!! Page Not Found!</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
