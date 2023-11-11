'use client'
import LoginForm from '@/components/LoginForm/LoginForm'
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import styles from "./login.module.css"

export default function page() {
  return (
    <div className={styles.parent}>
    <NavBar/>
    <div className={styles.container}>
      <div className={styles.imageCont}>
        </div>
      <LoginForm></LoginForm>
      
    </div>
    </div>
  )
}
