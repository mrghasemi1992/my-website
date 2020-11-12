// @flow
import React from 'react';
import { colors, typography } from '../../styles';

type Props = {
  color: $Keys<typeof colors>,
  size: $Keys<typeof typography>,
  type: string,
  children: string,
  className: string,
};

function Text(props: Props): React$Node {
  const { type, children, size, color, className } = props;

  return React.createElement(
    type,
    {
      className,
      style: {
        color: colors[color],
        fontSize: typography[size].fontSize,
        fontWeight: typography[size].fontWeight,
      },
    },
    children
  );
}

Text.defaultProps = {
  type: 'div',
  color: 'black',
  size: 'rg14',
};

export default Text;
