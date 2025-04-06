import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
  BlockControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  ColorPalette,
  TextControl,
  ToolbarGroup,
  ToolbarButton,
  RangeControl,
} from '@wordpress/components';

const HeadingEdit = ({ attributes, setAttributes }) => {
  const {
    content,
    level,
    textAlign,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    paddingLeft,
    paddingRight,
  } = attributes;

  const headingSize = (hLevel) => {
    switch (hLevel) {
      case 1:
        return '2.5rem';
      case 2:
        return '2.0rem';
      case 3:
        return '1.75rem';
      case 4:
        return '1.5rem';
      case 5:
        return '1.25rem';
      case 6:
        return '1.0rem';
      default:
        return '2rem';
    }
  };

  return (
    <>
      {/* Toolbar for Heading Levels */}
      <BlockControls>
        <ToolbarGroup>
          {[1, 2, 3, 4, 5, 6].map((hLevel) => (
            <ToolbarButton
              key={hLevel}
              isPressed={level === hLevel}
              onClick={() => setAttributes({ level: hLevel })}
            >
              H{hLevel}
            </ToolbarButton>
          ))}
        </ToolbarGroup>
      </BlockControls>

      {/* Sidebar Controls */}
      <InspectorControls>
        <PanelBody title={__('Heading Settings', 'custom-heading')}>
          <SelectControl
            label={__('Heading Level', 'custom-heading')}
            value={level}
            options={Array.from({ length: 6 }, (_, i) => ({
              label: `H${i + 1}`,
              value: i + 1,
            }))}
            onChange={(newLevel) => setAttributes({ level: parseInt(newLevel, 10) })}
          />
          <SelectControl
            label={__('Text Align', 'custom-heading')}
            value={textAlign}
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
          />
          <ColorPalette
            label={__('Text Color', 'custom-heading')}
            value={color}
            onChange={(newColor) => setAttributes({ color: newColor || '#000000' })}
          />
          <TextControl
            label={__('Font Size (rem)', 'custom-heading')}
            type="number"
            value={fontSize.replace('rem', '')}
            onChange={(newSize) => setAttributes({ fontSize: `${newSize}rem` })}
          />
          <TextControl
            label={__('Line Height', 'custom-heading')}
            type="number"
            step="0.1"
            value={lineHeight}
            onChange={(newHeight) => setAttributes({ lineHeight: newHeight })}
          />
          <TextControl
            label={__('Font Family', 'custom-heading')}
            value={fontFamily}
            onChange={(newFont) => setAttributes({ fontFamily: newFont })}
          />
          <SelectControl
            label={__('Font Weight', 'custom-heading')}
            value={fontWeight}
            options={[
              { label: 'Normal', value: '400' },
              { label: 'Bold', value: '700' },
              { label: 'Bolder', value: '900' },
            ]}
            onChange={(newWeight) => setAttributes({ fontWeight: newWeight })}
          />
          <SelectControl
            label={__('Text Transform', 'custom-heading')}
            value={textTransform}
            options={[
              { label: 'None', value: 'none' },
              { label: 'Uppercase', value: 'uppercase' },
              { label: 'Lowercase', value: 'lowercase' },
              { label: 'Capitalize', value: 'capitalize' },
            ]}
            onChange={(newTransform) => setAttributes({ textTransform: newTransform })}
          />
        </PanelBody>

        {/* Padding Controls */}
        <PanelBody title={__('Padding Settings', 'custom-heading')} initialOpen={false}>
          <RangeControl
            label={__('Padding Left (px)', 'custom-heading')}
            value={paddingLeft}
            onChange={(value) => setAttributes({ paddingLeft: value })}
            min={0}
            max={100}
          />
          <RangeControl
            label={__('Padding Right (px)', 'custom-heading')}
            value={paddingRight}
            onChange={(value) => setAttributes({ paddingRight: value })}
            min={0}
            max={100}
          />
        </PanelBody>
      </InspectorControls>

      {/* Editable Heading */}
      <RichText
        {...useBlockProps({
          style: {
            color,
            fontWeight,
            fontSize: headingSize(level),
            lineHeight,
            fontFamily,
            textTransform,
            textAlign,
            paddingLeft: `${paddingLeft}px`,
            paddingRight: `${paddingRight}px`,
          },
        })}
        tagName={`h${level}`}
        value={content}
        onChange={(newContent) => setAttributes({ content: newContent })}
        placeholder={__('Enter heading text...', 'custom-heading')}
      />
    </>
  );
};

export default HeadingEdit;
