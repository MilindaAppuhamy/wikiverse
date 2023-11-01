import React from "react";

const Register = (props) => {
    const {setIsLogin} = props;
    return (
        <>
            <h2>Register</h2>
            <div className="input-fields">
                <div className="input">
                    <label style={{ zIndex: 1}}>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        style={{ zIndex: 0}}
                    />
                </div>
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

            <button className="register" type="submit">Register</button>
            <div className="back-to-login">
                <p>Already with us.</p>
                <a onClick={() => setIsLogin(true)}>Login</a>
            </div>
        </>
    );
};

export default Register;