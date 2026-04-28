import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <p className="text-xl font-bold my-4">Login With</p>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
