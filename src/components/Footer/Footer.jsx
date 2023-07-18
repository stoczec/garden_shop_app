import React from 'react';
import style from './footer.module.scss';
import { Map } from '../Map/Map';

export const Footer = () => {
  return (
    <footer>
      <section className={style.contact_info}>
        <article className={style.contact}>
          <h3>Contact</h3>
          <p>+49 999 999 99 99</p>
          <div className={style.social_links}></div>
        </article>
        <article className={style.adress}>
          <h3>Address</h3>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
        </article>
      </section>
      <Map />
    </footer>
  );
};
