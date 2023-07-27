import React from 'react';
import style from './socialLinks.module.scss';
import social_networks from '../../../data/socialNetworks';

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
