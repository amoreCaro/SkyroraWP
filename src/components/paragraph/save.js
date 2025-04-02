import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { content, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform, marginTop, marginBottom } = attributes;

    return (
        <div {...useBlockProps.save()} style={{ marginTop, marginBottom }}>
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
                tagName="p"  // Використовуємо <p> тег
                value={content}
            />
        </div>
    );
};

export default save;
