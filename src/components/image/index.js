import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('app/image', {
    title: 'Custom Image Block',
    icon: 'format-image',
    category: 'media',
    attributes: {
        imageUrl: {
            type: 'string',
            default: '',
        },
    },

    edit({ attributes, setAttributes }) {
        const { imageUrl } = attributes;

        const onSelectImage = (media) => {
            setAttributes({
                imageUrl: media.url,
            });
        };

        return (
            <Fragment>
                <div className="image-block">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Selected" />
                    ) : (
                        <p>Select an image</p>
                    )}
                    <MediaUpload
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        value={imageUrl}
                        render={({ open }) => (
                            <Button onClick={open}>Select Image</Button>
                        )}
                    />
                </div>
            </Fragment>
        );
    },

    save({ attributes }) {
        const { imageUrl } = attributes;
        return <img src={imageUrl} alt="Selected" />;
    },
});
