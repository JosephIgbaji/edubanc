import React from "react";

const Login = () => {
  return (
    <div className="text-gray-500 w-screen h-screen flex items-center justify-center ">
      <div className="max-w-md">
        <h2 className="text-center text-3xl mb-5 font-bold text-gray-800">
          Log in to your cms
        </h2>
        <p className="text-center">Welcome back! Please enter your details.</p>

        <form className="mt-5">
          <div className="flex flex-col gap-5 mb-5">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg p-3 border"
            />
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              placeholder=".........."
              className="rounded-lg p-3 border"
            />
          </div>
          <p className="mb-5 text-gray-600">Forgot password</p>
          <button className="w-full text-white bg-gray-800 py-3 rounded-xl">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
