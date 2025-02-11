import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiUrl } from "../../config";
import axios from "axios";

const Signup = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return re.test(password);
  };

  const validateName = (name) => {
    return name.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      toast.error("Name is required", {
        position: "top-center",
        style: {
          borderRadius: "50px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("📧 Please enter a valid email address", {
        position: "top-center",
        style: {
          borderRadius: "50px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "🔑 Password must be at least 6 characters long, contain at least one letter, one number, and one special character",
        {
          position: "top-center",
          style: {
            borderRadius: "50px",
            background: "#333",
            color: "#fff",
          },
        }
      );
      return;
    }

    const url = `${apiUrl}/auth/register`;
    const body = {
      name,
      email: email.toLowerCase(),
      password,
      role,
    };
    setIsSignUp(true);
    try {
      const { data } = await axios.post(url, body);
      if (data?.status === "success") {
        toast.success("✅Signup successful!", {
          position: "top-center",
          style: {
            borderRadius: "50px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/auth/signin");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.msg);
    } finally {
      setIsSignUp(false);
    }
  };

  return (
    <div className="w-1/3 max-md:w-2/3 max-lg:w-3/5 max-sm:w-[95%] rounded-[30px] bg-white p-5 animate-slight-up flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col">
        <p className="text-3xl max-sm:text-2xl font-bold text-left">
          Register yourself
        </p>
        <p className="text-lg text-base text-gray-400">
          Select your role and enter name, email and password to register
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "student"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("student")}
        >
          Student
        </button>
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "instructor"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("instructor")}
        >
          Instructor
        </button>
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "admin"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("admin")}
        >
          Admin
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-[90%] flex-col items-center justify-center my-5"
      >
        <input
          type="text"
          placeholder="Enter your full name"
          className="outline-none border-[2px] p-4 w-full rounded-full placeholder:text-xl active:border-black focus:border-black transition-all duration-300 ease-in-out"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="outline-none border-[2px] p-4 w-full rounded-full placeholder:text-xl active:border-black focus:border-black transition-all duration-300 ease-in-out"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="outline-none border-[2px] p-4 w-full rounded-full placeholder:text-xl active:border-black focus:border-black transition-all duration-300 ease-in-out"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-4 w-full bg-primary text-white rounded-full text-xl font-bold"
          onClick={handleSubmit}
        >
          {isSignUp ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="flex flex-col gap-1">
        <div className="flex gap-1 justify-center">
          <p className="text-xl text-center text-gray-400 max-sm:text-base">
            {"Already have an account?"}
          </p>
          <Link
            to={"/auth/signin"}
            className="text-xl font-semibold text-center max-sm:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
