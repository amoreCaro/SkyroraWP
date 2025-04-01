import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { id, align, style, color } = attributes;

    return (
        <hr
            {...useBlockProps.save()}
            id={id}
            style={{
                textAlign: align,
                borderStyle: style,
                borderColor: color,
                borderWidth: '2px',
                padding: '12px',
            }}
        />
    );
};

export default Save;
