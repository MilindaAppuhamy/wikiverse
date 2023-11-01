import React from "react";

const Login = (props) => {
    const {setIsLogin} = props;
    return (
        <>
            <h2>Login</h2>
            <div className="input-fields">
                <div className="input">
                    <label style={{ zIndex: 1}}>Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        style={{ zIndex: 0}}
                    />
                </div>
                <div className="input">
                    <label style={{ zIndex: 1}}>Password</label>
                    <input style={{ zIndex: 0}} type="password" placeholder="Password" required />
                </div>
            </div>

            <button className="login" type="submit">Login</button>
            <div className="back-to-register">
                <p>New to Wikiverse.</p>
                <a onClick={() => setIsLogin(false)}>Register</a>
            </div>
        </>
    );
};

export default Login;