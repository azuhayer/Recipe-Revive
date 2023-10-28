import React from 'react';
import styles from './ProfileImage.module.css';

// User profile icon placeholder
const profileImage = "assets/profile.png";

export default function ProfileImage() {
  return (
    <div className={styles.profileImage}>
      <img src={profileImage} alt="User Profile" />
    </div>
  );
}
