import React from 'react';
import styles from './ProfileInfo.module.css';

export default function ProfileInfo({email,userName}) {
  return (
    <div className={styles.profileName}>
      <h3 className='font-extrabold text-2xl my-3'>{userName}</h3>
      <h3>{email}</h3>
    </div>
  );
}
