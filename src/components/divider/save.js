// Save.js
import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { id, align, style, color, paddingLeft = 3, paddingRight = 3 } = attributes;

    return (
        <div
            style={{
                marginTop: '16px',
                marginBottom: '16px',
                paddingLeft: `${paddingLeft}rem`,
                paddingRight: `${paddingRight}rem`,
            }}
        >
            <hr
                {...useBlockProps.save()}
                id={id}
                style={{
                    textAlign: align,
                    borderStyle: style,
                    borderColor: color,
                    borderWidth: '1px',
                }}
            />
        </div>
    );
};

export default Save;
