'use client'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "./SignUpForm.module.css";
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { collection,addDoc,setDoc,doc } from "@firebase/firestore";
import Link from "next/link";
import { db, auth} from "@/firebase/config";


const SignUpForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [name,setName] =useState(null)
    const [error, setError] = useState(" ");
    const router = useRouter();

   
    const submitHandler = async () =>{
        /*const adding = await setDoc(doc(db, "users",122), 
            userDetails
        );*/
        
        if(confirmPassword != password){
            setError("Error: (Passwords do not match)");
        }else if(password.length <6){
            setError("Error: (Weak password)");
        }else{
            if(auth){
                signOut(auth);
            }
            console.log("auth: ",auth);
            try{
                const userData = await createUserWithEmailAndPassword(auth, email,password);
                await updateProfile(auth.currentUser,{displayName:`${name}`});
                router.push("/");
            }catch(error){
    
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error code",errorCode);
                console.log("error message: ",errorMessage);
                setError(errorMessage);
            }
        }
    }

    
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.greeting}>Get started</div>
                <div className={styles.subGreeting}>Provide the details below to create an account</div>
                <div className={styles.error}>{error}</div>
                <div className={styles.inputLabel}>Name</div>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.inputLabel}>Email</div>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <div className={styles.inputLabel}>Password</div>
                <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.inputLabel}>Confirm Password</div>
                <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className={styles.submitButton} onClick={submitHandler}>SignUp</button>
                <div className={styles.signUpText}>
                    <div>
                        Already have an account?
                    </div>
                    <Link href="/login">Login</Link>
                </div>
                
            </div>
        </div>
    );

}

export default SignUpForm;