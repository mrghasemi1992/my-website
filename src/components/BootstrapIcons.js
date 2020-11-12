// @flow
import React from 'react';
import { colors } from '../styles';

type Props = {
  name: 'clipboard',
  size: number,
  color: $Keys<typeof colors>,
  className: string,
  onClick?: Function,
};

function BootstrapIcons(props: Props): React$Node {
  const { name, size, color, className, onClick } = props;

  switch (name) {
    case 'clipboard':
      return (
        <svg
          width={`${size}em`}
          height={`${size}em`}
          viewBox="0 0 16 16"
          className={`bi bi-clipboard ${className}`}
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path
            fillRule="evenodd"
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            fillRule="evenodd"
            d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
        </svg>
      );
    default:
      return null;
  }
}

BootstrapIcons.defaultProps = {
  color: 'egyptianBlue',
  size: 1,
  className: '',
};

export default BootstrapIcons;
