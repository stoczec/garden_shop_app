import React from 'react';
import style from './adress.module.scss';

const Adress = () => {
  return (
    <article className={style.adress}>
      <h3>Address</h3>
      <a
        href="https://goo.gl/maps/6H2ts6D8QQnboeYcA"
        target="_blank"
        rel="noreferrer noopener"
      >
        Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
      </a>
      <h6>Working Hours:</h6>
      <span>24 hours a day</span>
    </article>
  );
};
export default Adress;
