import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);

    setEmail("")
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-80 rounded-full border-2 border-emerald-600 bg-transparent px-3 py-5 text-xl text-white outline-none placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-80 rounded-full border-2 border-emerald-600 bg-transparent px-3 py-5 text-xl text-white outline-none placeholder:text-gray-500"
            type="password"
            placeholder="Enter password"
            required
          />

          <button
            className="mt-5 rounded-full bg-emerald-600 px-5 py-3 text-xl text-white outline-none "
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
