// @flow
import * as React from 'react';
import { colors, typography } from '../../styles';

type Props = {
  color: string,
  size: string,
  type: string,
  className?: string,
  children: React.Node,
};

function Text(props: Props): React.Node {
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
};

export default Text;
