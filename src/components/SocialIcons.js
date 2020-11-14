// @flow
import React from 'react';
import styled from 'styled-components';
import {
  email,
  emailWhite,
  github,
  githubWhite,
  linkedin,
  linkedinWhite,
  telegram,
  telegramWhite,
} from '../assets/icons';

const IconsWrapper = styled.div`
  ${(props) =>
    props.direction === 'vertical' ? 'height: 145px' : 'width: 160px'}
`;

type Props = {
  color: 'egyptianBlue' | 'white',
  direction: 'horizontal' | 'vertical',
};

function SocialIcons(props: Props): React$Node {
  const { color, direction } = props;

  return (
    <IconsWrapper
      direction={direction}
      className={`d-flex ${
        direction === 'vertical' && 'flex-column'
      } justify-content-between align-items-center`}
    >
      <a href="mailto: mrghasemi1992@gmail.com">
        <img
          className="pointer"
          src={color === 'egyptianBlue' ? email : emailWhite}
          alt="Email"
          width={25}
        />
      </a>
      <a href="https://www.linkedin.com/in/mrghasemi1992/">
        <img
          className="pointer"
          src={color === 'egyptianBlue' ? linkedin : linkedinWhite}
          alt="Linkedin"
          width={25}
        />
      </a>
      <a href="https://t.me/mrghasemi1992">
        <img
          className="pointer"
          src={color === 'egyptianBlue' ? telegram : telegramWhite}
          alt="Telegram"
          width={25}
        />
      </a>
      <a href="https://github.com/mrghasemi1992">
        <img
          className="pointer"
          src={color === 'egyptianBlue' ? github : githubWhite}
          alt="GitHub"
          width={25}
        />
      </a>
    </IconsWrapper>
  );
}

export default SocialIcons;
