import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Text,
  TextBlock,
  Space,
  Divider,
} from '../../../trunks-ui/trunks-ui';
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
      <Text size={2}>Buttons</Text>
      <TextBlock>
        Buttons are most often triggers for actions, or to bring emphasis to
        links. With thousands of possible combinations, trunks-ui offers a
        button for every use case.
      </TextBlock>
      <Space size="small" inline />
      <Divider />
      <ButtonTypes />
      <Divider />
      <ButtonMods />
      <Divider />
      <ButtonSizes />
      <Divider />
      <ButtonFill />
      <Divider />
      <ButtonIcons />
      <Divider />
      <ButtonLabels />
      <Divider />
      <ButtonShapes />
      <Divider />
      <ButtonGroups />
      <Divider />
      <ButtonCombos />
    </>
  );
}

const ButtonTypes = () => {
  return (
    <>
      <Text size={3}>Types</Text>
      <TextBlock>
        There are 5 types of icons. A <Text code>default</Text> button for
        general use, a <Text code>primary</Text> button for emphasis, a{' '}
        <Text code>dashed</Text> and <Text code>textonly</Text> button for
        secondary use, and a <Text code>link</Text> button. All buttons have a
        default margin of 8px.
      </TextBlock>
      <Space inline />
      <Space wrap>
        <Button>Default Button</Button>
        <Button type='primary'>Primary Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='textonly'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Space>
      <Space inline />
    </>
  );
};

const ButtonMods = () => {
  const [buttonMod, setButtonMods] = useState<
    'disabled' | 'warn' | 'danger' | undefined
  >(undefined);
  return (
    <>
      <Text size={3}>Mods</Text>
      <TextBlock>
        There are 4 types of mods for conveying state or status. A{' '}
        <Text code>danger</Text> mod for signifying dangerous actions such as
        deleting something, a <Text code>warn</Text> mod for things to alert the
        user of, and a<Text code>disabled</Text> mod to make a button inoperable
        and appear unusable.
        <br />
        <Space size='small' inline />
        <Text secondary>Change mod:</Text>
      </TextBlock>
      <ButtonGroup>
        <Button type='textonly' onClick={() => setButtonMods(undefined)}>
          Default
        </Button>
        <Button type='textonly' onClick={() => setButtonMods('danger')}>
          Danger
        </Button>
        <Button type='textonly' onClick={() => setButtonMods('warn')}>
          Warn
        </Button>
        <Button type='textonly' onClick={() => setButtonMods('disabled')}>
          Disabled
        </Button>
      </ButtonGroup>
      <Space inline />
      <Space wrap>
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
      </Space>
      <Space inline />
    </>
  );
};

const ButtonSizes = () => {
  const [buttonSize, setButtonSize] = useState<
    'small' | 'default' | 'large' | undefined
  >('default');
  return (
    <>
      <Text size={3}>Sizes</Text>
      <TextBlock>
        There are 3 button sizes to choose from. A <Text code>large</Text> size,
        a <Text code>default</Text> size, and a <Text code>small</Text> size. If
        needing bigger buttons or buttons with a lot more context and data,
        consider using <Text link>Cards</Text>.
        <Space size='small' inline />
        <Text secondary>Change size:</Text>
      </TextBlock>
      <ButtonGroup>
        <Button type='textonly' onClick={() => setButtonSize('small')}>
          Small
        </Button>
        <Button type='textonly' onClick={() => setButtonSize('default')}>
          Default
        </Button>
        <Button type='textonly' onClick={() => setButtonSize('large')}>
          Large
        </Button>
      </ButtonGroup>
      <Space inline />
      <Space wrap>
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
      </Space>
      <Space inline />
    </>
  );
};

const ButtonFill = () => {
  return (
    <>
      <Text size={3}>Fill</Text>
      <TextBlock>
        Buttons can have the boolean attribute <Text code>fill</Text> to fit the
        width of their parent container.
      </TextBlock>
      <Space inline />
      <Space wrap>
        <Button fill>Default Button</Button>
        <Button fill type='primary'>
          Primary Button
        </Button>
        <Button fill type='textonly'>
          Text Button
        </Button>
      </Space>
      <Space inline />
    </>
  );
};

const ButtonIcons = () => {
  return (
    <>
      <Text size={3}>Icons</Text>
      <TextBlock>
        Buttons can have icons. Use <Text code>iconLeft</Text> or{' '}
        <Text code>iconRight</Text> for buttons with text, or use just{' '}
        <Text code>icon</Text> for icon only buttons. Icons work on all types,
        shapes, and sizes.
      </TextBlock>
      <Space inline />
      <Space wrap>
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
      </Space>
      <Space inline />
    </>
  );
};

const ButtonLabels = () => {
  return (
    <>
      <Text size={3}>Labels</Text>
      <TextBlock>
        Buttons can have lebels for added context. Use{' '}
        <Text code>labelLeft</Text> or <Text code>labelRight</Text> to add a
        label. Labels can take a string or an icon component. Labels work on all
        types, shapes, and sizes, though they do not work on button groups.
        <br />
      </TextBlock>
      <Space inline />
      <Space wrap>
        <Button labelLeft={'.exe'}>Download</Button>
        <Button labelRight='Image' type='primary'>
          Upload
        </Button>
        <Button labelRight='1.3k' icon={<RiHeartFill />}></Button>
      </Space>
      <Space inline />
    </>
  );
};

const ButtonShapes = () => {
  const [shape, setShape] = useState<
    'round' | 'square' | 'squircle' | undefined
  >(undefined);
  return (
    <>
      <Text size={3}>Shapes</Text>
      <TextBlock>
        There are 4 button shapes to choose from. The <Text code>default</Text>{' '}
        shaped, a <Text code>square</Text> shape, a <Text code>squircle</Text>{' '}
        shape, and a <Text code>round</Text> shape. Shapes work on all types and
        sizes, as well as buttons with labels and button groups.
        <Space size='small' inline />
        <Text secondary>Change shape:</Text>
      </TextBlock>
      <ButtonGroup>
        <Button type='textonly' onClick={() => setShape(undefined)}>
          Default
        </Button>
        <Button type='textonly' onClick={() => setShape('square')}>
          Square
        </Button>
        <Button type='textonly' onClick={() => setShape('squircle')}>
          Squircle
        </Button>
        <Button type='textonly' onClick={() => setShape('round')}>
          Round
        </Button>
      </ButtonGroup>
      <Space inline />
      <Space wrap>
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
      </Space>
      <Space inline />
    </>
  );
};

const ButtonGroups = () => {
  return (
    <>
      <Text size={3}>Button Groups</Text>
      <TextBlock>
        Buttons can be grouped together. Use the <Text code>ButtonGroup</Text>{' '}
        element around a collection of buttons to use. Button Groups work with
        all types, icons, mods, shapes, and sizes, though they do not work with
        labels. For size, apply size to every child button. For shape apply
        shape to the first and last child buttons. For type, apply to each
        button.
      </TextBlock>
      <Space inline />
      <Space wrap>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button shape='round' type='primary'>
            Primary
          </Button>
          <Button type='primary'>Button</Button>
          <Button shape='round' type='primary'>
            Type
          </Button>
        </ButtonGroup>
      </Space>
      <Space inline />
    </>
  );
};

const ButtonCombos = () => {
  return (
    <>
      <Text size={3}>Combinations</Text>
      <TextBlock>
        Just about every attribute for buttons can be combined. Experiment with
        combinations for interesting results.
      </TextBlock>
      <Space inline />
      <Space wrap>
        <Button
          shape='square'
          type='primary'
          labelRight='3.4k'
          icon={<RiGithubFill />}
        />
        <Button
          shape='round'
          labelLeft='v.1.0.9'
          iconRight={<RiDownload2Line />}>
          trunks-ui
        </Button>
        <ButtonGroup>
          <Button shape='round' icon={<RiSkipBackFill />} />
          <Button icon={<RiPlayFill />} />
          <Button shape='round' icon={<RiSkipForwardFill />} />
        </ButtonGroup>
        <Button type='dashed' size='small' iconRight={<RiEdit2Fill />}>
          Edit
        </Button>
      </Space>
      <Space inline />
    </>
  );
};
