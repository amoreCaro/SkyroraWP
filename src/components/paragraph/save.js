import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { content, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform } = attributes;

    return (
        <RichText.Content
            {...useBlockProps.save({
                style: {
                    color,
                    fontWeight,
                    fontSize,
                    lineHeight,
                    fontFamily,
                    textTransform,
                    textAlign,
                },
            })}
            tagName="p"
            value={content}
        />
    );
};

export default save;
