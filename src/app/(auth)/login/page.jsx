"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const handleLoginForm = (data) => {
    console.log(data);
  };
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-12 rounded-md bg-white">
        <h2 className="font-bold text-2xl text-center pb-8 border-b-2 border-b-gray-200 my-3">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email Address</legend>
            <input
              type="email"
           
            {...register("email", { required: "Email field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="password"
            
            {...register("password", { required: "Password field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your password"
              minLength="8"
            />
            {errors.password && <span className="text-red-600">{errors.password.message}</span>}
            {/* <p className="label text-xs">Must be more than 8 characters, including number and uppercase letter</p> */}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white my-3">
            Login
          </button>
        </form>
        <p className="mt-3 font-medium">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
