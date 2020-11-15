// @flow
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { logoBlack } from '../assets/images';
import { handleScroll } from '../utils';
import { Text } from './kits';
import { colors } from '../styles';

const MyPortrait = styled.img`
  margin-right: 250px;
`;

const Logo = styled.img`
  margin-left: -10px;
`;

const StyledText = styled(Text)`
  &:hover {
    color: ${colors.egyptianBlue} !important;
    text-decoration: ${colors.egyptianBlue} underline;
  }
`;

function Header(): React$Node {
  return (
    <>
      {/* Below Wrapper will be shown for lg screen */}
      <div className="d-none d-lg-flex align-items-center justify-content-center py-5">
        <MyPortrait src={logoBlack} alt="Logo" width={100} />
        <div className="d-flex">
          <StyledText
            size="b24"
            color="black"
            className="pointer"
            onClick={() => handleScroll('#skills')}
          >
            Skills
          </StyledText>
          <StyledText
            className="mx-5 pointer"
            onClick={() => handleScroll('#education')}
            size="b24"
            color="black"
          >
            Education
          </StyledText>
          <StyledText
            className="pointer"
            onClick={() => handleScroll('#experience')}
            size="b24"
            color="black"
          >
            Experience
          </StyledText>
        </div>
      </div>

      {/* Below Navbar will be shown for screens are smaller than lg */}
      <Navbar
        className="d-lg-none"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Navbar.Brand>
          <Logo src={logoBlack} alt="Logo" width={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleScroll('#skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleScroll('#m_education')}>
              Education
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll('#m_experience')}>
              Experience
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
