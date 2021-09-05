import React from 'react';
import { Space, Checkbox } from '../../../trunks-ui/trunks-ui';
import { FaGamepad, FaGhost, FaGuitar, FaHamburger } from 'react-icons/fa';

export const CheckboxPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Checkboxes</h2>
          <CheckboxLabelTypes />
          <CheckboxTypes />
          <TileCheckbox />
        </div>
      </div>
    </>
  );
};

const CheckboxLabelTypes = () => {
  return (
    <>
      <h3 className='section-header'>Label Type</h3>
      <div className='display-container'>
        <Space wrap>
          <Checkbox>Default</Checkbox>
          <Checkbox defaultState={true} labelType='strike'>
            Strike
          </Checkbox>
          <Checkbox defaultState={true} labelType='faded'>
            Faded
          </Checkbox>
          <Checkbox defaultState={true} labelType='strikefaded'>
            Strike and Faded
          </Checkbox>
        </Space>
      </div>
    </>
  );
};

const CheckboxTypes = () => {
  const handleClick = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <h3 className='section-header'>Switch</h3>
      <div className='display-container'>
        <Space wrap>
          <Checkbox defaultState={false} type='switch'>
            Default Size Switch
          </Checkbox>
          <Checkbox size='small' type='switch'>
            Small Size Switch
          </Checkbox>
        </Space>
      </div>
    </>
  );
};

const TileCheckbox = () => {
  return (
    <>
      <h3 className='section-header'>Icon Tile Chekcboxes</h3>
        <div className='display-container'>
        <Space wrap>
          <Checkbox type='tile' icon={<FaGamepad size='2em' />} />
          <Checkbox type='tile' icon={<FaGuitar size='2em' />} />
          <Checkbox size="small" type='tile' icon={<FaGhost size='2em' />} />
          <Checkbox size="small" type='tile' icon={<FaHamburger size='2em' />} />
          </Space>
        </div>
      
    </>
  );
};
