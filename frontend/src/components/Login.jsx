import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      setAuth(true);
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data?.message || "An error occurred"
      );
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <div className="w-full">
          <input
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          <input
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
        >
          Login
        </button>
        <h1>
          Don't have an account?{" "}
          <h1
            onClick={() => navigate("/register")}
            className="cursor-pointer text-blue-600"
          >
            Signup
          </h1>
        </h1>
      </div>
    </div>
  );
};

export default Login;
