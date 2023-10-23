import React from 'react';
import styles from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div className={styles.profileName}>
      <h3>[ Username ]</h3>
      <h3>[ Email ]</h3>
    </div>
  );
}
