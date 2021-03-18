import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';
import { quitAction } from '@/redux/actions';

const EnterButton = ({ quitAction, language }) => {
  const history = useHistory();

  const [enterBtnTitle, setEnterBtnTitle] = useState('Войти');

  useEffect(() => {
    if (language === 'en-US') {
      setEnterBtnTitle('Log in');
    } else if (language === 'fr-FR') {
      setEnterBtnTitle('Connexion');
    } else {
      setEnterBtnTitle('Войти');
    }
  }, [language])

  return (
    <button
      className={styles['quit-button']}
      type="button"
      onClick={() => {
        history.push('/login');
        quitAction();
      }}
    >
      {enterBtnTitle}
      <img className={styles['quit-icon']} className={styles['enter-icon']} src="../../assets/image/enter.svg" alt="Enter" />
    </button>
  );
};

const mapDispatchToProps = {
  quitAction,
};

const mapStateToProps = (state) => ({
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterButton);