// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { mySkills } from '../data';
import { Line, Pill, Text } from './kits';

const Wrapper = styled.div`
  @media (min-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const StyledContainer = styled(Container)`
  @media (min-width: 1200px) {
    margin-top: 75px;
  }
  @media (min-width: 992px) {
    max-height: 400px;
  }
  @media (min-width: 768px) and (max-width: 991.9px) {
    max-height: 500px;
  }
`;

function MySkills(): React$Node {
  return (
    <Wrapper id="skills">
      <Text className="d-none d-xl-block text-center" size="b36" color="black">
        My Skills
      </Text>
      <Text className="d-xl-none text-center mt-5" size="b24" color="black">
        My Skills
      </Text>
      <Line
        type="horizontal"
        color="egyptianBlue"
        length={200}
        thickness={5}
        className="d-none d-xl-block mx-auto"
        radius={15}
      />
      <Line
        type="horizontal"
        color="egyptianBlue"
        length={125}
        thickness={2}
        className="d-xl-none mb-4 mx-auto"
      />
      <StyledContainer className="d-flex flex-xl-column flex-wrap justify-content-center align-items-center align-items-stretch align-content-around">
        {mySkills.map((skill, index) => (
          <React.Fragment key={index}>
            <Text className="d-none d-xl-block py-2" size="sb24" color="black">
              {skill}
            </Text>
            <Pill className="d-xl-none m-1">
              <Text size="lg14">{skill}</Text>
            </Pill>
          </React.Fragment>
        ))}
      </StyledContainer>
    </Wrapper>
  );
}

export default MySkills;
