import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform, marginTop, marginBottom } = attributes;

    return (
        <RichText.Content
            {...useBlockProps.save({
                style: { color, fontSize, fontWeight, lineHeight, fontFamily, textTransform, marginTop, marginBottom, textAlign },
            })}
            tagName={`h${level}`}
            value={content}
        />
    );
}
