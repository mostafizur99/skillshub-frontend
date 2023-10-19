"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

const SignupPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      const name = {
        firstName: data.firstName,
        lastName: data.lastName,
      };
      const signupData = {
        name,
        email: data.email,
        password: data.password,
      };
      const res = await userSignup({ ...signupData }).unwrap();

      if (res?.statusCode === 200) {
        toast.success(res?.message || "User Created Successfully!");
        router.push("/login");
        reset();
      } else {
        toast.error("Server Error");
      }
      reset();
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* first name  */}
        <div className="mb-6">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="signup-firstName"
          >
            First Name
          </label>
          <input
            id="signup-firstName"
            className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
              errors?.firstName ? "!border-red-500" : "border-gray"
            } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
            type="text"
            {...register("firstName", { required: true })}
            placeholder="Enter Your First Name"
          />
          {errors?.firstName && (
            <span className="text-red-500 text-xss italic">
              This field is required
            </span>
          )}
        </div>
        {/* last name  */}
        <div className="mb-6">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="signup-lastName"
          >
            Last Name
          </label>
          <input
            id="signup-lastName"
            className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
              errors?.lastName ? "!border-red-500" : "border-gray"
            } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
            type="text"
            {...register("lastName", { required: true })}
            placeholder="Enter Your Last Name"
          />
          {errors?.lastName && (
            <span className="text-red-500 text-xss italic">
              This field is required
            </span>
          )}
        </div>
        {/* email  */}
        <div className="mb-6">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="signup-email"
          >
            Email
          </label>
          <input
            id="signup-email"
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
            htmlFor="signup-password"
          >
            Password
          </label>
          <input
            id="signup-password"
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
        {/* confirm password  */}
        <div className="mb-4">
          <label
            className="block mb-2 text-themeSecondary font-medium"
            htmlFor="signup-confirm-password"
          >
            Confirm Password
          </label>
          <input
            id="signup-confirm-password"
            className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
              errors?.confirmPassword ? "!border-red-500" : "border-gray"
            } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
            type="password"
            {...register("confirmPassword", { required: true })}
            placeholder="Enter Your Password"
          />
          {errors?.confirmPassword && (
            <span className="text-red-500 text-xss italic">
              This field is required
            </span>
          )}
        </div>
        <button
          className={`!py-3 px-7 flex gap-2 justify-center items-center transition-all duration-300 ease-in-out mb-6 w-full text-base text-white font-normal text-center leading-6 ${
            isSubmitting ? "bg-themeGray" : "bg-themeSecondary"
          } rounded-md hover:bg-themeGray`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please wait..." : "Register"}
        </button>
        <p className="text-center flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-themePrimary font-normal">
            Already User?
          </span>
          <Link
            href="/login"
            className="inline-block text-sm font-normal text-themeSecondary hover:text-themeGray hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
