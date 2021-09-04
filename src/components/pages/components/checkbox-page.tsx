import React from 'react';
import { Space, Checkbox } from '../../../trunks-ui/trunks-ui';

export const CheckboxPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Checkboxes</h2>
          <CheckboxLabelTypes />
          <CheckboxTypes />
        </div>
      </div>
    </>
  );
};

const CheckboxLabelTypes = () => {
  return (
    <>
      <h3 className='section-header'>Label Type</h3>
      <Space inline />
      <div className='display-container'>
        <Space>
          {/* <Checkbox>Default</Checkbox>
          <Checkbox defaultState={true} labelType="strike">Strike</Checkbox>
          <Checkbox defaultState={true} labelType="faded">Faded</Checkbox>
          <Checkbox defaultState={true} labelType="strikefaded">Strike and Faded</Checkbox> */}
        </Space>
      </div>
    </>
  );
};

const CheckboxTypes = () => {

  const handleClick = (e:any) => {
    console.log(e)
  }

  return (
    <>
      <h3 className='section-header'>Types</h3>
      <Space inline />
      <div className='display-container'>
        <Space>
          <Checkbox onClick={handleClick}>Default Checkbox</Checkbox>
          <Checkbox defaultState={false} type="switch">Default Size Switch</Checkbox>
          <Checkbox size="small" type="switch">Small Size Switch</Checkbox>
        </Space>
      </div>
    </>
  );
};
