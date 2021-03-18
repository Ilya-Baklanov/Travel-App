import React from 'react';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';

const Logo = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div onClick={clickHandler} className={styles['logo']}>
        <img className={styles['logo-img']} src="../../assets/image/travel-logo.jpeg" alt="Travel" />
    </div>
  );
};

export default Logo;
