import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 30px;
  background-color: #f5f7fa;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const LinkStyled = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  margin-right: 30px;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
