import React from 'react';
import style from './contact.module.scss';
import SocialLinks from '../SocialLinks/SocialLinks';
import contacts_data from '../../../data/contacts';

const Contact = () => {
  return (
    <article className={style.contact}>
      <h3>Contact</h3>
      <p>{contacts_data.tel}</p>
      <SocialLinks />
    </article>
  );
};
export default Contact;
