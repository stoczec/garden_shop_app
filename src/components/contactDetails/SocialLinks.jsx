import React from 'react';
import styled from 'styled-components';
import social_networks from '../../data/socialNetworks';

const SocialLinks = ({ margin }) => {
  return (
    <Container $margin={margin}>
      {social_networks.map(({ id, name, logo, src }) => {
        return (
          <Link key={id} href={src} target="_blank" rel="noreferrer noopener">
            <Logo src={logo} alt={name} />
            <Name $margin={margin}>{name}</Name>
          </Link>
        );
      })}
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.article`
  display: flex;
  gap: clamp(0.4rem, 3vw, 4rem);
  margin-top: ${(props) => (props.$margin ? 'auto' : 0)};
  margin-bottom: ${(props) => (props.$margin ? '50px' : 0)};

  @media (max-width: 650px) {
    width: 100%;
    display: ${(props) => (props.$margin ? 'grid' : 'flex')};
    grid-template-columns: repeat(
      auto-fit,
      clamp(4.38rem, calc(2.56rem + 9.09vw), 6.25rem)
    );
    justify-content: center;
  }
`;
const Logo = styled.img`
  margin-bottom: 8px;
  transition: all 0.5s ease-in-out;
`;
const Name = styled.span`
  color: ${(props) =>
    props.$margin ? '#3b3b3b' : props.theme.colors.clr_black};
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.clr_black};
  font-size: ${(props) => props.theme.font_size.fs_15};
  &:hover ${Logo} {
    transform: scale(1.2);
  }
`;

export default SocialLinks;
