import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useRef } from "react";

const SignUp = () => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const addLoginDetail = async () => {
    try {
      const fullname = fullnameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (!fullname || !email || !password) {
        return alert("All fields are required");
      }

      const details = { fullname, email, password };

      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        details
      );

      
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div>SignUp</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="fullname">FullName:</label>
        <input type="text" id="fullname" name="fullname" ref={fullnameRef} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} />
        <br />
        <button type="button" onClick={addLoginDetail}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
