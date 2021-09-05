import React from 'react';
import { Select, Space } from '../../../trunks-ui/trunks-ui';

export const SelectPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Select</h2>
          <SelectTypes />
        </div>
      </div>
    </>
  );
};

const SelectTypes = () => {

  const handleChange = (selected:any) => {
    console.log(selected)
  }

  return (
    <>
      <h3 className='section-header'>Types</h3>
      <Space inline />
      <div className='display-container'>
        <Space wrap>
          <Select
          onChange={handleChange}
            options={[
              { value: 'pizza', label: 'Pizza' },
              { value: 'broccoli', label: 'Broccoli' },
              { value: 'apple', label: 'Apple' },
              { value: 'cheese', label: 'Cheese' },
              { value: 'noodles', label: 'Noodles' },
              { value: 'hotdog', label: 'Hot Dog' },
              { value: 'burrito', label: 'Burrito' },
              { value: 'egg', label: 'Egg' },
              { value: 'milk', label: 'Milk' },
              { value: 'potato', label: 'Potato' },
              { value: 'crepe', label: 'Crepe' },
            ]}
            placeholder='Choose...'></Select>
        </Space>
      </div>
    </>
  );
};
