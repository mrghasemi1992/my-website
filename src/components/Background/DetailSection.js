// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Text } from '../kits';
import { colors } from '../../styles';

type Props = {
  date: string,
  subTitle: string,
  title: string,
  type: 'simple' | 'stylish',
};

const Pin = styled.div`
  top: 5px;
`;

const Circle = styled.div`
  border: 1px solid ${colors.egyptianBlue};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const FilledCircle = styled.div`
  background: ${colors.egyptianBlue};
  width: 9px;
  height: 9px;
  border-radius: 50%;
  left: 3px;
  top: 3px;
`;

const Line = styled.div`
  border-left: 1px solid ${colors.egyptianBlue};
  height: 85%;
  top: 15px;
  left: 7px;
`;

const TextsWrapper = styled.div`
  max-width: 350px;
`;

function DetailSection(props: Props): React$Node {
  const { date, subTitle, title, type } = props;

  return (
    <>
      {type === 'stylish' ? (
        <div className="d-flex">
          <Pin className="position-relative">
            <Circle />
            <FilledCircle className="position-absolute" />
            <Line className="position-absolute" />
          </Pin>
          <TextsWrapper className="px-3">
            <Text size="b18" color="black">
              {title}
            </Text>
            <Text size="sb15" color="black">
              {subTitle}
            </Text>
            <Text size="lg14" color="black">
              {date}
            </Text>
          </TextsWrapper>
        </div>
      ) : (
        <Container className="text-center">
          <Text size="sb15" color="black">
            {title}
          </Text>
          <Text size="lg14" color="black">
            {subTitle}
          </Text>
          <Text size="lg14" color="black">
            {date}
          </Text>
        </Container>
      )}
    </>
  );
}

DetailSection.defaultProps = {
  type: 'stylish',
};

export default DetailSection;
