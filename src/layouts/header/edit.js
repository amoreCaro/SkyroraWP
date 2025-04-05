import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TabPanel, Button, ColorPalette, Modal, RadioControl } from '@wordpress/components';
import { useState } from 'react';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { id, svgUrl } = attributes;

    const blockProps = useBlockProps();

    // Handle the selection of an SVG
    const onSelectSVG = (media) => {
        setAttributes({ svgUrl: media.url });
    };

    return (
        <div id={id} {...blockProps}>
            <div className="app-block app-block--preview">
                {svgUrl ? (
                    <img src={svgUrl} alt="Uploaded SVG" style={{ maxWidth: '114px', height: '60px', width: '100%' }} />
                ) : (
                    <div>No SVG uploaded</div>
                )}

                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectSVG}
                        allowedTypes={['image/svg+xml']}  // Only allow SVG images
                        value={svgUrl}
                        render={({ open }) => (
                            <Button onClick={open}>
                                <span className="dashicons dashicons-upload"></span> Upload SVG
                            </Button>
                        )}
                    />
                </MediaUploadCheck>

                <Button>
                    <span className="dashicons dashicons-edit"></span> Edit Header
                </Button>
            </div>
        </div>
    );
}
