import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          2022 Reduction theme, source on <SourceLink>iTeen</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
