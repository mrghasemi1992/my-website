// @flow
import React from 'react';
import { colors, typography } from '../../styles';

type Props = {
  children: string,
  color: $Keys<typeof colors>,
  size: $Keys<typeof typography>,
  type: string,
};

function Text(props: Props): React$Node {
  const { children, color, size, type, ...restProps } = props;

  return React.createElement(
    type,
    {
      ...restProps,
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
  color: 'black',
  size: 'rg14',
  type: 'div',
};

export default Text;
