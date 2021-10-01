import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import {
//   BrowserRouter as Router, Switch, Route, NavLink, Redirect,
// } from 'react-router-dom';

interface INav {
  open: boolean;
  href?: string;
}

const Ul = styled.ul<INav>`
  list-style: none;
  min-width: 200px;
  max-width: 400px;
  flex-basis: auto; /* default value */
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  width: 45em;

  li {
    padding: 18px 10px;
  background-color: #dd48eb;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

type Props = {
  open: boolean;
}

const RightNav: FC<Props> = ({ open }) => (
  <Ul open={open}>
    <li>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: 'bold',
          color: '#0DADEA',
        }}
      >
        Home
      </NavLink>
    </li>
    <NavLink
      to="/about"
      activeStyle={{
        fontWeight: 'bold',
        color: '#0DADEA',
      }}
    >
      <li>About Us</li>
    </NavLink>
    <li>More</li>
  </Ul>
);

export default RightNav;
