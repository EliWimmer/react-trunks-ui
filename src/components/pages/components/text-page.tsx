import React from 'react';
import { Space, Text } from '../../../trunks-ui/trunks-ui';

export const TextPage = () => {
  return (
    <>

          <Text size={2}>Text</Text>
          <TextHeaders />
          <TextTypes />
    </>
  );
};

const TextHeaders = () => {
  return (
    <>
      <Text size={3}>Headers</Text>
      <div className='display-container'>
       <Text secondary size={1}> h1. Header </Text>
       <Text secondary size={2}> h2. Header </Text>
       <Text secondary size={3}> h3. Header </Text>
       <Text secondary size={4}> h4. Header </Text>
       <Text secondary size={5}> h5. Header </Text>
      </div>
    </>
  );
};

const TextTypes = () => {
    return (
      <>
        <Text size={3}>Types</Text>
        <Space direction="horizontal">
        <Space direction="vertical" size="none">
            <Text>Default</Text>
            <Text secondary>Secondary</Text>
            <Text success>Success</Text>
            <Text warning>Warning</Text>
            <Text danger>Danger</Text>
            <Text disabled>Disabled</Text>
            <Text highlight>Highlight</Text>
            </Space>
            <Space direction="vertical" size="none">
            <Text code>Code</Text>
            <Text keyboard>Keyboard</Text>
            <Text underline>Underline</Text>
            <Text strike>Strike</Text>
            <Text bold>Bold</Text>
            <Text italic>Italic</Text>
            <Text link>Link</Text>
            </Space>
            </Space>
      </>
    );
  };