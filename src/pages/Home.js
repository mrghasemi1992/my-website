// @flow
import React from 'react';
import {
  Background,
  Footer,
  Header,
  MyPortrait,
  MySkills,
} from '../components';

function Home(): React$Node {
  return (
    <>
      <Header />
      <MyPortrait />
      <MySkills />
      <Background />
      <Footer />
    </>
  );
}

export default Home;
