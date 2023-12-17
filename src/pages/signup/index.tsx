import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from "../api/apiClient";
import Link from "next/link";
import { inputClassName } from "@/utils/constants/input.constant";

type Inputs = {
  username: String;
  email: String;
  password1: String;
  password2: String;
  first_name: String;
  last_name: String;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // const response = await apiClient.post(
    //   "",
    //   data,
    //   {
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }
    // );
    console.log(data);
  };

  return (
    <main
      className={`flex gradient min-h-screen flex-col items-center justify-center p-24 max-md:px-4`}
    >
      <div className="w-full h-full p-8 mb-[4rem] ">
        <div className="h-full max-md:h-screen text-black mx-auto my-0 max-w-[450px] px-4 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <h1 className="text-[3.2rem] max-md:text-[2.7rem] heading text-white text-center leading-[3.4rem] tracking-tighter my-6">
              Join IFASA Hub today
            </h1>
            <div>
              <input
                {...register("username", {
                  required: "Please input a usernme",
                })}
                placeholder="Username"
                className={inputClassName}
              />
              {errors.username && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.username.message}{" "}
                </span>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Please input a valid email address",
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                placeholder="Email address"
                className={inputClassName}
              />
              {errors.email && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.email.message}{" "}
                </span>
              )}
            </div>
            <div>
              <input
                {...register("first_name", {
                  required: "Please input your first name",
                })}
                placeholder="First Name"
                className={inputClassName}
              />
              {errors.first_name && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.first_name.message}{" "}
                </span>
              )}
            </div>
            <div>
              <input
                {...register("last_name", {
                  required: "Please input your last name",
                })}
                placeholder="Last Name"
                className={inputClassName}
              />
              {errors.last_name && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.last_name.message}{" "}
                </span>
              )}
            </div>
            <div>
              <input
                placeholder="Password"
                {...register("password1", {
                  required: "Please input a strong password",
                  pattern:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                })}
                className={inputClassName}
              />
              {errors.password1 && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.password1.message}{" "}
                </span>
              )}
            </div>
            <div>
              <input
                placeholder="Confirm Password"
                {...register("password2", {
                 
                  validate: (val: string) => {
                    if (watch("password1") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className={inputClassName}
              />
              {errors.password2 && (
                <span className="text-red-800 p-0 font-medium" role="alert">
                  {errors.password2.message}{" "}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="p-[10px] rounded-full bg-secondary text-white font-medium  "
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-white">
            Have an account already?
            <span className="text-secondary">
              <Link href="/login"> Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
