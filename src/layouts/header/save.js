import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { id, svgUrl } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div id={id} {...blockProps}>
            <div className="app-block app-block--preview">
                {svgUrl ? (
                    <object
                        type="image/svg+xml"
                        data={svgUrl}
                        style={{ maxWidth: '114px', height: '60px', width: '100%' }}
                        className="uploaded-svg"
                    >
                        Your browser does not support SVG
                    </object>
                ) : (
                    <div>No SVG uploaded</div>
                )}
            </div>
        </div>
    );
}
