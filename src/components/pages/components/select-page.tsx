import React from 'react';
import { Select, Space, Text } from '../../../trunks-ui/trunks-ui';

export const SelectPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <Text size={2}>Select</Text>
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
      <Text size={3}>Basic Select</Text>
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
    </>
  );
};
