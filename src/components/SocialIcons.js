import React, { useRef, useState } from 'react';
import { Alert, Overlay } from 'react-bootstrap';
import styled from 'styled-components';
import { BootstrapIcons } from './';
import {
  telegramWhite,
  telegram,
  linkedinWhite,
  linkedin,
  githubWhite,
  github,
  emailWhite,
  email,
} from '../assets/icons';
import { colors } from '../styles';

const Wrapper = styled.div`
  display: ${(props) => (props.alignment === 'vertical' ? 'none' : 'flex')};
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: ${(props) =>
      props.alignment === 'vertical' ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    position: relative;
    ${(props) => props.alignment === 'vertical' && 'left: 3%;'};
  }
`;

const VR = styled.div`
  height: 20px;
  border-right: 1px solid ${colors.egyptianBlue};
  margin: 5px 10px 5px 20px;
`;

function SocialIcons(props) {
  const { alignment, color } = props;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [alert, showAlert] = useState(false);

  // const copyToClipboard = (newClip) => {
  //   navigator.clipboard.writeText(newClip).then(
  //     function () {
  //       setShow(false);
  //       showAlert(true);
  //       setTimeout(() => showAlert(false), 3000);
  //     },
  //     function () {
  //       /* clipboard write failed */
  //     }
  //   );
  // };

  return (
    <Wrapper alignment={alignment}>
      {alert && (
        <Alert
          style={{ position: 'fixed', right: '20px', top: '20px' }}
          variant="success"
        >
          Copied!
        </Alert>
      )}
      <Overlay
        target={target.current}
        show={show}
        placement={alignment === 'vertical' ? 'right' : 'bottom'}
      >
        {({
          placement,
          scheduleUpdate,
          arrowProps,
          outOfBoundaries,
          show: _show,
          ...props
        }) => (
          <div
            {...props}
            style={{
              backgroundColor: '#F1F4FB',
              padding: '2px 10px',
              color: '#1148B2',
              marginLeft: alignment === 'vertical' ? '10px' : '',
              marginTop: alignment === 'horizontal' ? '10px' : '',
              borderRadius: 3,
              ...props.style,
            }}
            className="d-flex align-items-center"
          >
            <span>mrghasemi1992@gmail.com</span>
            <VR />
            {/*<svg*/}
            {/*  className="bi bi-clipboard pointer"*/}
            {/*  width="1em"*/}
            {/*  height="1em"*/}
            {/*  viewBox="0 0 16 16"*/}
            {/*  fill="currentColor"*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*  onClick={() => copyToClipboard('mrghasemi1992@gmail.com')}*/}
            {/*>*/}
            {/*  <path*/}
            {/*    fillRule="evenodd"*/}
            {/*    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"*/}
            {/*  />*/}
            {/*  <path*/}
            {/*    fillRule="evenodd"*/}
            {/*    d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"*/}
            {/*  />*/}
            {/*</svg>*/}
            {/*<BootstrapIcons  />*/}
          </div>
        )}
      </Overlay>
      <div className={alignment === 'vertical' ? 'py-2' : ''}>
        <img
          onClick={() => setShow(!show)}
          ref={target}
          className="pointer"
          src={color === 'white' ? emailWhite : email}
          alt="Email"
          width={25}
        />
      </div>
      <div className={alignment === 'horizontal' ? 'px-4' : 'py-2'}>
        <a href="https://www.linkedin.com/in/mrghasemi1992/">
          <img
            className="pointer"
            src={color === 'white' ? linkedinWhite : linkedin}
            alt="Linkedin"
            width={25}
          />
        </a>
      </div>
      <div className={alignment === 'vertical' ? 'py-2' : ''}>
        <a href="https://t.me/mrghasemi1992">
          <img
            className="pointer"
            src={color === 'white' ? telegramWhite : telegram}
            alt="Telegram"
            width={25}
          />
        </a>
      </div>
      <div className={alignment === 'horizontal' ? 'pl-4' : 'py-2'}>
        <a href="https://github.com/mrghasemi1992">
          <img
            className="pointer"
            src={color === 'white' ? githubWhite : github}
            alt="GitHub"
            width={25}
          />
        </a>
      </div>
    </Wrapper>
  );
}

export default SocialIcons;
