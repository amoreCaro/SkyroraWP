import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ImageEdit = ({ attributes, setAttributes }) => {
    const { imageUrl, imageId } = attributes;

    const imageWrapper = {
        margin: "24px 0",
        maxWidth: "544px",
        width: "100%",
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
        
        <div {...useBlockProps()}>
            <MediaUploadCheck>
                <div style={imageWrapper} className="wp-image">
                    {/* Display selected image */}
                    {imageUrl ? (
                        <>
                            <img src={imageUrl} style={image} className="selected-image" alt="Selected" />

                            {/* Default block toolbar with the remove button */}
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
    );
};

export default ImageEdit;
