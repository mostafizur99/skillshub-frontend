"use client";
import Footer from "@/components/ui/Footer";
import MainNav from "@/components/ui/nav/MainNav";

const ErrorPage = () => {
  return (
    <>
      <MainNav />
      <div className="text-red-500 text-xl font-bold h-screen flex justify-center items-center">
        <h1>Something Went Wrong!</h1>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
