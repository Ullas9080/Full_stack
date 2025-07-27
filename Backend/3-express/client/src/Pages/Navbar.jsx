import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const addLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/logout", {}, {
        withCredentials: true
      });

        toast(res?.data?.message);
    console.log(res?.data?.message)
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <h1>MERN</h1>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
      <Button onClick={addLogout}>Logout</Button>
      <Button>
        <Link to="/SignUp">SignUp</Link>
      </Button>
    </>
  );
};

export default Navbar;