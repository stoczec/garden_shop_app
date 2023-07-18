import React from 'react';
import style from './footer.module.scss';
import { Map } from '../Map/Map';
import { social_networks } from '../../data/socialNetworks';

export const Footer = () => {
  return (
    <footer>
      <section className={style.contact_info}>
        <article className={style.contact}>
          <h3>Contact</h3>
          <p>+49 999 999 99 99</p>
          <div className={style.social_links}>
            {social_networks.map(({ id, name, logo, src }) => {
              return (
                <a key={id} href={src} target="_blank">
                  <img src={logo} alt={name} />
                  <span>{name}</span>
                </a>
              );
            })}
          </div>
        </article>
        <article className={style.adress}>
          <h3>Address</h3>
          <a href="https://goo.gl/maps/6H2ts6D8QQnboeYcA" target="_blank">
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <h6>Working Hours:</h6>
          <span>24 hours a day</span>
        </article>
      </section>
      <Map />
    </footer>
  );
};
