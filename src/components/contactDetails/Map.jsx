import React from 'react';
import styled from 'styled-components';
import { MAPURL } from '../../assets/constants/URL';

const Map = () => {
  return (
    <MapContainer
      title="Map"
      src={MAPURL}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></MapContainer>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const MapContainer = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
`;
export default Map;
