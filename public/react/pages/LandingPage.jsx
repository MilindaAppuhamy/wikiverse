import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlipcardContext from "../context/FlipcardContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(FlipcardContext);

  return (
    <main className="landing-page">
      <div className="blob"></div>
      <nav className="navbar">
        <h2>Wikiverse</h2>
        <section className="nav-buttons">
          <button
            className="register-button"
            onClick={() => {
              setIsLogin(false);
              navigate("/authenticate");
            }}
          >
            Register
          </button>
          <button
            className="login-button"
            onClick={() => {
              setIsLogin(true);
              navigate("/authenticate");
            }}
          >
            Login
          </button>
        </section>
      </nav>

      <section className="content">
        <section className="heading">
          <div className="line">
            <h1 className="colored">Words</h1>
            <h1>that Inspire,</h1>
          </div>
          <div className="line">
            <h1 className="colored">Stories</h1>
            <h1>that Resonate.</h1>
          </div>
        </section>
        <section className="images">
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
