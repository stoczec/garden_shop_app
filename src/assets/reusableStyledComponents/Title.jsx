import { styled } from 'styled-components';

// SCC ========== STYLED COMPONENTS ========== //
const Title = styled.h2`
  /* ${(props) => props.theme.mixins.container}; */
  color: ${(props) => props.theme.colors.clr_black};
  font-size: ${(props) => props.theme.font_size.fs_40};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 1.2px;
`;
export default Title;
