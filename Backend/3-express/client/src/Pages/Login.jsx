import axios from 'axios'
import React, { useRef } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
const emailRef=useRef()
const passwordRef=useRef()

const addLoginDetail=async()=>{
try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (!email || !password) {
        return alert("All fields are required");
      }
const details={email,password}
const res = await axios.post("http://localhost:8000/api/v1/user/login", details,{withCredentials:true
  
});
console.log("Response:", res.data.success);

} catch (error) {
    console.error(error.response?.data?.message || "Something went Wrong")
}
}

  return (
    <div>
        <h1>Login</h1>
        <form method="post">
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
    </div>
  )
}

export default Login