import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const { imageUrl } = attributes;

    return (
        <div {...blockProps} className="wp-image" style={{ margin: '24px 0', maxWidth: '544px', width: '100%' }}>
            <img
                src={imageUrl}
                alt="Selected"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
        </div>
    );
}
