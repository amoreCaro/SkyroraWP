import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ColorPalette, TextControl } from '@wordpress/components';

const HeadingEdit = ({ attributes, setAttributes }) => {
    const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Heading Settings', 'custom-heading')}>
                    <SelectControl
                        label={__('Heading Level', 'custom-heading')}
                        value={level}
                        options={Array.from({ length: 6 }, (_, i) => ({ label: `H${i + 1}`, value: i + 1 }))}
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
                        label={__('Font Size (px)', 'custom-heading')}
                        type="number"
                        value={fontSize.replace('px', '')}
                        onChange={(newSize) => setAttributes({ fontSize: `${newSize}px` })}
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
            </InspectorControls>
            <RichText
                {...useBlockProps({
                    style: {
                        color,
                        fontWeight,
                        fontSize,
                        lineHeight,
                        fontFamily,
                        textTransform,
                        textAlign,
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
