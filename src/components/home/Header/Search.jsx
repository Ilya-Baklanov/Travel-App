import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import styles from '@/components/home/style.scss';

const Search = ({onChange, searchValue, language}) => {
  const [searchTitle, setSearchTitle] = useState('Поиск');
  const clickHandler = () => {};

  useEffect(() => {
    if (language === 'en-US') {
      setSearchTitle('Search');
    } else if (language === 'fr-FR') {
      setSearchTitle('Chercher');
    } else {
      setSearchTitle('Поиск');
    }
  }, [language])

  return (
    <div className={styles['search']}>
      <div className="search-container">
        <div className={styles['search-box']}>
          <input type="text" className={styles['search-input']} placeholder={`${searchTitle}...`} autoFocus={true} onChange={onChange}/>

          <button className={styles['search-button']}>
            <i className={styles['fas']} className={styles['fa-search']}>
            <img
          src="/assets/image/search-icon.svg"
          alt="Search-icon"
          className="Search-icon"
          width="30"
          height="30"
        />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, null)(Search);
