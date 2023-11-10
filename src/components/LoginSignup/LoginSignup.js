'use client'
import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? (
                    <div className="input">
                        <FaUser />
                        <input type="text" placeholder="Name" />
                    </div>
                ) : null}
                <div className="input">
                    <MdEmail />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <AiFillEye />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? (
                <div className="forgot-passsword">Lost Password? <span>Click Here!</span></div>
            ) : null}
            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => {
                        setAction("Sign Up");
                    }}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => {
                        setAction("Login");
                    }}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
