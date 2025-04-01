import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const HeadingEdit = ({ attributes, setAttributes }) => {
    const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform, marginTop, marginBottom } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Heading Settings', 'custom-heading')}>
                    <TextControl
                        label={__('Top Margin (px)', 'custom-heading')}
                        value={marginTop}
                        onChange={(newValue) => setAttributes({ marginTop: newValue })}
                    />
                    <TextControl
                        label={__('Bottom Margin (px)', 'custom-heading')}
                        value={marginBottom}
                        onChange={(newValue) => setAttributes({ marginBottom: newValue })}
                    />
                    {/* Інші налаштування для заголовка */}
                </PanelBody>
            </InspectorControls>
            <RichText
                {...useBlockProps({
                    style: {
                        marginTop,
                        marginBottom,
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
