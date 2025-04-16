import {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    SelectControl,
    ColorPalette,
    Button
} from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const {
        imgUrl,
        text1,
        text2,
        paddingLeft,
        paddingRight,
        fontFamily,
        fontSize,
        lineHeight,
        color,
        textTransform,
        fontWeight
    } = attributes;

    const blockProps = useBlockProps();

    const onSelectImage = (media) => setAttributes({ imgUrl: media.url });
    const onChangeText1 = (value) => setAttributes({ text1: value });
    const onChangeText2 = (value) => setAttributes({ text2: value });
    const onChangePaddingLeft = (value) => setAttributes({ paddingLeft: parseInt(value) || 0 });
    const onChangePaddingRight = (value) => setAttributes({ paddingRight: parseInt(value) || 0 });

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
                        label="Line Height (px)"
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
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div
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
                    {/* Logo */}
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
                                    <Button onClick={open}>
                                        <span className="dashicons dashicons-upload"></span> Upload Image
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>

                    {/* Text */}
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
