import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
    PanelBody,
    ColorPalette,
    TextControl
} from '@wordpress/components';
import './editor.css';

const Edit = ({ attributes, setAttributes }) => {
    const { id, color, paddingLeft, paddingRight } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Divider Settings', 'custom-divider')}>
                    <TextControl
                        label={__('ID', 'custom-divider')}
                        value={id}
                        onChange={(value) => setAttributes({ id: value })}
                    />
                    <ColorPalette
                        label={__('Color', 'custom-divider')}
                        value={color}
                        onChange={(value) => setAttributes({ color: value })}
                    />
                    <TextControl
                        label={__('Padding Left (rem)', 'custom-divider')}
                        type="number"
                        value={paddingLeft}
                        onChange={(val) => setAttributes({ paddingLeft: parseFloat(val) })}
                    />
                    <TextControl
                        label={__('Padding Right (rem)', 'custom-divider')}
                        type="number"
                        value={paddingRight}
                        onChange={(val) => setAttributes({ paddingRight: parseFloat(val) })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()} className="wp-block wp-divider" style={{
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: `${paddingLeft}rem`,
                paddingRight: `${paddingRight}rem`
            }}>
                <div
                    className="divider-line"
                    style={{
                        borderBottom: `1px solid ${color}`,
                        width: '100%',
                    }}
                />
            </div>
        </>
    );
};

export default Edit;
