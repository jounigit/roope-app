import React, { FC } from 'react';
import styled from 'styled-components';
import { BaseFooter } from '../styles/styles';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Navigation = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);
  border: 1px solid black;
`;

const Foot = styled(Navigation)`
  justify-content: flex-end;
`;

const NavItem = styled.a`
  border: 1px solid black;
  color: #cf2dcf;
  font-size: 2.8em;
  margin: 0 15px 20px 0;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;
  }
`;

const FooterNavItem = styled(NavItem)`
  border: 0;
  font-size: 12px;
  margin-bottom: 0;
  padding: 0;
`;

const Footer: FC = () => (
  <BaseFooter>
    <Foot>
      <FooterNavItem><h3>Footer Link One</h3></FooterNavItem>
      <FooterNavItem>Footer Link Two</FooterNavItem>
    </Foot>
  </BaseFooter>
);

export default Footer;
