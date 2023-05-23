import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from "./api/apiClient";
import Link from "next/link";

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
    const response = await apiClient.post(
      "",
      data,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };

  const inputClassName =
    "border-2 border-slate-400 p-4 rounded-[10px] bg-primary text-white focus:border-orange-400 focus:bg-tertiary outline-none invalid:border-red-600 invalid:text-red-700 w-[100%] ";
  return (
    <div className="gradient w-full h-full">
      <div className="h-screen text-black mx-auto my-0 max-w-[450px] p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <h1 className="text-[3.2rem] heading text-white text-center leading-[3.4rem] tracking-tighter my-6">
            Join IFASA Hub today
          </h1>
          <input
            {...register("username", {
              required: "Please input a usernme",
            })}
            placeholder="Username"
            className={inputClassName}
          />
          <input
            {...register("email", {
              required: "Please input a valid email address",
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="Email address"
            className={inputClassName}
          />
          <input
            {...register("first_name", {
              required: "Please input your first name",
            })}
            placeholder="First Name"
            className={inputClassName}
          />
          <input
            {...register("last_name", {
              required: "Please input your last name",
            })}
            placeholder="Last Name"
            className={inputClassName}
          />
          <input
            placeholder="Password"
            {...register("password1", {
              required: "Please input a strong password",
              pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            })}
            className={inputClassName}
          />

          <input
            placeholder="Confirm Password"
            {...register("password2", {
              required: "Please input a strong password",
              pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            })}
            className={inputClassName}
          />

          <button
            type="submit"
            className="p-[10px] rounded-full bg-secondary text-white "
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
  );
};

export default SignUp;
