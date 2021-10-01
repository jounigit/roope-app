import React, { FC } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  float: left;
  border-bottom: 2px solid #e46868;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #607bc4;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar: FC = () => (
  <>
    <Nav>
      {/* <div className="logo">
        Nav Bar
      </div> */}
      <Burger />
    </Nav>
  </>
);

export default Navbar;
