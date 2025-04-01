import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform } = attributes;

    return (
        <section {...useBlockProps.save()}>
            <RichText.Content
                style={{
                    color,
                    fontWeight,
                    fontSize,
                    lineHeight,
                    fontFamily,
                    textTransform,
                    textAlign,
                }}
                tagName={`h${level}`}
                value={content}
            />
        </section>
    );
};

export default save;
