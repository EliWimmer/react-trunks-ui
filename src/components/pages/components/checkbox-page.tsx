import React from 'react';
import { Space, Checkbox } from '../../../trunks-ui/trunks-ui';

export const CheckboxPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Title</h2>
          <CheckboxTypes />
        </div>
      </div>
    </>
  );
};

const CheckboxTypes = () => {
  return (
    <>
      <h3 className='section-header'>Subtitle</h3>
      <Space inline />
      <div className='display-container'>
       <Checkbox>Boobs</Checkbox>
      </div>
    </>
  );
};
