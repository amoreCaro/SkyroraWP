import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ColorPalette, TextControl } from '@wordpress/components';

const ParagraphEdit = ({ attributes, setAttributes }) => {
    const {
        content,
        textAlign,
        color,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform
    } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Paragraph Settings', 'custom-paragraph')}>
                    {/* Text Align Control */}
                    <SelectControl
                        label={__('Text Align', 'custom-paragraph')}
                        value={textAlign}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ]}
                        onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
                    />
                    {/* Text Color Control */}
                    <ColorPalette
                        label={__('Text Color', 'custom-paragraph')}
                        value={color}
                        onChange={(newColor) => setAttributes({ color: newColor })}
                    />
                    {/* Font Size Control */}
                    <TextControl
                        label={__('Font Size', 'custom-paragraph')}
                        value={fontSize}
                        onChange={(newSize) => setAttributes({ fontSize: newSize })}
                        type="number"
                        min={0}
                    />
                    {/* Line Height Control */}
                    <TextControl
                        label={__('Line Height', 'custom-paragraph')}
                        value={lineHeight}
                        onChange={(newHeight) => setAttributes({ lineHeight: newHeight })}
                    />
                    {/* Font Family Control */}
                    <TextControl
                        label={__('Font Family', 'custom-paragraph')}
                        value={fontFamily}
                        onChange={(newFont) => setAttributes({ fontFamily: newFont })}
                    />
                    {/* Font Weight Control */}
                    <SelectControl
                        label={__('Font Weight', 'custom-paragraph')}
                        value={fontWeight}
                        options={[
                            { label: 'Normal', value: '400' },
                            { label: 'Bold', value: '700' },
                            { label: 'Bolder', value: '900' },
                        ]}
                        onChange={(newWeight) => setAttributes({ fontWeight: newWeight })}
                    />
                    {/* Text Transform Control */}
                    <SelectControl
                        label={__('Text Transform', 'custom-paragraph')}
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

            {/* Editable Paragraph Content */}
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
                tagName="p"
                value={content}
                onChange={(newContent) => setAttributes({ content: newContent })}
                placeholder={__('Enter paragraph text...', 'custom-paragraph')}
            />
        </>
    );
};

export default ParagraphEdit;
