import React from 'react';

import styles from '@/components/home/style.scss';

const Footer = () => {
  return (
    <>
      <div className={styles['developers']}>
        <a href="https://github.com/Ilya-Baklanov" target="_blank" >Ilya</a>
        <a href="https://github.com/dimit999" target="_blank" >Dmitry</a>
        <a href="https://github.com/vitaly-kn" target="_blank" >Vitaly</a>
        {/* <a href="">Pavel</a> */}
      </div>
      <div className={styles['year']}>2021</div>
      <a href="https://rs.school/js/" target="_blank">
        <img
          src="/assets/image/rs_school_js.svg"
          alt="RS-Sсhool"
          className="footer__RS-logo"
          width="100"
          height="50"
        />
      </a>
    </>
  );
};

export default Footer;
