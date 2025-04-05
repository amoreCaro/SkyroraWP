import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const { imageUrl } = attributes;

    return (
        <div {...blockProps} className="wp-image">
            <img
                src={imageUrl}
                alt="Selected"
                className="wp-image__img"
            />
        </div>
    );
}
