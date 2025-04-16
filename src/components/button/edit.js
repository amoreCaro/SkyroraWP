import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, SelectControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const {
        content,
        // You can optionally remove textAlign if you want to force left alignment,
        // or leave it for future customization.
        textAlign,
        color,
        backgroundColor,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform
    } = attributes;

    // Define the container style to force left alignment using flexbox.
    const containerStyle = {
        display: 'flex',
        justifyContent: 'flex-start'
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Button Settings', 'app')}>
                    <TextControl
                        label={__('Font Size', 'app')}
                        value={fontSize}
                        onChange={(value) => setAttributes({ fontSize: value })}
                    />
                    <TextControl
                        label={__('Line Height', 'app')}
                        value={lineHeight}
                        onChange={(value) => setAttributes({ lineHeight: value })}
                    />
                    <SelectControl
                        label={__('Font Weight', 'app')}
                        value={fontWeight}
                        options={[
                            { label: 'Normal', value: '400' },
                            { label: 'Medium', value: '500' },
                            { label: 'Semi-Bold', value: '600' },
                            { label: 'Bold', value: '700' }
                        ]}
                        onChange={(value) => setAttributes({ fontWeight: value })}
                    />
                    <SelectControl
                        label={__('Text Transform', 'app')}
                        value={textTransform}
                        options={[
                            { label: 'None', value: 'none' },
                            { label: 'Uppercase', value: 'uppercase' },
                            { label: 'Lowercase', value: 'lowercase' },
                            { label: 'Capitalize', value: 'capitalize' }
                        ]}
                        onChange={(value) => setAttributes({ textTransform: value })}
                    />
                    <ColorPalette
                        label={__('Text Color', 'app')}
                        value={color}
                        onChange={(value) => setAttributes({ color: value })}
                    />
                    <ColorPalette
                        label={__('Background Color', 'app')}
                        value={backgroundColor}
                        onChange={(value) => setAttributes({ backgroundColor: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                {...useBlockProps({
                    // Combine the custom container style with potential inherited styles.
                    style: { ...containerStyle, textAlign }
                })}
            >
                <button
                    style={{
                        color,
                        backgroundColor,
                        fontWeight,
                        fontSize,
                        lineHeight,
                        fontFamily,
                        textTransform,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-block',
                        maxWidth: '256px',
                        width: '100%',
                        height: '56px',
                    }}
                >
                    <RichText
                        tagName="span"
                        value={content}
                        onChange={(value) => setAttributes({ content: value })}
                        placeholder={__('Enter your button text', 'app')}
                    />
                </button>
            </div>
        </>
    );
}
