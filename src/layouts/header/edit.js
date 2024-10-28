import { useBlockProps, InspectorControls , RichText,MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { PanelBody,TextControl,TabPanel, Button, ColorPalette, Modal, RadioControl } from '@wordpress/components';
import { useState } from 'react';


import './editor.css';

export default function Edit({ attributes, setAttributes }) {

    const {
        id, 
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <div id={id} {...blockProps}>
            <div className="app-block app-block--preview">
                <h2>Header</h2>
                <Button>
                    <span class="dashicons dashicons-edit"></span> Edit Header
                </Button>
            </div>
        </div>
    );

}


