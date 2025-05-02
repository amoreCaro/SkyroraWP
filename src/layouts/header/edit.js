import {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    BlockControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    SelectControl,
    Button
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.css';
import { useState } from 'react';

export default function Edit({ attributes, setAttributes }) {
    const {
        imgUrl,
        imgId,
        text1,
        text2,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        fontFamily,
        fontSize,
        lineHeight,
        color,
        backgroundColor,
        textTransform,
        fontWeight
    } = attributes;

    const blockProps = useBlockProps();

    const [showLogoInfo, setShowLogoInfo] = useState(false);
    const [showRemoveImage, setShowRemoveImage] = useState(false);

    const onSelectImage = (media) => setAttributes({ imgUrl: media.url, imgId: media.id });
    const onRemoveImage = () => setAttributes({ imgUrl: '', imgId: 0 });

    const onChangeText1 = (value) => setAttributes({ text1: value });
    const onChangeText2 = (value) => setAttributes({ text2: value });

    const onChangePaddingLeft = (value) => setAttributes({ paddingLeft: parseInt(value) || 0 });
    const onChangePaddingRight = (value) => setAttributes({ paddingRight: parseInt(value) || 0 });
    const onChangePaddingTop = (value) => setAttributes({ paddingTop: parseInt(value) || 0 });
    const onChangePaddingBottom = (value) => setAttributes({ paddingBottom: parseInt(value) || 0 });

    const toggleLogoInfo = (event) => {
        event.stopPropagation(); // Prevents click from bubbling to text container
        setShowLogoInfo(true);
        setShowRemoveImage(true);
    };

    const handleTextClick = () => {
        setShowLogoInfo(false);
        setShowRemoveImage(false);
    };

    return (
        <>
            <BlockControls>
                {showRemoveImage && imgUrl && (
                    <Button
                        onClick={onRemoveImage}
                        className="remove-image-button"
                        aria-label={__('Remove Image')}
                        style={{
                            alignItems: 'center',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18 6L6 18M6 6l12 12"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Button>
                )}
            </BlockControls>

            <InspectorControls>
                {showLogoInfo && (
                    <PanelBody title="Text Settings" initialOpen={true}>
                        <TextControl
                            label="Font Family"
                            value={fontFamily}
                            onChange={(value) => setAttributes({ fontFamily: value })}
                        />
                        <TextControl
                            label="Font Size (px)"
                            type="number"
                            value={fontSize}
                            onChange={(value) => setAttributes({ fontSize: value })}
                        />
                        <TextControl
                            label="Line Height (px)"
                            type="number"
                            value={lineHeight}
                            onChange={(value) => setAttributes({ lineHeight: value })}
                        />
                        <SelectControl
                            label="Font Weight"
                            value={fontWeight}
                            options={[
                                { label: 'Normal', value: '400' },
                                { label: 'Bold', value: '700' },
                                { label: 'Bolder', value: '900' },
                            ]}
                            onChange={(value) => setAttributes({ fontWeight: value })}
                        />
                        <SelectControl
                            label="Text Transform"
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
                )}

                <PanelBody title="Padding Settings" initialOpen={true}>
                    <TextControl
                        label="Padding Left (px)"
                        type="number"
                        value={paddingLeft}
                        onChange={onChangePaddingLeft}
                    />
                    <TextControl
                        label="Padding Right (px)"
                        type="number"
                        value={paddingRight}
                        onChange={onChangePaddingRight}
                    />
                    <TextControl
                        label="Padding Top (px)"
                        type="number"
                        value={paddingTop}
                        onChange={onChangePaddingTop}
                    />
                    <TextControl
                        label="Padding Bottom (px)"
                        type="number"
                        value={paddingBottom}
                        onChange={onChangePaddingBottom}
                    />
                </PanelBody>

                <PanelColorSettings
                    title="Colors"
                    initialOpen={true}
                    colorSettings={[
                        {
                            value: color,
                            onChange: (value) => setAttributes({ color: value }),
                            label: 'Text Color',
                        },
                        {
                            value: backgroundColor,
                            onChange: (value) => setAttributes({ backgroundColor: value }),
                            label: 'Background Color',
                        },
                    ]}
                />
            </InspectorControls>

            <div {...blockProps}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: backgroundColor || '#181b24',
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                    }}
                >
                    {/* Logo Section */}
                    <div onClick={(e) => toggleLogoInfo(e)} style={{ cursor: 'pointer' }}>
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
                                />
                            ) : (
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={imgId}
                                    render={({ open }) => (
                                        <Button
                                            onClick={open}
                                            className="upload-image-button"
                                            style={{
                                                backgroundColor: '#164BDC',
                                                color: '#fff',
                                                padding: '8px 16px',
                                                border: 'none',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Upload Image
                                        </Button>
                                    )}
                                />
                            )}
                        </div>
                    </div>

                    {/* Text Section */}
                    <div style={{ position: 'relative' }} onClick={handleTextClick}>
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
                                value={text1}
                                onChange={onChangeText1}
                                placeholder="Enter the first text..."
                                style={{
                                    margin: '0 0 8px 0',
                                    color,
                                    fontFamily,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineHeight}px`,
                                    fontWeight,
                                    textTransform,
                                }}
                            />
                            <RichText
                                tagName="p"
                                value={text2}
                                onChange={onChangeText2}
                                placeholder="Enter the second text..."
                                style={{
                                    margin: 0,
                                    color,
                                    fontFamily,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineHeight}px`,
                                    fontWeight,
                                    textTransform,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
