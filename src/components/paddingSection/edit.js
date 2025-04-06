import { useState } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const Edit = (props) => {
  const { attributes, setAttributes } = props;
  const { paddingLeft, paddingRight } = attributes;

  const handlePaddingLeftChange = (value) => {
    setAttributes({ paddingLeft: value });
  };

  const handlePaddingRightChange = (value) => {
    setAttributes({ paddingRight: value });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Padding Settings" initialOpen={true}>
          <RangeControl
            label="Padding Left"
            value={paddingLeft}
            onChange={handlePaddingLeftChange}
            min={0}
            max={100}
            step={1}
          />
          <RangeControl
            label="Padding Right"
            value={paddingRight}
            onChange={handlePaddingRightChange}
            min={0}
            max={100}
            step={1}
          />
        </PanelBody>
      </InspectorControls>

      <div
        className="padding-section"
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
      >
        <p>This is a section with customizable padding.</p>
      </div>
    </>
  );
};

export default Edit;
