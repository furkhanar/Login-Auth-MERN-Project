import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/Auth.css";

function Register() {

  const [form, setForm] = useState({
    name: "",
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
      "https://your-render-url.onrender.com/api/auth/register",
      form
    );

    alert(res.data.message);

  } catch (error) {

    alert(error.response.data.message);

  }
};
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

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
            Register
          </button>

        </form>

        <div className="auth-link">
          Already have account? <Link to="/">Login</Link>
        </div>

      </div>

    </div>
  );
}

export default Register;