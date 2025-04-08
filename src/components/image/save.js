import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const {
        imageUrl,
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

        margin: "0",
    };

    const image = {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
    };

    return (
        <div {...blockProps} style={imageWrapper}>
            <img
                src={imageUrl}
                alt=""
                style={image}
            />
        </div>
    );
}
