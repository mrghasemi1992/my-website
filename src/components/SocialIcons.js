import React from 'react';
import styled from 'styled-components';
import { email, github, linkedin, telegram } from '../assets/icons';

const IconsWrapper = styled.div`
  height: 140px;
`;

function SocialIcons() {
  return (
    <IconsWrapper className="d-flex flex-column justify-content-between">
      <img className="pointer" src={email} alt="Email" width={25} />
      <a href="https://www.linkedin.com/in/mrghasemi1992/">
        <img className="pointer" src={linkedin} alt="Linkedin" width={25} />
      </a>
      <a href="https://t.me/mrghasemi1992">
        <img className="pointer" src={telegram} alt="Telegram" width={25} />
      </a>
      <a href="https://github.com/mrghasemi1992">
        <img className="pointer" src={github} alt="GitHub" width={25} />
      </a>
    </IconsWrapper>
  );
}

export default SocialIcons;
