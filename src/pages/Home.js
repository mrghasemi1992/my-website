// @flow
import React from 'react';
import { Header, MyPortrait, MySkills } from '../components';

function Home(): React$Node {
  return (
    <>
      <Header />
      <MyPortrait />
      <MySkills />
    </>
  );
}

export default Home;
