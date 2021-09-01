import React, { useState } from 'react';
import { Button, ButtonGroup, Text } from '../../../trunks-ui/trunks-ui';
import {
  RiSendPlane2Fill,
  RiArrowRightSLine,
  RiEyeLine,
  RiPhoneFill,
  RiDownload2Line,
  RiHeartFill,
  RiGithubFill,
  RiPlayFill,
  RiSkipForwardFill,
  RiSkipBackFill,
  RiEdit2Fill,
} from 'react-icons/ri';

export default function ButtonsPage() {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
        <h2>Buttons</h2>
          <ButtonTypes />
          <ButtonMods />
          <ButtonSizes />
          <ButtonIcons />
          <ButtonLabels />
          <ButtonShapes />
          <ButtonGroups />
          <ButtonCombos />
        </div>
      </div>
    </>
  );
}

const ButtonTypes = () => {
  return (
    <>
      <h3 className='section-header'>Types</h3>
      <Text>
        There are 5 types of icons. A <Text code>default</Text> button for
        general use, a <Text code>primary</Text> button for emphasis, a{' '}
        <Text code>dashed</Text> and <Text code>textonly</Text> button for
        secondary use, and a <Text code>link</Text> button. All buttons have a default margin of 8px.
      </Text>
      <div style={{ marginBottom: '12px' }} />
      <div className='display-container'>
        <Button>Default Button</Button>
        <Button type='primary'>Primary Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='textonly'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </div>
    </>
  );
};

const ButtonMods = () => {
  const [buttonMod, setButtonMods] = useState<
    'disabled' | 'warn' | 'danger' | undefined
  >(undefined);
  <h3 className='section-header'>Mods</h3>;
  return (
    <>
      <h3 className='section-header'>Mods</h3>
      <Text>
        There are 4 types of mods for conveying state or status. A <Text code>danger</Text> mod for
        signifying dangerous actions such as deleting something, a <Text code>warn</Text> mod for things to alert the user of, and a  
        <Text code>disabled</Text> mod to make a button inoperable and appear unusable.<br />
        <div style={{ marginBottom: '12px' }} />
        <Text secondary>Use the buttons below to change the displayed mod on the buttons.</Text>
        <div style={{ marginBottom: '12px' }} />
      </Text>
      <ButtonGroup>
        <Button onClick={() => setButtonMods(undefined)}>Default</Button>
        <Button onClick={() => setButtonMods('danger')}>Danger</Button>
        <Button onClick={() => setButtonMods('warn')}>Warn</Button>
        <Button onClick={() => setButtonMods('disabled')}>Disabled</Button>
      </ButtonGroup>
      <div className='display-container'>
        <Button type={'default'} mod={buttonMod}>
          Default Button
        </Button>
        <Button type='primary' mod={buttonMod}>
          Primary Button
        </Button>
        <Button type='dashed' mod={buttonMod}>
          Dashed Button
        </Button>
        <Button type='textonly' mod={buttonMod}>
          Text Button
        </Button>
        <Button type='link' mod={buttonMod}>
          Link Button
        </Button>
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
      <Text>
        There are 3 button sizes to choose from. A <Text code>large</Text> size, a <Text code>medium</Text> size, and a  
        <Text code>disabled</Text> size.<br />
        <div style={{ marginBottom: '12px' }} />
        <Text secondary>Use the buttons below to change the displayed size for the buttons.</Text>
        <div style={{ marginBottom: '12px' }} />
      </Text>
      <ButtonGroup>
        <Button onClick={() => setButtonSize('small')}>Small</Button>
        <Button onClick={() => setButtonSize('default')}>Default</Button>
        <Button onClick={() => setButtonSize('large')}>Large</Button>
      </ButtonGroup>
      <div className='display-container'>
        <Button size={buttonSize}>Default Button</Button>
        <Button type='primary' size={buttonSize}>
          Primary Button
        </Button>
        <Button type='dashed' size={buttonSize}>
          Dashed Button
        </Button>
        <Button type='textonly' size={buttonSize}>
          Text Button
        </Button>
        <Button type='link' size={buttonSize}>
          Link Button
        </Button>
      </div>
    </>
  );
};

const ButtonIcons = () => {
  return (
    <>
      <h3 className='section-header'>Icons</h3>
      <div className='display-container'>
        <Button iconLeft={<RiDownload2Line />}>Download</Button>
        <Button iconRight={<RiSendPlane2Fill />} type='primary'>
          Send
        </Button>
        <Button iconLeft={<RiEyeLine />} type='dashed'>
          Show / Hide
        </Button>
        <Button iconRight={<RiArrowRightSLine />} type='textonly'>
          Text Button
        </Button>
        <Button icon={<RiPhoneFill />}></Button>
      </div>
    </>
  );
};

const ButtonLabels = () => {
  return (
    <>
      <h3 className='section-header'>Labels</h3>
      <div className='display-container'>
        <Button labelLeft='.exe'>Download</Button>
        <Button labelRight='Image' type='primary'>
          Upload
        </Button>
        <Button labelRight='1.3k' icon={<RiHeartFill />}></Button>
      </div>
    </>
  );
};

const ButtonShapes = () => {
  const [shape, setShape] = useState<
    'round' | 'square' | 'squircle' | undefined
  >(undefined);
  return (
    <>
      <h3 className='section-header'>Shapes</h3>
      <ButtonGroup>
        <Button onClick={() => setShape(undefined)}>Default</Button>
        <Button onClick={() => setShape('square')}>Square</Button>
        <Button onClick={() => setShape('squircle')}>Squircle</Button>
        <Button onClick={() => setShape('round')}>Round</Button>
      </ButtonGroup>
      <div className='display-container'>
        <Button shape={shape} type='default'>
          Default Button
        </Button>
        <Button shape={shape} type='primary'>
          Primary Button
        </Button>
        <Button shape={shape} type='dashed'>
          Dashed Button
        </Button>
        <Button shape={shape} type='textonly'>
          Text Button
        </Button>
      </div>
    </>
  );
};

const ButtonGroups = () => {
  return (
    <>
      <h3 className='section-header'>Button Groups</h3>
      <div className='display-container'>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

const ButtonCombos = () => {
  return (
    <>
      <h3 className='section-header'>Combinations</h3>
      <div className='display-container'>
        <Button
          shape='square'
          type='primary'
          labelRight='3.4k'
          icon={<RiGithubFill/>}
        />
        <Button
          shape='round'
          labelLeft='v.1.0.9'
          iconRight={<RiDownload2Line />}>
          trunks-ui
        </Button>
        <div style={{ marginLeft: '8px' }} />
        <ButtonGroup>
          <Button shape='squircle' icon={<RiSkipBackFill />} />
          <Button type='primary' icon={<RiPlayFill />} />
          <Button shape='squircle' icon={<RiSkipForwardFill />} />
        </ButtonGroup>
        <div style={{ marginLeft: '8px' }} />
        <Button type='dashed' size='small' iconRight={<RiEdit2Fill />}>
          Edit
        </Button>
      </div>
    </>
  );
};
