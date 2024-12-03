import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user }) => {
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/"); // Redirect to login form
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">You are logged in!</h1>
        <p className="text-lg">
          Welcome, <span className="font-semibold">{user.name}</span>!
        </p>
        <p className="text-sm text-gray-600">Role: {user.role}</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
