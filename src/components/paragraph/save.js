import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const {
        content,
        textAlign,
        color,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform,
        paddingLeft,
        paddingRight,
    } = attributes;

    return (
        <div {...useBlockProps.save()} className="wp-paragraph">
            <RichText.Content
                style={{
                    color,
                    fontWeight,
                    fontSize,
                    lineHeight,
                    fontFamily,
                    textTransform,
                    textAlign,
                    paddingLeft: `${paddingLeft || 3}rem`,
                    paddingRight: `${paddingRight || 3}rem`,
                }}
                tagName="p"
                value={content}
            />
        </div>
    );
};

export default save;
