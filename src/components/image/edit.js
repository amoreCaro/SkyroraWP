import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
    BlockControls
} from '@wordpress/block-editor';
import {
    Button,
    PanelBody,
    TextControl
} from '@wordpress/components';

const ImageEdit = ({ attributes, setAttributes }) => {
    const {
        imageUrl,
        imageId,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom
    } = attributes;

    const imageWrapper = {
        paddingTop: `${paddingTop || 24}px`,
        paddingBottom: `${paddingBottom || 24}px`,
        paddingLeft: `${paddingLeft || 3}rem`,
        paddingRight: `${paddingRight || 3}rem`,
        maxWidth: "544px",
        width: "100%",
        margin: "0",
    };

    const image = {
        height: "auto",
        objectFit: "cover",
        display: "block",
    };

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    const onRemoveImage = () => {
        setAttributes({ imageUrl: '', imageId: 0 });
    };

    return (
        <>
            <BlockControls>
                {imageUrl && (
                    <Button
                        variant="link"
                        onClick={onRemoveImage}
                        icon="no-alt"
                        label={__('Remove Image')}
                        className="remove-image-button"
                        aria-label={__('Remove Image')}
                        iconSize={20}
                    />
                )}
            </BlockControls>
            <InspectorControls>
                <PanelBody title={__('Image Settings', 'custom-image')}>
                    <TextControl
                        label={__('Padding Top (px)', 'custom-image')}
                        type="number"
                        value={paddingTop}
                        onChange={(val) => setAttributes({ paddingTop: parseInt(val) })}
                    />
                    <TextControl
                        label={__('Padding Bottom (px)', 'custom-image')}
                        type="number"
                        value={paddingBottom}
                        onChange={(val) => setAttributes({ paddingBottom: parseInt(val) })}
                    />
                    <TextControl
                        label={__('Padding Left (rem)', 'custom-image')}
                        type="number"
                        value={paddingLeft}
                        onChange={(val) => setAttributes({ paddingLeft: parseFloat(val) })}
                    />
                    <TextControl
                        label={__('Padding Right (rem)', 'custom-image')}
                        type="number"
                        value={paddingRight}
                        onChange={(val) => setAttributes({ paddingRight: parseFloat(val) })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                <MediaUploadCheck>
                    <div style={imageWrapper} className="wp-block wp-image">
                        {imageUrl ? (
                            <img src={imageUrl} style={image} className="selected-image" alt={__('Selected Image', 'custom-image')} />
                        ) : (
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} className="select-image-button" variant="primary">
                                        {__('Select Image', 'custom-image')}
                                    </Button>
                                )}
                            />
                        )}
                    </div>
                </MediaUploadCheck>
            </div>
        </>
    );
};

export default ImageEdit;
