/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import '@firebase/firestore';
import '@firebase/auth';
import { auth, db } from '../FirebaseDB/FirebaseDB';

import { getErrors } from './authErrorEnum';

import store from '../../index'
import { registrationSuccess } from '../../redux/actions'


// listen for auth status changes

export default class Auth {
  AuthStateChanged() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('uidTravel', user.uid);
      } else {
        localStorage.removeItem('uidTravel');
      }
    });
  }

  goSignUp() {
    this.AuthStateChanged();
    // signup
    document.querySelector('#registration-btn-regForm').addEventListener('click', () => {
      // get user info
      const mail = document.querySelector('#login-reg-form').value;
      const password = document.querySelector('#password-reg-form').value;
      const firstName = document.querySelector('#user-name').value;
      const secondName = document.querySelector('#user-surname').value;

      // sign up the user & add firestore data
      auth
        .createUserWithEmailAndPassword(mail, password)
        .then((cred) =>
          db.collection('Users').doc(cred.user.uid).set({
            firstName,
            secondName,
            mail,
            password,
          })
        )
        .then(() => {
          localStorage.setItem('isAuth', 'true');
          store.dispatch(registrationSuccess())
        })
        .catch(er => {
          localStorage.setItem('isAuth', 'false');
          document.querySelector('#errServ').innerHTML = getErrors(er.code) || er.message;
        });
    });
  }


  goLogin() {
    this.AuthStateChanged();
    document.querySelector('#login-btn').addEventListener('click', () => {
      // get user info
      const mail = document.querySelector('#login').value;
      const password = document.querySelector('#password').value;

      // log the user in
      auth
        .signInWithEmailAndPassword(mail, password)
        .then(cred => {
          localStorage.setItem('isAuth', 'true');
          store.dispatch(registrationSuccess())
          db.collection('Users')
            .doc(cred.user.uid)
            .get()
            .then(() => {
            });
        })
        .catch(er => {
          localStorage.setItem('isAuth', 'false');
          document.querySelector('#errServ').innerHTML = getErrors(er.code) || er.message;
        });
    });
  }
}
