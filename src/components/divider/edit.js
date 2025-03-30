import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ColorPalette,
    TextControl
} from '@wordpress/components';
import './editor.css';

const Edit = ({ attributes, setAttributes }) => {
    const { id, align, style, color } = attributes;

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody title={__('Divider Settings', 'custom-divider')}>
                    <TextControl
                        label={__('ID', 'custom-divider')}
                        value={id}
                        onChange={(value) => setAttributes({ id: value })}
                    />
                    <SelectControl
                        label={__('Alignment', 'custom-divider')}
                        value={align}
                        options={[
                            { label: __('Left', 'custom-divider'), value: 'left' },
                            { label: __('Center', 'custom-divider'), value: 'center' },
                            { label: __('Right', 'custom-divider'), value: 'right' },
                        ]}
                        onChange={(value) => setAttributes({ align: value })}
                    />
                    <SelectControl
                        label={__('Style', 'custom-divider')}
                        value={style}
                        options={[
                            { label: __('Solid', 'custom-divider'), value: 'solid' },
                            { label: __('Dashed', 'custom-divider'), value: 'dashed' },
                            { label: __('Dotted', 'custom-divider'), value: 'dotted' },
                        ]}
                        onChange={(value) => setAttributes({ style: value })}
                    />
                    <ColorPalette
                        label={__('Color', 'custom-divider')}
                        value={color}
                        onChange={(value) => setAttributes({ color: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <hr
                id={id}
                style={{
                    textAlign: align,
                    borderStyle: style,
                    borderColor: color,
                    borderWidth: '1px',
                }}
            />
        </div>
    );
};

export default Edit;