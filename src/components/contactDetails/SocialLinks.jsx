import React from 'react';
import styled from 'styled-components';
import social_networks from '../../data/socialNetworks';

const SocialLinks = () => {
  return (
    <Container>
      {social_networks.map(({ id, name, logo, src }) => {
        return (
          <Link key={id} href={src} target="_blank" rel="noreferrer noopener">
            <Logo src={logo} alt={name} />
            <span>{name}</span>
          </Link>
        );
      })}
    </Container>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_15 = (props) => props.theme.font_size.fs_15;
const clr_black = (props) => props.theme.colors.clr_black;
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.article`
  display: flex;
  gap: clamp(0.4rem, 3vw, 4rem);
`;
const Logo = styled.img`
  margin-bottom: 8px;
  transition: all 0.5s ease-in-out;
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${clr_black};
  font-size: ${fs_15};
  &:hover ${Logo} {
    transform: scale(1.2);
  }
`;

export default SocialLinks;
