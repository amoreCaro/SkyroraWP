import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const {
        content,
        level,
        textAlign,
        color,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform,
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="wp-heading">
            <RichText.Content
                tagName={`h${level}`}
                value={content}
                style={{
                    color,
                    fontWeight,
                    fontSize,
                    lineHeight,
                    fontFamily,
                    textTransform,
                    textAlign,
                }}
            />
        </div>
    );
};

export default save;
