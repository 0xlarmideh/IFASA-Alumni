import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from "./api/apiClient";
import Link from "next/link";


type Inputs = {
  email: String;
  password: String;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)

  };
  const inputClassName =
    "border-2 border-slate-400 p-4 rounded-[10px] bg-primary text-white focus:border-orange-400 focus:bg-tertiary outline-none invalid:border-red-600 invalid:text-red-700 ";
  return (
    <div className="gradient w-full h-full ">
      <div className="h-screen text-black mx-auto my-0 max-w-[450px] p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <h1 className="text-[3.2rem] max-md:text-[2.7rem] heading text-white text-center leading-[3.4rem] tracking-tighter my-6">
            Sign in to IFASA Hub
          </h1>
          <input
            {...register("email", {
              required: "Please input a valid email address",
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="Email address"
            className={inputClassName}
          />
          {errors.email && (
            <p className="text-red-800 font-medium" role="alert">
              {errors.email?.message}{" "}
            </p>
          )}
          <input
            placeholder="Password"
            {...register("password", {
              required: "Please input your password",
              minLength: {
                value: 4,
                message: "***Password must be a minimum of 4 characters",
              },
              maxLength: {
                value: 12,
                message: "***Password length can't be more than 12 characters",
              },
            })}
            className={inputClassName}
          />
          {errors.password && (
            <p className="text-red-800 font-medium" role="alert">
              {errors.password?.message}{" "}
            </p>
          )}

          <button
            type="submit"
            className="p-[10px] bg-secondary text-black rounded-full "
          >
            Login
          </button>
          <button
            type="button"
            className="border-2 p-[10px] rounded-full bg-black text-white "
          >
            Forgot password
          </button>
        </form>
        <div className="mt-6 text-white">
          Don't have an account?
          <span className="text-secondary">
            <Link href="/signup"> Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
