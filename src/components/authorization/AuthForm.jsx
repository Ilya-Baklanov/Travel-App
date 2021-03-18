import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/authorization/style.scss';
import { authAction } from '@/redux/actions';

import Auth from '../../utils/Authorization/auth';
import LanguageSwitcher from '../home/Header/LanguageSwitcher';

const AuthForm = ({ authAction, isRegistration, language }) => {
  const [validated, setValidated] = useState(false);

  const [emailTitle, setEmailTitle] = useState('Почта:');
  const [passwordTitle, setPasswordTitle] = useState('Пароль:');

  const [registerBtnTitle, setRegisterBtnTitle] = useState('Регистрация');
  const [enterBtnTitle, setEnterBtnTitle] = useState('Войти');
  const [enterGuestTitle, setEnterGuestTitle] = useState('Войти как гость');

  const history = useHistory();
  const auth = new Auth();

  useEffect(() => {
    if (language === 'en-US') {
      setEmailTitle('E-mail:');
      setPasswordTitle('Password:');
      setRegisterBtnTitle('Sign up');
      setEnterBtnTitle('Log in');
      setEnterGuestTitle('Log in as guest');
    } else if (language === 'fr-FR') {
      setEmailTitle('E-mail:');
      setPasswordTitle('Mot de passe:');
      setRegisterBtnTitle("S'inscrire");
      setEnterBtnTitle('Connexion');
      setEnterGuestTitle("Invité");
    } else {
      setEmailTitle('Почта:');
      setPasswordTitle('Пароль:');
      setRegisterBtnTitle('Регистрация');
      setEnterBtnTitle('Войти');
      setEnterGuestTitle('Войти как гость');
    }
  }, [language])

  const registrationHandler = () => {
    history.push('/registration');
  };

  const guestHandler = () => {
    history.push('/guest');
  };

  useEffect(() => {
    auth.goLogin();
  }, [])


  useEffect(() => {
    if (isRegistration) {
      authAction();
      history.push('/home');
    }
  }, [isRegistration])


  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
//     if (form.checkValidity()) {}
    setValidated(true);
  };

  return (
    <>
      <div className={styles['login-page-wrapper']}>
        <div className={styles['language-switcher']}>
          <LanguageSwitcher />
        </div>
        <div className={styles['authorization']}>
          <div className={styles['form-wrapper']} id="form-login">
            <h1 className={styles['form-title']}>Travel-App</h1>
            <Form
              noValidate
              validated={validated}
              className={styles['form']}
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <Form.Group>
                <Form.Label htmlFor="login" className={styles['form__label']}>
                  {emailTitle}
                </Form.Label>
                <Form.Control
                  className={styles['form__input']}
                  required
                  type="email"
                  placeholder="your@e-mail"
                  id="login"
                />
                <Form.Control.Feedback>Готово!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Электронная почта в формате Your@e-mail.com
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password" className={styles['form__label']}>
                  {passwordTitle}
                </Form.Label>
                <Form.Control
                  required
                  className={styles['form__input']}
                  type="password"
                  id="password"
                />
                <Form.Control.Feedback>Готово!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Только цифры (от 8 до 16 символов)
                </Form.Control.Feedback>
              </Form.Group>

              <div className={styles['buttons-wrapper']}>
                <Button
                  onClick={registrationHandler}
                  className={styles['submit-button']}
                  id="registration-btn"
                  type="button"
                >
                  {registerBtnTitle}
                </Button>

                <Button className={styles['submit-button']} id="login-btn" type="submit">
                  {enterBtnTitle}
                </Button>

                <Button
                onClick={guestHandler}
                className={styles['submit-button']}
                className={styles['guest-submit-button']}
                id="guest-login-btn"
                type="submit"
                >
                  {enterGuestTitle}
                </Button>
              </div>
              <div className={styles['errorServ']} id="errServ"></div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isRegistration: state.registrationReducer.isRegistration,
  language: state.switchLanguageReducer.language,
});

const mapDispatchToProps = {
  authAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
