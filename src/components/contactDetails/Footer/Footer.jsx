import React from 'react';
import style from './footer.module.scss';
import { Map } from '../Map/Map';
import { Contact } from '../Contact/Contact';
import { Adress } from '../Adress/Adress';

export const Footer = () => {
  return (
    <footer>
      <section className={style.contact_info}>
        <Contact />
        <Adress />
      </section>
      <Map />
    </footer>
  );
};
