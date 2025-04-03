import { useBlockProps } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { content, textAlign, color, backgroundColor, fontWeight, fontSize, lineHeight, fontFamily, textTransform } = attributes;

    return (
        <button
            {...useBlockProps.save({
                style: {
                    textAlign,
                    color,
                    backgroundColor,
                    fontWeight,
                    fontSize,
                    lineHeight,
                    fontFamily,
                    textTransform,
                    padding: '10px 20px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-block',
                },
            })}
        >
            {content}
        </button>
    );
};

export default save;
