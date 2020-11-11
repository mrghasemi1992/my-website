import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { SocialIcons } from './';
import { Text } from './kits';
import { myPortrait } from '../assets/images';
import { colors } from '../styles';

const Background = styled.div`
  background-color: ${colors.solitude};
`;

const Wrapper = styled.div`
  padding: 100px 0;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid ${colors.lavender};
`;

const Description = styled(Text)`
  max-width: 800px;
`;

export default function MyPortrait() {
  return (
    <Background>
      <Wrapper className="d-none d-lg-flex w-100">
        <SocialIcons alignment="vertical" />
        <div className="d-none d-lg-flex flex-column justify-content-center align-items-center">
          <Avatar
            src={myPortrait}
            alt="Portrait of Mohammad Reza Ghasemi"
            width={200}
          />
          <Text className="text-center pt-4" size="b24" color="black">
            Hi, I am
          </Text>
          <Text className="text-center" size="b36" color="black">
            Mohammad Reza Ghasemi
          </Text>
          <Text className="text-center" size="b24" color="black">
            Front-End Web Developer
          </Text>
          <Description className="text-center pt-4" size="rg18" color="black">
            I was interested in the computer, since childhood. My major was
            Industrial Engineering. I worked in this field for four years.
            Because of my interest in development, I decided to leave my carrier
            and be a professional web developer. I'm also interested in AI and
            Blockchain.
          </Description>
        </div>
      </Wrapper>
      <Container className="d-flex d-lg-none flex-column justify-content-center align-items-center py-5">
        <Avatar
          src={myPortrait}
          alt="Portrait of Mohammad Reza Ghasemi"
          width={115}
        />
        <Text className="text-center pt-4" size="sb15" color="black">
          Hi, I am
        </Text>
        <Text className="text-center" size="b18" color="black">
          Mohammad Reza Ghasemi
        </Text>
        <Text className="text-center" size="sb15" color="black">
          Front-End Web Developer
        </Text>
        <Text className="text-center pt-4" size="sb15" color="black">
          I was interested in the computer, since childhood. My major was
          Industrial Engineering. I worked in this field for four years. Because
          of my interest in development, I decided to leave my carrier and be a
          professional web developer. I'm also interested in AI and Blockchain.
        </Text>
      </Container>
    </Background>
  );
}
