import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  ColorPalette,
  SelectControl,
  TextControl,
} from '@wordpress/components';

const ParagraphEdit = ({ attributes, setAttributes }) => {
  const {
    content,
    textAlign,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  } = attributes;

  const onChangePadding = (side, value) =>
    setAttributes({ [side]: parseFloat(value) });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Text Settings', 'custom-paragraph')}>
          <SelectControl
            label={__('Text Align', 'custom-paragraph')}
            value={textAlign}
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            onChange={(val) => setAttributes({ textAlign: val })}
          />
          <ColorPalette
            label={__('Text Color', 'custom-paragraph')}
            value={color}
            onChange={(val) => setAttributes({ color: val })}
          />
          <ColorPalette
            label={__('Background Color', 'custom-paragraph')}
            value={backgroundColor}
            onChange={(val) => setAttributes({ backgroundColor: val })}
          />
          <TextControl
            label={__('Font Size (rem)', 'custom-paragraph')}
            type="number"
            value={fontSize.replace('rem', '')}
            onChange={(val) => setAttributes({ fontSize: `${val}rem` })}
          />
          <TextControl
            label={__('Line Height', 'custom-paragraph')}
            type="number"
            step="0.1"
            value={lineHeight}
            onChange={(val) => setAttributes({ lineHeight: val })}
          />
          <TextControl
            label={__('Font Family', 'custom-paragraph')}
            value={fontFamily}
            onChange={(val) => setAttributes({ fontFamily: val })}
          />
          <SelectControl
            label={__('Font Weight', 'custom-paragraph')}
            value={fontWeight}
            options={[
              { label: 'Normal', value: '400' },
              { label: 'Bold', value: '700' },
              { label: 'Bolder', value: '900' },
            ]}
            onChange={(val) => setAttributes({ fontWeight: val })}
          />
          <SelectControl
            label={__('Text Transform', 'custom-paragraph')}
            value={textTransform}
            options={[
              { label: 'None', value: 'none' },
              { label: 'Uppercase', value: 'uppercase' },
              { label: 'Lowercase', value: 'lowercase' },
              { label: 'Capitalize', value: 'capitalize' },
            ]}
            onChange={(val) => setAttributes({ textTransform: val })}
          />
        </PanelBody>

        <PanelBody title={__('Padding Settings', 'custom-paragraph')} initialOpen={true}>
          <TextControl
            label={__('Padding Top (px)', 'custom-paragraph')}
            value={paddingTop}
            onChange={(val) => onChangePadding('paddingTop', val)}
            type="number"
            min={0}
          />
          <TextControl
            label={__('Padding Bottom (px)', 'custom-paragraph')}
            value={paddingBottom}
            onChange={(val) => onChangePadding('paddingBottom', val)}
            type="number"
            min={0}
          />
          <TextControl
            label={__('Padding Left (px)', 'custom-paragraph')}
            value={paddingLeft}
            onChange={(val) => onChangePadding('paddingLeft', val)}
            type="number"
            min={0}
          />
          <TextControl
            label={__('Padding Right (px)', 'custom-paragraph')}
            value={paddingRight}
            onChange={(val) => onChangePadding('paddingRight', val)}
            type="number"
            min={0}
          />
        </PanelBody>
      </InspectorControls>

      <RichText
        {...useBlockProps({
          style: {
            color,
            backgroundColor,
            fontWeight,
            fontSize,
            lineHeight,
            fontFamily,
            textTransform,
            textAlign,
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
            paddingLeft: `${paddingLeft}px`, 
            paddingRight: `${paddingRight}px`,
            margin: '0px',
          },
        })}
        tagName="p"
        value={content}
        onChange={(val) => setAttributes({ content: val })}
        placeholder={__('Enter paragraph text...', 'custom-paragraph')}
      />
    </>
  );
};

export default ParagraphEdit;
