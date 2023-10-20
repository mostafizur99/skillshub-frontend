import LoginPage from "@/components/Auth/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillshub | Login",
};

const Login = () => {
  return (
    <>
      <div className="py-10 md:py-32">
        <div className="max-w-md mx-auto shadow px-8 sm:px-6 py-10 rounded-lg bg-white border border-themeLight">
          <div className="mb-6 text-center">
            <h3 className="mb-4 text-2xl text-themePrimary font-bold">Login</h3>
          </div>
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default Login;
