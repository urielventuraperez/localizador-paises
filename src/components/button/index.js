import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Button = styled.button`
  background: ${props => props.primary ? theme.principal : theme.secondary};
  color: ${props => props.primary ? theme.light : theme.on};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: ${theme.light};
    color: ${theme.secondary};
    cursor:pointer;
  }
`;
