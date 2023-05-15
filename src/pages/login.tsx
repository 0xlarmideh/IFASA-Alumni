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
    "border-2 p-4 rounded-[10px] focus:border-sky-400 outline-none invalid:border-red-600 invalid:text-red-700 ";
  return (
    <div className="h-screen flex flex-col justify-center items-center text-black mx-auto my-0 max-w-[600px] p-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <h1 className="text-[2.4rem] tracking-tighter mb-6">
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
        <input
          placeholder="Password"
          {...register("password", {
            required: "Please input your password",
          })}
          className={inputClassName}
        />
        <button type="submit" className="border-2 p-[10px] rounded-full ">
          Login
        </button>
        <button
          type="button"
          className="border-2 p-[10px] rounded-full bg-black text-white "
        >
          Forgot password
        </button>
      </form>
      <div className="mt-6">
        Don't have an account?
        <span className="text-sky-600">
          <Link href="/signup"> Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
