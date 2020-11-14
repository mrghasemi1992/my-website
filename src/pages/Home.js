// @flow
import React from 'react';
import { Background, Header, MyPortrait, MySkills } from '../components';

function Home(): React$Node {
  return (
    <>
      <Header />
      <MyPortrait />
      <MySkills />
      <Background />
    </>
  );
}

export default Home;
