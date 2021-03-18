import React from 'react';
import { useHistory } from 'react-router';

import styles from '../CountryPage/style.scss';

const BackBtn = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div onClick={clickHandler} className={styles['back-btn']}>
        <img className={styles['back-btn-img']} src="../../assets/image/back-button.svg" alt="Back button" />
    </div>
  );
};

export default BackBtn;
