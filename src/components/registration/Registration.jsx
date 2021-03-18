import React from 'react';

import styles from '@/components/authorization/style.scss';

import RegistrationForm from './RegistrationForm';

const Registration = () => (
  <React.Fragment>
    <div className={styles['authorization-wrapper']}>
      <RegistrationForm />
    </div>
  </React.Fragment>
);

export default Registration;
