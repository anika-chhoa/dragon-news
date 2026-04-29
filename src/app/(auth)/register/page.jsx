"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const handleRegisterForm = async (data) => {
    const { name, photo, email, password } = data;
    console.log(name, photo, email, password);
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    if(error){
        alert(error.message)
    }
    if(res){
        alert("SignUp Successfully")
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isShowPass,setIsShowPass]=useState(false);

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-12 rounded-md bg-white">
        <h2 className="font-bold text-2xl text-center pb-8 border-b-2 border-b-gray-200 my-3">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(handleRegisterForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Your Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Image URL</legend>
            <input
              type="text"
              {...register("photo", {
                required: "Image URL field is required",
              })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your Image URL"
            />
            {errors.photo && (
              <span className="text-red-600">{errors.photo.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email Address</legend>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type={isShowPass ? "text" : "password"}
              {...register("password", {
                required: "Password field is required",
              })}
              className="input bg-slate-100 w-full"
              placeholder="Enter your password"
              minLength="8"
            />
            <span onClick={()=>setIsShowPass(!isShowPass)} className="absolute right-2 top-4.5 cursor-pointer">
              {isShowPass?<FaEye/>:<FaEyeSlash />} 
              </span>
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {/* <p className="label text-xs">Must be more than 8 characters, including number and uppercase letter</p> */}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white my-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
