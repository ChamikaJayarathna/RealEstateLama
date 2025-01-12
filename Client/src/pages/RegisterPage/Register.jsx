import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/api/auth/register", {
        username,
        email,
        password,
      });

      console.log(res.data);
      
      
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
