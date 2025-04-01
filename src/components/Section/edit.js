import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const { marginTop, marginBottom } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Spacing Settings', 'custom-section')}>
                    <TextControl
                        label={__('Top Margin (px)', 'custom-section')}
                        value={marginTop}
                        onChange={(newValue) => setAttributes({ marginTop: newValue })}
                    />
                    <TextControl
                        label={__('Bottom Margin (px)', 'custom-section')}
                        value={marginBottom}
                        onChange={(newValue) => setAttributes({ marginBottom: newValue })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps({
                style: {
                    marginTop,
                    marginBottom,
                }
            })}>
                <p>Content of the Section Block</p>
            </div>
        </>
    );
};

export default Edit;
