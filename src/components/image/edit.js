import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ImageEdit = ({ attributes, setAttributes }) => {
    const { imageUrl, imageId } = attributes;

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    return (
        <>
            {!imageUrl && (
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <div className='wp-group__image'>
                            <Button onClick={open} className="select-image-button">
                                {imageUrl ? (
                                    <img src={imageUrl} className="selected-image" alt="Selected" />
                                ) : (
                                    'Select Image'
                                )}
                            </Button>
                            {imageUrl && (
                                <Button 
                                    onClick={() => setAttributes({ imageUrl: '', imageId: undefined })} 
                                    className="remove-image-button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" className="cf-icon-svg">
                                        <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z" />
                                    </svg>
                                </Button>
                            )}
                        </div>
                    )}
                />
            )}
        </>
    );
};

export default ImageEdit;