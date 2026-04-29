"use client"
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  const handleGoogleSignin=async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  // console.log(data)
}
const handleGitHubSignin=async()=>{
   const data = await authClient.signIn.social({
        provider: "github"
    })
}
  return (
    <div>
      <p className="text-xl font-bold my-4">Login With</p>
      <div className="flex flex-col gap-2">
        <button onClick={handleGoogleSignin} className="btn border-blue-500 text-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button onClick={handleGitHubSignin} className="btn">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
