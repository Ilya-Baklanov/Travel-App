import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { switchCountryAction } from '../../redux/actions';

import styles from '@/components/home/style.scss';

import Footer from './Footer/Footer';
import LanguageSwitcher from './Header/LanguageSwitcher';
import Logo from './Header/Logo';
import QuitButton from './Header/QuitButton';
import EnterButton from './Header/EnterButton';
import LoggedUserInfo from './Header/LoggedUserInfo';
import GuestUserInfo from './Header/GuestUserInfo';
import Search from './Header/Search';
import CountryCard from './Main/CountryCard/CountryCard';
import countriesAtlas, { labels } from '../../assets/atlases/countriesAtlas';

const Home = ({ switchCountryAction, isAuth, language }) => {
  const [countries, setCountries] = useState(countriesAtlas);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    setCountries(countriesAtlas);
  }, []);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const switchCountryHandler = (country) => {
    switchCountryAction(country.code);
    history.push('/country');
  }

  return (
    <>
      <div className={styles['home-page-wrapper']}>
        <header className={styles['header']}>
          <Logo />
          <Search onChange={searchHandler} searchValue={searchValue} />
          <LanguageSwitcher />
          {isAuth ? <LoggedUserInfo /> : <GuestUserInfo />}
          {isAuth ? <QuitButton /> : <EnterButton />}
        </header>

        <main className={styles['main']}>
          <div className={styles['home-content-wrapper']}>
            {countries.map((country) => {
              if (searchValue === '') {
                return (
                  <CountryCard
                    key={country.id}
                    onClick={() => switchCountryHandler(country)}
                    countryCode={country.code}
                    language={language}
                  />
                );
              }

              if (
                labels[language][country.code].name.toLowerCase().includes(searchValue.toLowerCase()) ||
                labels[language][country.code].capital.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return (
                  <CountryCard
                    key={country.id}
                    onClick={() => switchCountryHandler(country)}
                    countryCode={country.code}
                    language={language}
                  />
                );
              }
            })}
          </div>
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  switchCountryAction,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.auth,
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
