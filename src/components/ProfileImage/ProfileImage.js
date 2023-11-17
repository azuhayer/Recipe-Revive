'use client'
import React from 'react';
import styles from './ProfileImage.module.css';
import { useState } from 'react';

// User profile icon placeholder
const profileImage = "assets/profile.png";

export default function ProfileImage() {
  const images = ["https://images.pexels.com/photos/4457125/pexels-photo-4457125.jpeg?auto=compress&cs=tinysrgb&w=1200",
"https://images.pexels.com/photos/5908188/pexels-photo-5908188.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/9424930/pexels-photo-9424930.jpeg?auto=compress&cs=tinysrgb&w=1200",
"https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1200"]

  const rand = Math.floor(Math.random() * images.length);

  return (
    <div className={styles.profileImage}>
      <img src={images[rand]} alt="User Profile" />
    </div>
  );
}
