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
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
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
