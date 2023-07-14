import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import axiosInstance from "../utils/api/axiosInstance";

type Inputs = {
  email: String;
  password: String;
  password2?: String;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    const response = await axiosInstance.post(
      "/auth/preSignUp",
      data,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.data.success) {
      router.push("/signup2");
    }
  };

  const inputClassName =
    "border-2 border-slate-400 p-4 rounded-[10px] bg-primary text-white focus:border-orange-400 focus:bg-tertiary outline-none invalid:border-red-600 invalid:text-red-700 w-[100%] ";
  return (
    <div className="w-full h-full p-8 mb-[4rem] ">
      <div className="h-full max-md:h-screen text-black mx-auto my-0 max-w-[450px] px-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <h1 className="text-[3.2rem] max-md:text-[2.7rem] heading text-white text-center leading-[3.4rem] tracking-tighter my-6">
            Join IFASA Hub today
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
      <style jsx global>
        {`
          body {
             background: linear-gradient(
    to right top,
    #02252e,
    #00565b,
    #008a6a,
    #0dbe57,
    #a8eb12
  );

  background: -moz-linear-gradient(
    to right top,
    #02252e,
    #00565b,
    #008a6a,
    #0dbe57,
    #a8eb12
  );

  background: -webkit-linear-gradient(
    to right top,
    #02252e,
    #00565b,
    #008a6a,
    #0dbe57,
    #a8eb12
  );
}
          }
        `}
      </style>
    </div>
  );
};

export default SignUp;
