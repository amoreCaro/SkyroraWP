import {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, SelectControl, ColorPalette } from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { id, imgUrl, text1, text2, paddingLeft, paddingRight, fontFamily, fontSize, lineHeight, color, textTransform, fontWeight } = attributes;
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
        const paddingValue = value ? parseInt(value) : 0;
        setAttributes({ paddingLeft: paddingValue });
    };

    const onChangePaddingRight = (value) => {
        const paddingValue = value ? parseInt(value) : 0;
        setAttributes({ paddingRight: paddingValue });
    };

    return (
        <>
            <InspectorControls>
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
                        label="Line Height"
                        type="number"
                        value={lineHeight}
                        onChange={(value) => setAttributes({ lineHeight: value })}
                    />
                    <ColorPalette
                        label="Text Color"
                        value={color}
                        onChange={(value) => setAttributes({ color: value })}
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
                <PanelBody title="Padding Settings" initialOpen={true}>
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
                        paddingTop: '20px',
                        paddingBottom: '32px',
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
                                style={{
                                    margin: '0px 0px 8px 0px',
                                    color: color,
                                    fontFamily: fontFamily,
                                    fontSize: fontSize ? `${fontSize}px` : '16px',
                                    lineHeight: lineHeight ? `${lineHeight}px` : '20px',
                                    fontWeight: fontWeight,
                                    textTransform: textTransform,
                                }}
                                disabled={!isEditable}
                            />
                            <RichText
                                tagName="p"
                                placeholder="Enter the second text..."
                                value={text2}
                                onChange={onChangeText2}
                                style={{
                                    margin: '0px',
                                    color: color,
                                    fontFamily: fontFamily,
                                    fontSize: fontSize ? `${fontSize}px` : '16px',
                                    lineHeight: lineHeight ? `${lineHeight}px` : '20px',
                                    fontWeight: fontWeight,
                                    textTransform: textTransform,
                                }}
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
