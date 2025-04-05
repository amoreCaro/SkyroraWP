import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { id, svgUrl, text1, text2 } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div
            id={id}
            {...blockProps}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <div>
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
            <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '12px' }}>
                    <RichText.Content
                        tagName="p"
                        value={text1}
                        style={{ margin: '0px 0px 8px 0px' }}
                    />
                    <RichText.Content
                        tagName="p"
                        value={text2}
                        style={{ margin: '0px' }}
                    />
                </div>
                <div style={{ position: 'absolute', right: '0px', top: '0px', height: '32px', width: '2px', backgroundColor: '#164BDC' }}></div>
            </div>
        </div>
    );
}
