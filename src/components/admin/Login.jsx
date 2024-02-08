import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (email && pwd) {
      fetch("/admin/login", {
        method: "POST",
        credentials:'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, pwd}),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json?.status == 'success') {
            window.location.reload();
          } else {
            alert(json?.message ?? 'Something went wrong');
          }
        });
    }
  };

  return (
    <div className="text-gray-500 w-screen h-screen flex items-center justify-center ">
      <div className="max-w-md">
        <h2 className="text-center text-3xl mb-5 font-bold text-gray-800">
          Log in to your cms
        </h2>
        <p className="text-center">Welcome back! Please enter your details.</p>

        <form className="mt-5" onSubmit={handlePayment}>
          <div className="flex flex-col gap-5 mb-5">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg p-3 border"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              placeholder="*** ***"
              className="rounded-lg p-3 border"
              onChange={(e) => setPwd(e.target.value)}
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
