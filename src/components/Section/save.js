import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes, children }) => {
    const { marginTop, marginBottom } = attributes;

    return (
        <div
            {...useBlockProps.save()}
            style={{
                marginTop,
                marginBottom,
            }}
        >
            {children}
        </div>
    );
};

export default Save;
