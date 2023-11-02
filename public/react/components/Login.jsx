import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiURL from "../utils/api";
import Toast from "./Toast";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const { setIsLogin } = props;
  const baseUrl = apiURL;
  const loginUrl = `${baseUrl}/users/login`;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginUser = async (e, user) => {
    e.preventDefault();
    try {
      const res = await axios.post(loginUrl, user);
      if (res.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }

    setTimeout(() => {
      setErrorMessage("");
      setIsError(false);
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      {isError ? <Toast message={errorMessage} status="error" /> : <></>}
      {isSuccess ? (
        <Toast message="Successfully registered." status="success" />
      ) : (
        <></>
      )}
      <h2>Login</h2>
      <div className="input-fields">
        <div className="input">
          <label style={{ zIndex: 1 }}>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            style={{ zIndex: 0 }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input">
          <label style={{ zIndex: 1 }}>Password</label>
          <input
            style={{ zIndex: 0 }}
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <button
        className="login"
        type="submit"
        onClick={(e) => loginUser(e, user)}
      >
        Login
      </button>
      <div className="back-to-register">
        <p>New to Wikiverse.</p>
        <a onClick={() => setIsLogin(false)}>Register</a>
      </div>
    </>
  );
};

export default Login;
