import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from 'react';

export default function save() {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
        </div>
    );
}
