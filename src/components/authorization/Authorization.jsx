import React from 'react';

import styles from '@/components/authorization/style.scss';

import AuthForm from './AuthForm';


const Authorization = () => (
  <React.Fragment>
    <div className={styles['authorization-wrapper']}>
      <AuthForm />
    </div>
  </React.Fragment>
);

export default Authorization;
