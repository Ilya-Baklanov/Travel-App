import React, { FormEvent, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/registration/style.scss';
import { authAction } from '@/redux/actions';

import Auth from '../../utils/Authorization/auth';
import LanguageSwitcher from '../home/Header/LanguageSwitcher';

const RegistrationForm = ({ authAction, isRegistration, language }) => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const auth = new Auth();

  const [registrationTitle, setRegistrationTitle] = useState('Регистрация');
  const [goBackBtnTitle, setGoBackBtnTitle] = useState('Назад');

  const [firstNameTitle, setFirstNameTitle] = useState('Имя:');
  const [secondNameTitle, setSecondNameTitle] = useState('Фамилия:');
  const [emailTitle, setEmailTitle] = useState('Почта:');
  const [passwordTitle, setPasswordTitle] = useState('Пароль:');

  const [registerBtnTitle, setRegisterBtnTitle] = useState('Регистрация');


  useEffect(() => {
    auth.goSignUp();
  }, [])

  useEffect(() => {
    if (isRegistration) {
      authAction();
      history.push('/');
    }
  }, [isRegistration])

  useEffect(() => {
    if (language === 'en-US') {
      setRegistrationTitle('Registration');
      setGoBackBtnTitle('Back');
      setEmailTitle('E-mail:');
      setPasswordTitle('Password:');
      setFirstNameTitle('First name:');
      setSecondNameTitle('Second name:');
      setRegisterBtnTitle('Registration');
    } else if (language === 'fr-FR') {
      setRegistrationTitle('Inscription');
      setGoBackBtnTitle('Retourner');
      setEmailTitle('E-mail:');
      setPasswordTitle('Mot de passe:');
      setFirstNameTitle('Prénom:');
      setSecondNameTitle('Nom de famille:');
      setRegisterBtnTitle('Inscription');
    } else {
      setRegistrationTitle('Регистрация');
      setGoBackBtnTitle('Назад');
      setEmailTitle('Почта:');
      setPasswordTitle('Пароль:');
      setFirstNameTitle('Имя:');
      setSecondNameTitle('Фамилия:');
      setRegisterBtnTitle('Регистрация');
    }
  }, [language])

  const loginHandler = () => {
    history.push('/login');
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
//     if (form.checkValidity() && isRegistration) {}
    setValidated(true);
  };

  return (
    <React.Fragment>
    <div className={styles['login-page-wrapper']}>
      <div className={styles['language-switcher']}>
          <LanguageSwitcher />
      </div>
      <div className={styles['registration']}>
        <div className={styles['form-wrapper']} id="reg-form-login">
          <div className={styles['form-title-wrapper']}>
            <h1 className={styles['form-title']}>{registrationTitle}</h1>
            <Button
              onClick={loginHandler}
              className={styles['back-to-login-button']}
              id="back-to-login-btn"
              type="button"
            >
              <img
                className={styles['back-to-login-icon']}
                src="../../assets/image/logout_icon.png"
                alt="back-to-login"
              />{' '}
              {goBackBtnTitle}
            </Button>
          </div>
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
                {firstNameTitle}
              </Form.Label>
              <Form.Control
                className={styles['form__input']}
                required
                type="text"
                placeholder="Иван"
                id="user-name"
              />
              <Form.Control.Feedback>Готово!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Введите корректное имя</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="login" className={styles['form__label']}>
                {secondNameTitle}
              </Form.Label>
              <Form.Control
                className={styles['form__input']}
                required
                type="text"
                placeholder="Иванов"
                id="user-surname"
              />
              <Form.Control.Feedback>Готово!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Введит корректную фамилию</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="login" className={styles['form__label']}>
                {emailTitle}
              </Form.Label>
              <Form.Control
                className={styles['form__input']}
                required
                type="email"
                placeholder="your@e-mail"
                id="login-reg-form"
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
                id="password-reg-form"
              />
              <Form.Control.Feedback>Готово!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Только цифры (от 8 до 16 символов)
              </Form.Control.Feedback>
            </Form.Group>
            <div className={styles['buttons-wrapper']}>
              <Button className={styles['submit-button']} id="registration-btn-regForm" type="submit">
                {registerBtnTitle}
              </Button>
            </div>
            <div className={styles['errorServ']} id="errServ"></div>
          </Form>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isRegistration: state.registrationReducer.isRegistration,
  language: state.switchLanguageReducer.language,
});

const mapDispatchToProps = {
  authAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
