import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls
} from '@wordpress/block-editor';
import {
    Button,
    PanelBody,
    TextControl
} from '@wordpress/components';

const ImageEdit = ({ attributes, setAttributes }) => {
    const { imageUrl, imageId, paddingLeft, paddingRight } = attributes;

    const imageWrapper = {
        margin: "24px 0",
        maxWidth: "544px",
        width: "100%",
        paddingLeft: `${paddingLeft || 3}rem`,
        paddingRight: `${paddingRight || 3}rem`,
    };

    const image = {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
    };

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    const onRemoveImage = () => {
        setAttributes({ imageUrl: '', imageId: undefined });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Image Settings', 'custom-image')}>
                    <TextControl
                        label={__('Padding Left (rem)', 'custom-image')}
                        type="number"
                        value={paddingLeft}
                        onChange={(val) => setAttributes({ paddingLeft: val })}
                    />
                    <TextControl
                        label={__('Padding Right (rem)', 'custom-image')}
                        type="number"
                        value={paddingRight}
                        onChange={(val) => setAttributes({ paddingRight: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                <MediaUploadCheck>
                    <div style={imageWrapper} className="wp-image">
                        {imageUrl ? (
                            <>
                                <img src={imageUrl} style={image} className="selected-image" alt="Selected" />
                                <div className="editor-block-toolbar">
                                    <Button
                                        isLink
                                        onClick={onRemoveImage}
                                        icon="no-alt"
                                        label={__('Remove Image')}
                                        className="remove-image-button"
                                    />
                                </div>
                            </>
                        ) : (
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} className="select-image-button">
                                        {__('Select Image')}
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
