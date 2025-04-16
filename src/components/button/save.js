import { useBlockProps } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const {
        content,
        textAlign,
        color,
        backgroundColor,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform
    } = attributes;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .wp-button-container {
                        margin-left: 12px !important; 
                    }
                }
            `}} />

            <div
                {...useBlockProps.save({
                    className: "wp-button-container",
                    style: {
                        marginBottom: '20px',
                        marginTop: '20px',
                        marginLeft: '48px',
                    },
                })}
            >
                <button
                    {...useBlockProps.save({
                        className: "wp-button",
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
                            width: '100%',
                            height: '56px',
                        },
                    })}
                >
                    {content}
                </button>
            </div>
        </>
    );
};

export default save;
