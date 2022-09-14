import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //getting email password
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email OR password");
    }
  };
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
        <span><h2>
        {" "}
            <FaHouseUser /> NCODEA Technologies Private Limited{" "}
            </h2>
            </span>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/signup">Register Now</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;