import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || theme.principal};
  background: ${theme.secondary};
  border: none;
  border-radius: 3px;
`;
