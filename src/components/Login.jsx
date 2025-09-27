import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
       e.preventDefault(); 
    
     console.log("Email:", email);
     console.log("Password:", password);

     
      setEmail("");
      setPassword("");

  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 p-6 rounded-xl shadow-lg">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4 w-64"
        >
          <input
            value={email}
            onChange={(e) => {
               setEmail(e.target.value);
            }}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2 w-full"
            type="email"
            placeholder="Enter the E-mail"
          />

          <input
            value={password}
            onChange={(e) => {
               setPassword(e.target.value);
            }}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2 w-full"
            type="password"
            placeholder="Enter the password"
          />
          <button className="bg-red-600 text-white rounded-full px-6 py-2 hover:bg-red-700 transition">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
