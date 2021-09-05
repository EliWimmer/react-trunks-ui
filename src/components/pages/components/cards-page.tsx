import React, { ReactElement } from 'react';
import {
  Button,
  Card,
  CardStack,
  Text,
  TextBlock,
  Space,
  Divider,
} from '../../../trunks-ui/trunks-ui';
import { RiSettings4Fill, RiEdit2Fill, RiShareFill } from 'react-icons/ri';
export default function CardsPage() {
  return (
    <>
          <Text size={2}>Card</Text>
          <Text>Cards are great for displaying information within a certain context.</Text>
          <CardDefault />
          <CardButtons />
          <CardCovers />
          <CardStacks />
    </>
  );
}

const CardDefault = () => {
  return (
    <>
      <Text size={3}>Basic Usage</Text>
      <TextBlock>
        There are 5 types of icons. A <Text code>default</Text> button for
        general use, a <Text code>primary</Text> button for emphasis, a{' '}
        <Text code>dashed</Text> and <Text code>textonly</Text> button for
        secondary use, and a <Text code>link</Text> button. All buttons have a
        default margin of 8px.
      </TextBlock>
      <Space inline />
        <Space wrap>
          <Card title='Basic Card'>
            This is a default card with text and a title! 👍
          </Card>
          <Card
            extra='Extra'
            description='They can also have subtext or descriptions to give secondary info'
            title='Card Extras'>
            There is also a spot for extra stuff in the top right!
          </Card>
          <Card>
            You can also omit all of that altogether for a very simple card.
          </Card>
        </Space>
        <Space inline />
    </>
  );
};

const CardButtons = () => {
  return (
    <>
      <Text size={3}>Buttons</Text>
      <Space inline />
        <Space wrap>
          <Card
            buttons={
              <>
                <Button type='textonly' fill>
                  More Info
                </Button>
                <Button type='textonly' fill>
                  Cancel
                </Button>
              </>
            }
            title='Card with Buttons'>
            This is a card with text buttons! Uses the trunks-ui button
            component set to <Text code>textonly</Text> and{' '}
            <Text code>fill</Text>.
          </Card>
          <Card
            buttons={
              <>
                <Button type='textonly' icon={<RiSettings4Fill />} fill />
                <Button type='textonly' icon={<RiEdit2Fill />} fill />
                <Button type='textonly' icon={<RiShareFill />} fill />
              </>
            }
            title='Card with Icon Buttons'>
            A card with icon buttons. Same settings as the previous card, but
            without children (label), and an icon attribute.
          </Card>
          <Space inline />
        </Space>
    </>
  );
};

const CardCovers = () => {
  return (
    <>
      <Text size={3}>Cover Image</Text>
      <Space inline />
        <Card
          cover='https://images.unsplash.com/photo-1615731439720-47878ecc1ac6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
          title='Cover Image'>
          Cards can have a cover image. The image is set to fill the space
          vertically and crop out the sides as needed to keep them uniform.
        </Card>
        <Space inline />
    </>
  );
};

const CardStacks = () => {
  return (
    <>
      <Text size={3}>Stack</Text>
      <Space inline />
        <CardStack>
          <Card
            description="From Unsplash.com"
            cover='https://images.unsplash.com/photo-1630692158486-f1e2dd74142b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
            title='Iceland'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card
            description="From Unsplash.com"
            cover='https://images.unsplash.com/photo-1630704236714-b9ae325f1aad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
            title='Dolomites'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card
            description="From Unsplash.com"
            cover='https://images.unsplash.com/photo-1630691432703-ba4e8566b9ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
            title='Unknown'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card
            description="From Unsplash.com"
            cover='https://images.unsplash.com/photo-1533139143976-30918502365b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            title='Montana'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card
            description="From Unsplash.com"
            cover='https://images.unsplash.com/photo-1494935362342-566c6d6e75b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            title='Italy'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
        </CardStack>
        <Space inline />
    </>
  );
};

// const CardDefault = () => {
//     return(
//         <>
//         </>
//     )
// }
