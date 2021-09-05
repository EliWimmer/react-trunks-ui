import React from 'react';
import { Space, Text, Input } from '../../../trunks-ui/trunks-ui';

export const InputPage = () => {
  return (
    <>

          <Text size={2}>Input</Text>
          <InputBasic />
    </>
  );
};

const InputBasic = () => {
  return (
    <>
      <Text size={3}>Basic Input</Text>
      <Space inline />
       <Input />
    </>
  );
};