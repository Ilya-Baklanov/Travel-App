import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Authorization from './components/authorization/Authorization';
import Home from './components/home/Home';
import CountryPage from './components/home/Main/CountryPage/CountryPage';
import Registration from './components/registration/Registration';

const App = ({ isAuth }) => {
  const RouteHome = () => {
    if (isAuth) {
      return <Redirect to="/home" />;
    }
    return <Redirect to="/guest" />;
  };

  const RouteLogin = () => {
    if (isAuth) {
      return <Redirect to="/home" />;
    }
    return <Authorization />;
  };

  const RouteRegistration = () => {
    if (isAuth) {
      return <Redirect to="/home" />;
    }
    return <Registration />;
  };

  return (
    <BrowserRouter basename="#">
      <Switch>
        <Route path="/guest">
          {
            isAuth
              ? <Redirect to="/home" />
              : <Home />
          }
        </Route>
        <Route exact path="/">
          <RouteHome />
        </Route>
        <Route push path="/login">
          <RouteLogin />
        </Route>
        <Route push path="/registration">
          <RouteRegistration />
        </Route>
        {
          isAuth
            ? (
              <>
                <Route path="/home">
                  <Home />
                </Route>
                <Route push path="/country">
                  <CountryPage />
                </Route>
              </>
            )
            : <Redirect to="/login" />
        }
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.auth,
});

export default connect(mapStateToProps, null)(App);
