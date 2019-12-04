import {theme} from '../../utils/theme';
import styled from 'styled-components';

export const Titulo = styled.h2`
  color: ${theme.on};
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const Peligro = styled.h4`
  color: ${theme.danger};
  padding: 20px;
  backgroud-color: ${theme.primary};
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
