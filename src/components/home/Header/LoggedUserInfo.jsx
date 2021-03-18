import React, { useState, useEffect } from 'react';

import { FirebaseDB } from '../../../utils/FirebaseDB/FirebaseDB';

import styles from '@/components/home/style.scss';

const LoggedUserInfo = () => {
  const firebaseDB = new FirebaseDB();
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    await firebaseDB.getData('Users').then((data) => {
      let loggedUserInfo = data.find(({ id }) => id === localStorage.getItem('uidTravel'));
      setUserInfo(loggedUserInfo);
    });
  };

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div className={styles['userInfo']}>
      <img
          src={`../../../assets/image/avatar.svg`}
          alt={`User image not found`}
        />
      <div className={styles['userName']}>
        <div className={styles['firstName']}>{userInfo.firstName}</div>
        <div className={styles['secondName']}>{userInfo.secondName}</div>
      </div>
    </div>
  );
};

export default LoggedUserInfo;
