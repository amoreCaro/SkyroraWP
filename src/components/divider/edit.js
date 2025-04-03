import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    ColorPalette,
    TextControl
} from '@wordpress/components';
import './editor.css';

const Edit = ({ attributes, setAttributes }) => {
    const { id, color } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Divider Settings', 'custom-divider')}>
                    <TextControl
                        label={__('ID', 'custom-divider')}
                        value={id}
                        onChange={(value) => setAttributes({ id: value })}
                    />
                    {/* <ColorPalette
                        label={__('Color', 'custom-divider')}
                        value={color}
                        onChange={(value) => setAttributes({ color: value })}
                    /> */}
                </PanelBody>
            </InspectorControls>

            <hr
                id={id}
                style={{
                    borderColor: color,
                    borderWidth: '1px',
                }}
            />
        </>
    );
};

export default Edit;