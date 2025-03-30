import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    ColorPalette,
    SelectControl,
} from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const {
        content,
        textAlign,
        color,
        backgroundColor,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform,
    } = attributes;

    const blockProps = useBlockProps({
        style: {
            textAlign,
            color,
            backgroundColor,
            fontWeight,
            fontSize,
            lineHeight,
            fontFamily,
            textTransform,
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
        },
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Button Settings', 'app')}> 
                    <TextControl
                        label={__('Text', 'app')}
                        value={content}
                        onChange={(value) => setAttributes({ content: value })}
                    />
                    <SelectControl
                        label={__('Text Align', 'app')}
                        value={textAlign}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ]}
                        onChange={(value) => setAttributes({ textAlign: value })}
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
                    <TextControl
                        label={__('Font Family', 'app')}
                        value={fontFamily}
                        onChange={(value) => setAttributes({ fontFamily: value })}
                    />
                    <SelectControl
                        label={__('Text Transform', 'app')}
                        value={textTransform}
                        options={[
                            { label: 'None', value: 'none' },
                            { label: 'Uppercase', value: 'uppercase' },
                            { label: 'Lowercase', value: 'lowercase' },
                            { label: 'Capitalize', value: 'capitalize' },
                        ]}
                        onChange={(value) => setAttributes({ textTransform: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <button {...blockProps}>{content}</button>
        </>
    );
};

export default Edit;
