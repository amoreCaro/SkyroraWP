import { useBlockProps } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { content, textAlign, color, backgroundColor, fontWeight, fontSize, lineHeight, fontFamily, textTransform } = attributes;

    return (
        <div
            {...useBlockProps.save({
                style: {
                    marginBottom: '20px',  
                    marginTop: '20px',    
                },
            })}
        >
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
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-block',
                        maxWidth: '256px',   
                        height: '56px',    
                    },
                })}
            >
                {content}
            </button>
        </div>
    );
};

export default save;
