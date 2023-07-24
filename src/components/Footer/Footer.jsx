import React from 'react';
import style from './footer.module.scss';
import Map from '../contactDetails/Map/Map';
import Contact from '../contactDetails/Contact/Contact';
import Adress from '../contactDetails/Adress/Adress';

const Footer = () => {
  return (
    <footer className={style.container}>
      <section className={style.contact_info}>
        <Contact />
        <Adress />
      </section>
      <Map />
    </footer>
  );
};
export default Footer;
