import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './style.scss';
import { guide } from '../../../../assets/atlases/guide.js';

import Footer from '../../Footer/Footer';
import LanguageSwitcher from '../../Header/LanguageSwitcher';
import Logo from '../../Header/Logo';
import QuitButton from '../../Header/QuitButton';
import EnterButton from '../../Header/EnterButton';
import LoggedUserInfo from '../../Header/LoggedUserInfo';
import GuestUserInfo from '../../Header/GuestUserInfo';
import Widgets from '../../Widgets/Widgets';
import Slider from './Slider';
import { labels } from '../../../../assets/atlases/countriesAtlas';
import WidgetMap from '../../Widgets/WidgetMap/WidgetMap';
import VideoPlayer from './VideoPlayer';
import BackBtn from '../BackBtn/BackBtn';

const CountryPage = ({ isAuth, language, currentCountry }) => {
  const [widgetIsActive, setWidgetIsActive] = useState(false);
  const [widgetsTitle, setWidgetsTitle] = useState('Виджеты');

  useEffect(() => {
    if (language === 'en-US') {
      setWidgetsTitle('Widgets');
    } else if (language === 'fr-FR') {
      setWidgetsTitle('Widgets');
    } else {
      setWidgetsTitle('Виджеты');
    }
  }, [language]);

  const widgetCheckboxHandler = () => {
    setWidgetIsActive(!widgetIsActive);
  };

  return (
    <React.Fragment>
      <div className={styles['country-page-wrapper']}>
        <header className={styles['header']}>
          <Logo />
          <LanguageSwitcher />
          {isAuth ? <LoggedUserInfo /> : <GuestUserInfo />}
          {isAuth ? <QuitButton /> : <EnterButton />}
        </header>

        <main className={styles['main']}>
          <div>
            <Form>
              <div className={styles['widgetSwitcher']}>
                <div className={styles['widgets']}>
                  <input
                    type="checkbox"
                    value="None"
                    id={styles['widgets']}
                    onChange={widgetCheckboxHandler}
                  />
                  <label htmlFor={styles['widgets']}></label>
                </div>
                <label className={styles['lblRoundedOne']}>{widgetsTitle}</label>
              </div>
            </Form>
          </div>
          <BackBtn />
          <div
            className={
              widgetIsActive ? styles['widgets-wrapper_active'] : styles['widgets-wrapper']
            }
          >
            <Widgets />
          </div>
          <div className={styles['country-content-wrapper']}>
            <div className={styles['country-content__title']}>
              <h1>{labels[language][currentCountry].name}</h1>
            </div>
            <div className={styles['country-content__slider']}>
              <Slider />
            </div>
            <div className={styles['content-wrapper']}>
              <div className={styles['country__text-content']}>
                <div className={styles['country-description__map']}>
                  <WidgetMap lang={language} country={currentCountry} />
                </div>
                <p>{guide[language][currentCountry].main}</p>
              </div>
            </div>
            <div className={styles['country__video']}>
              <VideoPlayer />
            </div>
          </div>
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.auth,
  language: state.switchLanguageReducer.language,
  currentCountry: state.switchCountryReducer.country,
});

export default connect(mapStateToProps, null)(CountryPage);
