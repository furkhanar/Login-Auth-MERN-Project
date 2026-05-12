import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/Auth.css";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://login-auth-mern-project.onrender.com/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message || "Something went wrong"
      );

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-link">
          Don't have account? <Link to="/register">Register</Link>
        </div>

      </div>

    </div>

  );
}

export default Login;