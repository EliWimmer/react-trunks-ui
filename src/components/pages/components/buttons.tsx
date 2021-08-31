import React, { Props, useState } from 'react';
import './buttons.sass';
import { Button, ButtonGroup, Row } from '../../../trunks-ui/trunks-ui';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import {AiFillCaretRight} from 'react-icons/ai'

export default function Buttons() {
  const info = () => {
    console.log('click!');
  };

  return (
    <>
      <div className="buttons-page-container">
        <div className='buttons-page'>
          <h2>Buttons</h2>

          <h3 className='section-header'>Types</h3>
          <div className='display-container'>
            <Button  iconRight={<AiFillCaretRight />}  labelRight="Boobs" type='default'>Default Button</Button>
            <Button labelLeft="3242" type='primary'>Primary Button</Button>
            <Button labelLeft="Foobar" type='dashed'>Dashed Button</Button>
            <Button type='textonly'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </div>
          <ButtonMods />
          <ButtonSizes />
        </div>
        <div className="code-area">
          <CodeBlock
            text={`// TYPES
      <Button type='default'>Default Button</Button>
      <Button type='primary'>Primary Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='textonly'>Text Button</Button>
      <Button type='link'>Link Button</Button>`}
            language='jsx'
            theme={atomOneDark}
            customStyle={{ height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

const ButtonMods = () => {
  const [buttonMod, setButtonMods] = useState<"disabled" | "warn" | "danger" | undefined>(undefined);
  <h3 className='section-header'>Mods</h3>
  return (
    <>
      <h3 className='section-header'>Mods</h3>
      <ButtonGroup>
        <Button onClick={() => setButtonMods(undefined)}>Default</Button>
        <Button onClick={() => setButtonMods('danger')}>Danger</Button>
        <Button onClick={() => setButtonMods('warn')}>Warn</Button>
        <Button onClick={() => setButtonMods('disabled')}>Disabled</Button>
      </ButtonGroup>
      <div className='display-container'>
        <Button type={'default'} mod={buttonMod}>Default Button</Button>
        <Button type='primary' mod={buttonMod}>Primary Button</Button>
        <Button type='dashed' mod={buttonMod}>Dashed Button</Button>
        <Button type='textonly' mod={buttonMod}>Text Button</Button>
        <Button type='link' mod={buttonMod}>Link Button</Button>
      </div>
    </>
  );
};

const ButtonSizes = () => {
  const [buttonSize, setButtonSize] = useState<
    'small' | 'default' | 'large' | undefined
  >('default');
  return (
    <>
      <h3 className='section-header'>Sizes</h3>
      <ButtonGroup>
        <Button onClick={() => setButtonSize('small')}>Small</Button>
        <Button onClick={() => setButtonSize('default')}>Default</Button>
        <Button onClick={() => setButtonSize('large')}>Large</Button>
      </ButtonGroup>
      <div className='display-container'>
        <Button labelRight="Hello" size={buttonSize}>Default Button</Button>
        <Button type='primary' size={buttonSize}>
          Primary Button
        </Button>
        <Button type='dashed' size={buttonSize}>
          Dashed Button
        </Button>
      </div>
    </>
  );
};
