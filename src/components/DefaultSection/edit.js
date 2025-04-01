import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { id, marginTop, marginBottom } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Section Settings', 'default-section')}>
          <TextControl
            label={__('ID', 'default-section')}
            value={id}
            onChange={(value) => setAttributes({ id: value })}
          />
          <RangeControl
            label={__('Margin Top', 'default-section')}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
          />
          <RangeControl
            label={__('Margin Bottom', 'default-section')}
            value={marginBottom}
            onChange={(value) => setAttributes({ marginBottom: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div
        {...useBlockProps({
          id,
          style: {
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          },
        })}
      >
        {/* Child component can be added here */}
      </div>
    </>
  );
}
