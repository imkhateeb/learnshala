import { Link, Route, Routes } from "react-router-dom";
import { Login, Signup } from "../components/auth";

const RootAuth = () => {
  return (
    <div className="w-1/3 max-md:w-2/3 max-lg:w-3/5 max-sm:w-[95%] rounded-[50px] bg-white p-8 max-sm:p-5 animate-slight-up flex flex-col gap-4 items-center justify-center">
      {/* Primary Button */}
      <Link
        to={"/auth/signin"}
        className="responsive-para py-3 px-5 bg-white text-tertiary rounded-full hover:shadow-lg border-[2px] border-white hover:bg-primary hover:text-primary transition-all duration-300 ease-in-out"
      >
        Login
      </Link>
      {/* Secondary Button */}
      <Link
        to={"/auth/signup"}
        className="responsive-para py-3 px-5 hover:bg-white hover:text-tertiary rounded-full hover:shadow-lg border-[2px] border-white bg-primary text-primary transition-all duration-300 ease-in-out"
      >
        Signup
      </Link>
    </div>
  );
};

const Auth = () => {
  return (
    <div
      className="bg-primary w-full h-[90vh] 
   flex items-center justify-center"
    >
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<RootAuth />} />
      </Routes>
    </div>
  );
};

export default Auth;
