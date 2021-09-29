import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'blue',
};

const Nav: FC = () => (
  <NavUnlisted>
    <Link to="/" style={linkStyle}>
      Home
    </Link>
    <Link to="/about" style={linkStyle}>
      About
    </Link>
  </NavUnlisted>
);

export default Nav;
