import React from 'react';
import style from './contact.module.scss';
import { social_networks } from '../../../data/socialNetworks';

const Contact = () => {
  return (
    <article className={style.contact}>
      <h3>Contact</h3>
      <p>+49 999 999 99 99</p>
      <div className={style.social_links}>
        {social_networks.map(({ id, name, logo, src }) => {
          return (
            <a key={id} href={src} target="_blank" rel="noreferrer noopener">
              <img src={logo} alt={name} />
              <span>{name}</span>
            </a>
          );
        })}
      </div>
    </article>
  );
};
export default Contact;
