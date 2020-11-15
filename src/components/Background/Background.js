import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Line, Text } from '../kits';
import { DetailSection } from './index';
import { colors } from '../../styles';
import { myEducation, myExperience } from '../../data';
import { briefcase, mortarboard } from '../../assets/icons';

const StyledContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  background: ${colors.solitude};
`;

export default function Background() {
  return (
    <div className="mt-5">
      {/* Below Wrapper will be shown in xl screens */}
      <Wrapper className="d-none d-xl-block">
        <StyledContainer className="d-none d-xl-flex justify-content-between">
          <div id="education">
            <div className="d-flex align-items-center">
              <img src={mortarboard} alt="Mortarboard" width={50} />
              <Text className="ml-4" size="b36" color="black">
                Education
              </Text>
            </div>
            <div className="pl-3">
              {myEducation.map((item, index) => (
                <div key={index} className="py-4">
                  <DetailSection
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>
          <div id="experience">
            <div className="d-flex align-items-center">
              <img src={briefcase} alt="Briefcase" width={50} />
              <Text className="ml-4" size="b36" color="black">
                Experience
              </Text>
            </div>
            <div className="pl-3">
              {myExperience.map((item, index) => (
                <div key={index} className="py-4">
                  <DetailSection
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </StyledContainer>
      </Wrapper>

      {/* Below Wrapper will be shown in screens smaller than xl */}
      <Wrapper className="d-flex flex-column flex-md-row justify-content-md-around d-xl-none py-5">
        <div id="m_experience">
          <div className="d-flex flex-column align-items-center mb-3">
            <Text size="b18" color="black">
              Experience
            </Text>
            <Line
              type="horizontal"
              length={100}
              thickness={2}
              color="egyptianBlue"
            />
          </div>
          {myExperience.map((item, index) => (
            <React.Fragment key={index}>
              <DetailSection
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                date={item.date}
                type="simple"
              />
              {index !== myExperience.length - 1 && (
                <Line
                  type="horizontal"
                  length={250}
                  thickness={1}
                  color="periwinkleCrayola"
                  className="mx-auto my-3"
                  lineStyle="dashed"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div>
          <div
            id="m_education"
            className="d-flex flex-column align-items-center pt-5 pt-md-0 mb-3"
          >
            <Text size="b18" color="black">
              Education
            </Text>
            <Line
              type="horizontal"
              color="egyptianBlue"
              length={100}
              thickness={2}
            />
          </div>
          {myEducation.map((item, index) => (
            <React.Fragment key={index}>
              <DetailSection
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                date={item.date}
                type="simple"
              />
              {index !== myEducation.length - 1 && (
                <Line
                  type="horizontal"
                  color="periwinkleCrayola"
                  length={250}
                  lineStyle="dashed"
                  thickness={1}
                  className="mx-auto my-3"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
