'use client'
import SignUpForm from '@/components/SignUpForm/SignUpForm'
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import styles from "./signUp.module.css"

export default function page() {
  return (
    <div className={styles.parent}>
    <NavBar/>
    <div className={styles.container}>
      <SignUpForm></SignUpForm>
      <div className={styles.imageCont}>
        </div>
    </div>
    </div>
  )
}
