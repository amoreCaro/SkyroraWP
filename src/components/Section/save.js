import { useBlockProps } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { marginTop, marginBottom } = attributes;

    return (
        <div {...useBlockProps.save({
            style: {
                marginTop,
                marginBottom,
            }
        })}>
            <p>Content of the Section Block</p>
        </div>
    );
};

export default save;
