import React from 'react';
import './map.module.scss';
import { MAPURL } from '../../../assets/constants/URL';

export default function Map() {
  return (
    <iframe
      title="Map"
      src={MAPURL}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
