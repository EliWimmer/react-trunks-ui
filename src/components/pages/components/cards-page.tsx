import React, { ReactElement } from 'react';
import { Card, CardButton, Text } from '../../../trunks-ui/trunks-ui';

export default function CardsPage() {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <CardDefault />
        </div>
      </div>
    </>
  );
}

const CardDefault = () => {
  return (
    <>
      <h3 className='section-header'>Types</h3>
      <Text>
        There are 5 types of icons. A <Text code>default</Text> button for
        general use, a <Text code>primary</Text> button for emphasis, a{' '}
        <Text code>dashed</Text> and <Text code>textonly</Text> button for
        secondary use, and a <Text code>link</Text> button. All buttons have a
        default margin of 8px.
      </Text>
      <div style={{ marginBottom: '12px' }} />
      <div className='display-container'>
        <Card hover title='Default Card'>
          👍 This is a default card with text and such, I dont think it will ever
          wrap.
        </Card>
      </div>
    </>
  );
};

// const CardDefault = () => {
//     return(
//         <>
//         </>
//     )
// }
