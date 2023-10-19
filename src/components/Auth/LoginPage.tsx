"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      const res = await userLogin({ ...loginData }).unwrap();

      if (res?.data.accessToken) {
        toast.success(res?.message || "User logged in successfully");
        router.push("/profile");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        reset();
      } else {
        toast.error("Server Error");
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* email  */}
        <div className="mb-6">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="login-email"
          >
            Email
          </label>
          <input
            id="login-email"
            className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
              errors?.email ? "!border-red-500" : "border-gray"
            } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
          />
          {errors?.email && (
            <span className="text-red-500 text-xss italic">
              This field is required
            </span>
          )}
        </div>
        {/* password  */}
        <div className="mb-4">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            id="login-password"
            className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
              errors?.password ? "!border-red-500" : "border-gray"
            } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter Your Password"
          />
          {errors?.password && (
            <span className="text-red-500 text-xss italic">
              This field is required
            </span>
          )}
        </div>
        <button
          className={`!py-3 px-7 flex gap-2 justify-center items-center transition-all duration-300 ease-in-out mb-6 w-full text-base text-white font-normal text-center leading-6 ${
            isSubmitting ? "bg-themeLighter" : "bg-themeSecondary"
          } rounded-md hover:bg-themeGray`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please wait..." : "Login"}
        </button>
        <p className="text-center flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-themePrimary font-normal">
            New User?
          </span>
          <Link
            href="/signup"
            className="inline-block text-sm font-normal text-themeSecondary hover:text-themeGray hover:underline"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
