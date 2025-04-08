import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { backgroundColor, height } = attributes;

    return (
        <div {...useBlockProps.save()} className="wp-block wp-spacer" style={{
            backgroundColor: backgroundColor,
            height: height,
        }}>

        </div>
    );
};

export default Save;
