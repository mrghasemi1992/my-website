// @flow
import React from 'react';
import { colors } from '../../styles';

type Props = {
  backgroundColor: $Keys<typeof colors>,
  children: React$Node,
  padding: string,
  radius: number,
  type: string,
};

function Pill(props: Props): React$Node {
  const {
    backgroundColor,
    children,
    padding,
    radius,
    type,
    ...restProps
  } = props;

  return React.createElement(type, {
    ...restProps,
    style: {
      backgroundColor: colors[backgroundColor],
      borderRadius: `${radius}px`,
      padding,
    },
    children,
  });
}

Pill.defaultProps = {
  backgroundColor: 'lavender',
  children: '',
  padding: '2.5px 10px',
  radius: 15,
  type: 'span',
};

export default Pill;
