import React from 'react';
import PropTypes from 'prop-types';
import { colors, typography } from '../../styles';

function Text(props) {
  const { type, children, size, color, ...restProps } = props;

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

Text.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Text.defaultProps = {
  type: 'div',
};

export default Text;
