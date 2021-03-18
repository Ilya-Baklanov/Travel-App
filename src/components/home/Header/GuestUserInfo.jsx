import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

const GuestUserInfo = ({language}) => {

  const [userTitle, setUserTitle] = useState('ru-RU');

  useEffect(() => {
    if (language === 'en-US') {
      setUserTitle('Guest');
    } else if (language === 'fr-FR') {
      setUserTitle('Visiteur');
    } else {
      setUserTitle('Гость');
    }
  }, [language])

  return (
    <div className={styles['userInfo']}>
      <img
          src={`../../../assets/image/guest.svg`}
          alt={`User image not found`}
        />
      <div className={styles['userNameGuest']}>
        <div className={styles['guestName']}>{userTitle}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, null)(GuestUserInfo);