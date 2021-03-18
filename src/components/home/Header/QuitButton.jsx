import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';
import { quitAction } from '@/redux/actions';

const QuitButton = ({ quitAction }) => {
  const history = useHistory();
  return (
    <button
      className={styles['quit-button']}
      type="button"
      onClick={() => {
        history.push('/login');
        quitAction();
      }}
    >
      Выйти
      <img className={styles['quit-icon']} src="../../assets/image/logout_icon.png" alt="logout" />
    </button>
  );
};

const mapDispatchToProps = {
  quitAction,
};

export default connect(null, mapDispatchToProps)(QuitButton);
