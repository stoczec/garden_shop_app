import React from 'react';
import './map.module.scss';
import { MAPURL } from '../../../assets/constants/URL';

const Map = () => {
  return (
    <iframe
      title="Map"
      src={MAPURL}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
export default Map;
