import React from 'react';
import { Select, Space } from '../../../trunks-ui/trunks-ui';

export const SelectPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Buttons</h2>
          <SelectTypes />
        </div>
      </div>
    </>
  );
};

const SelectTypes = () => {
  return (
    <>
      <h3 className='section-header'>Types</h3>
      <Space inline />
      <div className='display-container'>
        <Space wrap>
          <Select
            options={[
              { value: 'boobs', label: 'Boobs' },
              { value: 'more boobs', label: 'moree boobs' },
            ]}
            placeholder='Choose...'></Select>
        </Space>
      </div>
    </>
  );
};
