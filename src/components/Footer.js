import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { colors } from '../styles';
import { logoWhite } from '../assets/images';
import { Text } from './kits';
import SocialIcons from './SocialIcons';

const Wrapper = styled.div`
  background: ${colors.egyptianBlue};
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container className="d-flex flex-column align-items-center py-5">
        <img
          className="d-none d-md-inline"
          color="white"
          src={logoWhite}
          alt="Logo"
          width={100}
        />
        <img
          className="d-md-none"
          color="white"
          src={logoWhite}
          alt="Logo"
          width={100}
        />
        <Text className="pt-5 pb-3 d-none d-md-block" size="b24" color="white">
          Mohammad Reza Ghasemi
        </Text>
        <Text className="pt-5 pb-3 d-md-none" size="b18" color="white">
          Mohammad Reza Ghasemi
        </Text>
        <SocialIcons color="white" direction="horizontal" />
      </Container>
    </Wrapper>
  );
}
