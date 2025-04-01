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
                        options={[
                            { label: 'H1', value: 1 },
                            { label: 'H2', value: 2 },
                            { label: 'H3', value: 3 },
                            { label: 'H4', value: 4 },
                            { label: 'H5', value: 5 },
                            { label: 'H6', value: 6 },
                        ]}
                        onChange={(newLevel) => setAttributes({ level: parseInt(newLevel) })}
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
                        onChange={(newColor) => setAttributes({ color: newColor })}
                    />
                    <TextControl
                        label={__('Font Size', 'custom-heading')}
                        value={fontSize}
                        onChange={(newSize) => setAttributes({ fontSize: newSize })}
                    />
                    <TextControl
                        label={__('Line Height', 'custom-heading')}
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