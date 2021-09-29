import React, { FC } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';

// eslint-disable-next-line max-len
// const logoUrl = 'https://uploads.codesandbox.io/uploads/user/f3be4b7d-3b2d-48c0-8cf3-850cd2336494/ptAW-logo.png';

const HeaderWrapper = styled.header`
  background-color: hsl(234, 30%, 97%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  // color: rgba(255, 255, 255, 0.75);
  padding: 0.5em;
`;

const Header: FC = () => (
  <HeaderWrapper>
    <Nav />
  </HeaderWrapper>
);

/* --- */

export default Header;
