import React from 'react';
import style from './adress.module.scss';
import contacts_data from '../../../data/contacts';

const Adress = () => {
  const { country, city, post, street } = contacts_data;
  return (
    <article className={style.adress}>
      <h3>Address</h3>
      <a
        href="https://goo.gl/maps/6H2ts6D8QQnboeYcA"
        target="_blank"
        rel="noreferrer noopener"
      >
        {street}, {post}, {city}, {country}
      </a>
      <h6>Working Hours:</h6>
      <span>24 hours a day</span>
    </article>
  );
};
export default Adress;
