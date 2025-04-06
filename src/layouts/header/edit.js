import {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { id, imgUrl, text1, text2, paddingLeft, paddingRight } = attributes;
    const blockProps = useBlockProps();

    const isEditable = attributes.isEditable !== false;

    const onSelectImage = (media) => {
        if (isEditable) {
            setAttributes({ imgUrl: media.url });
        }
    };

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

    const onChangePaddingLeft = (value) => {
        // Ensure the value is a valid number before updating the attribute
        const paddingValue = value ? parseInt(value) : 0;
        setAttributes({ paddingLeft: paddingValue });
    };

    const onChangePaddingRight = (value) => {
        // Ensure the value is a valid number before updating the attribute
        const paddingValue = value ? parseInt(value) : 0;
        setAttributes({ paddingRight: paddingValue });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Block Settings" initialOpen={true}>
                    {/* Fields for changing padding with TextControl */}
                    <TextControl
                        label="Padding Left (px)"
                        value={paddingLeft}
                        onChange={onChangePaddingLeft}
                        type="number"
                        min={0}
                    />
                    <TextControl
                        label="Padding Right (px)"
                        value={paddingRight}
                        onChange={onChangePaddingRight}
                        type="number"
                        min={0}
                    />
                </PanelBody>
            </InspectorControls>
            <div id={id} {...blockProps}>
                <div
                    className="app-block app-block--preview"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#181b24',
                        paddingLeft: `${paddingLeft}px`,  
                        paddingRight: `${paddingRight}px`,  
                        paddingTop:'20px',
                        paddingBottom:'32px'
                    }}
                >
                    {/* logo */}
                    <div>
                        <div style={{ maxWidth: '114px', height: '60px', width: '100%' }}>
                            {imgUrl ? (
                                <img
                                    src={imgUrl}
                                    alt="Uploaded"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
                                    }}
                                    className="uploaded-img"
                                />
                            ) : (
                                <div>No image uploaded</div>
                            )}
                        </div>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={imgUrl}
                                render={({ open }) => (
                                    <Button onClick={open} disabled={!isEditable}>
                                        <span className="dashicons dashicons-upload"></span> Upload Image
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                    {/* header__right */}
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                marginRight: '12px',
                            }}
                        >
                            <RichText
                                tagName="p"
                                placeholder="Enter the first text..."
                                value={text1}
                                onChange={onChangeText1}
                                style={{ margin: '0px 0px 8px 0px', color: '#FFFFFF' }}
                                disabled={!isEditable}
                            />
                            <RichText
                                tagName="p"
                                placeholder="Enter the second text..."
                                value={text2}
                                onChange={onChangeText2}
                                style={{ margin: '0px', color: '#FFFFFF' }}
                                disabled={!isEditable}
                            />
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                right: '0px',
                                top: '0px',
                                height: '32px',
                                width: '2px',
                                backgroundColor: '#164BDC',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}
