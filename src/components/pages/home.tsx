import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button, Text } from '../../trunks-ui/trunks-ui';
import './styles/home.sass';
export default function Home() {
  return (
    <>
      <div className='home'>
        <h1 className='banner-title'>{`{ trunks-ui }`}</h1>
        <h2 className='banner-subtitle'>
          A lightweight UI framework for React. Written in TypeScript & SASS.
        </h2>
        <div className='main-buttons'>
          <Button type='primary' size='large'>
            Get Started
          </Button>
          <Button
            type='textonly'
            size='large'
            iconRight={<MdKeyboardArrowRight />}>
            Learn More
          </Button>
        </div>
        <div className="description">
        <Text>
          Trunks-UI is a project I developed during my initial learning of
          front-end development. A way to learn React, Typescript, and SASS, as
          well as their underlying fundamentals of HTML, CSS, and Javascript.
          While it is a beginner project at it's core, I inted to maintain it,
          as well as use it in projects myself as I move forward in web development.
        </Text>
        </div>
      </div>
    </>
  );
}
