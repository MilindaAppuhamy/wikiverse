import React from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthenticationPage = () => {
    return (
        <main className="authentication-page">
            <section className="flip-card">

                    <div className="flip-card-front">
                        <Register />
                    </div>

                    <div className="flip-card-back">
                        <Login />
                    </div>
                
            </section>
        </main>
    )
};

export default AuthenticationPage;