import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  padding: 20px;
`;

export const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  margin: -5px;
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  padding: 2px 8px;
  margin: 5px;
  min-width: 100px;
  height: 30px;

  background-color: #202020;
  border-radius: 4px;

  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.61;
  color: #ffffff;
`;
