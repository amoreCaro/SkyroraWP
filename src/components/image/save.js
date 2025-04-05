import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const { imageUrl } = attributes;

    const imageWrapper = {
        margin: "24px 0",
        maxWidth: "544px",
        width: "100%"
    }
    const image = {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block"
    }

    return (
        <div {...blockProps} style={imageWrapper}>
            <img
                src={imageUrl}
                alt="Image"
                style={image}
            />
        </div>
    );
}
