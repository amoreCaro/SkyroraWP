import {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { id, svgUrl, text1, text2 } = attributes;
    const blockProps = useBlockProps();

    // Block edit lock
    const isEditable = attributes.isEditable !== false;  // Add condition to check if block is editable

    // Handle SVG file selection
    const onSelectSVG = (media) => {
        if (isEditable) {
            setAttributes({ svgUrl: media.url });
        }
    };

    // Handle text changes
    const onChangeText1 = (value) => {
        if (isEditable) {
            setAttributes({ text1: value });
        }
    };

    const onChangeText2 = (value) => {
        if (isEditable) {
            setAttributes({ text2: value });
        }
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Block Settings" initialOpen={true}>
                    {/* Additional settings can be added here */}
                </PanelBody>
            </InspectorControls>
            <div id={id} {...blockProps}>
                <div
                    className="app-block app-block--preview"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div>
                        {svgUrl ? (
                            <img
                                src={svgUrl}
                                alt="Uploaded SVG"
                                style={{ maxWidth: '114px', height: '60px', width: '100%' }}
                            />
                        ) : (
                            <div>No SVG uploaded</div>
                        )}
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectSVG}
                                allowedTypes={['image/svg+xml']}
                                value={svgUrl}
                                render={({ open }) => (
                                    <Button onClick={open} disabled={!isEditable}>
                                        <span className="dashicons dashicons-upload"></span> Upload SVG
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '12px' }}>
                            <RichText
                                tagName="p"
                                placeholder="Enter the first text..."
                                value={text1}
                                onChange={onChangeText1}
                                style={{ margin: '0px 0px 8px 0px' }}
                                disabled={!isEditable}  // Disable editing if not allowed
                            />
                            <RichText
                                tagName="p"
                                placeholder="Enter the second text..."
                                value={text2}
                                onChange={onChangeText2}
                                style={{ margin: '0px' }}
                                disabled={!isEditable}  // Disable editing if not allowed
                            />
                        </div>
                        <div style={{position: 'absolute', right: '0px', top: '0px', height: '32px', width: '2px', backgroundColor: '#164BDC'}}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
