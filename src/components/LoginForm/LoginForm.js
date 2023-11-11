'use client'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "./LoginForm.module.css";
import Link from 'next/link'
import { db, auth} from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(" ");
    
    const submitHandler = async () =>{
        try{
            const userData = await signInWithEmailAndPassword(auth, email,password);
            //Will need to change this to the profile later
            router.push("/")
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.greeting}>Welcome back</div>
                <div className={styles.subGreeting}>Glad you are back! Please enter your details.</div>
                <div className={styles.error}>{error}</div>
                <div className={styles.inputLabel}>Email</div>
                <input
                    className={styles.inputField}
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.inputLabel}>Password</div>
                <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={submitHandler} className={styles.submitButton}>Sign in</button>
                <div className={styles.signUpText}>
                    <div>
                        Dont have an account?
                    </div>
                    <Link href="/signUp"> Sign up for free</Link>
                </div>
                
            </div>
        </div>
    );

}

export default LoginForm;