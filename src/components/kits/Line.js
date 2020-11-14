// @flow
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

const HorizontalLine = styled.div`
  width: ${(props) => props.length}px;
  border-top: ${(props) => props.thickness}px ${(props) => props.lineStyle}
    ${(props) => colors[props.color]};
  ${(props) => props.radius && `border-radius: ${props.radius}px`}
`;

const VerticalLine = styled.div`
  height: ${(props) => props.length}px;
  border-right: ${(props) => props.thickness}px ${(props) => props.lineStyle}
    ${(props) => colors[props.color]};
`;

type Props = {
  className?: string,
  color: $Keys<typeof colors>,
  length: number,
  lineStyle:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset',
  radius?: number,
  thickness: number,
  type: 'vertical' | 'horizontal',
};

function Line(props: Props): React$Node {
  const { type, ...restProps } = props;

  if (type === 'vertical') {
    return <VerticalLine {...restProps} />;
  } else {
    return <HorizontalLine {...restProps} />;
  }
}

Line.defaultProps = {
  lineStyle: 'solid',
  thickness: 1,
};

export default Line;
