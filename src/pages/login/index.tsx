import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { inputClassName } from "@/utils/constants/input.constant";


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
  
  return (
    <main
      className={`flex gradient min-h-screen flex-col items-center justify-center p-24 max-md:px-4`}
    >
      <div className="w-full h-fullp-8 mb-[4rem] ">
        <div className="h-full text-black mx-auto my-0 max-w-[450px] px-4 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full"
          >
            <h1 className="text-[3.2rem] max-md:text-[2.7rem] heading text-white text-center leading-[3.4rem] tracking-tighter my-6">
              Sign in to IFASA Hub
            </h1>
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
                <p className="text-red-800 font-medium" role="alert">
                  {errors.email?.message}{" "}
                </p>
              )}
            </div>
            <div>
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
                    message:
                      "***Password length can't be more than 12 characters",
                  },
                })}
                className={inputClassName}
              />
              {errors.password && (
                <p className="text-red-800 font-medium" role="alert">
                  {errors.password?.message}{" "}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="p-[10px] bg-secondary text-black rounded-full font-medium  "
            >
              Login
            </button>
            <button
              type="button"
              className="border-2 p-[10px] rounded-full bg-black text-white font-medium  "
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
    </main>
  );
};

export default Login;
