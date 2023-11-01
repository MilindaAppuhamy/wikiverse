import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main className="authentication-page" id="/authenticate">
      <section className={isLogin ? "flip-card login" : "flip-card"}>
        <div className="flip-card-front">
          <Register setIsLogin={setIsLogin} />
        </div>

        <div className="flip-card-back">
          <Login setIsLogin={setIsLogin} />
        </div>
      </section>
    </main>
  );
};

export default AuthenticationPage;
