import React from 'react';
import { Space } from '../../../trunks-ui/trunks-ui';

export const TemplatePageectPage = () => {
  return (
    <>
      <div className='compo-page-container'>
        <div className='compo-page'>
          <h2>Title</h2>
          {/* Compnonents here */}
        </div>
      </div>
    </>
  );
};

const TemplateTypes = () => {
  return (
    <>
      <h3 className='section-header'>Subtitle</h3>
      <Space inline />
      <div className='display-container'>
       {/* Components Here */}
      </div>
    </>
  );
};
