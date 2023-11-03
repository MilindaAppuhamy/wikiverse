import React, { useContext, useState } from "react";
import apiURL from "../utils/api";
import axios from "axios";
import Toast from "./Toast";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setIsLogin } = props;
  const baseUrl = apiURL;
  const registrationUrl = `${baseUrl}/users/register`;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registerUser = async (e, user) => {
    e.preventDefault();
    try {
      const res = await axios.post(registrationUrl, user);
      if (res.status === 200) {
        setIsSuccess(true);
        setAuthUser(res.data);
        setTimeout(() => {
          navigate("/me");
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
      <h2>Register</h2>
      <div className="input-fields">
        <div className="input">
          <label style={{ zIndex: 1 }}>Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            required
            style={{ zIndex: 0 }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input">
          <label style={{ zIndex: 1 }}>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            style={{ zIndex: 0 }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input">
          <label style={{ zIndex: 1 }}>Password</label>
          <input
            style={{ zIndex: 0 }}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
      </div>

      <button
        className="register"
        type="submit"
        onClick={(e) => registerUser(e, user)}
      >
        Register
      </button>
      <div className="back-to-login">
        <p>Already with us.</p>
        <a onClick={() => setIsLogin(true)}>Login</a>
      </div>
    </>
  );
};

export default Register;
