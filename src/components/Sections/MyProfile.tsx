"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useGetProfileQuery,
  useUpdateUsersMutation,
} from "@/redux/api/userApi";

const MyProfile = () => {
  const { data: userData, isLoading } = useGetProfileQuery({});
  const [updateUsers] = useUpdateUsersMutation();
  const data = userData?.data || {};
  //   console.log("data", data);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: data?.name?.firstName,
      lastName: data?.name?.lastName,
      email: data?.email,
    },
  }) as any;

  const userId = data?._id;
  console.log("userId", userId);

  const onSubmit = async (dataVal: any) => {
    const userInput = {
      name: {
        firstName: dataVal.firstName,
        lastName: dataVal.lastName,
      },
      email: dataVal.email,
    };
    console.log("userInput1", userInput);

    try {
      const res = await updateUsers({ userId, body: userInput });
      console.log("res2", res);
      toast.success("User Updated Successfully!");
    } catch (err: any) {
      toast.error("Server Error");
    }
  };

  return (
    <section className="mb-6">
      <div className="rounded-lg shadow">
        <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
          <p className="text-base font-semibold text-themePrimary">
            My Profile
          </p>
        </div>

        <form key={1} className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="!mx-5 xl:mx-10 justify-center items-center grid grid-cols-12">
            <div className="mb-4 col-span-12 md:col-span-4 lg:col-span-3">
              <div className="flex justify-center"></div>
            </div>

            <div className="mb-4 col-span-12 md:col-span-8 lg:col-span-9">
              <div>
                <div className="w-full">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.firstName ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3  leading-tight focus:outline-none focus:bg-white`}
                        id="grid-first-name"
                        {...register("firstName", { required: true })}
                        type="text"
                        placeholder="Jane"
                      />
                      {errors.firstName && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.lastName ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-first-name"
                        {...register("lastName", { required: true })}
                        type="text"
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2  mt-3"
                        htmlFor="grid-last-name"
                      >
                        Email
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.email ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name`}
                        {...register("email", { required: true })}
                        type="text"
                        placeholder="info@gmail.com"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
          {/* button 1 */}
          <div className="mx-10 mt-3">
            <div className="mt-12 pb-10">
              <button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className={`!py-3 px-8 flex gap-2 items-center ${
                  isSubmitting ? "bg-themeDarkerAlt" : "bg-themePrimary"
                } rounded-lg shadow shadow-themePrimary ${
                  isDirty ? "opacity-100" : "opacity-30"
                } text-white font-medium text-xxs`}
              >
                {/* <Link href="#"> */}
                {isSubmitting ? "Please wait..." : "Submit"}
                {isSubmitting && (
                  <div
                    className="spinner-grow text-themePrimary w-5 h-5"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default MyProfile;
