import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { id, imgUrl, text1, text2, paddingLeft, paddingRight } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div
            id={id}
            {...blockProps}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#181b24',
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                paddingTop: '20px',
                paddingBottom: '32px',
            }}
        >
            <div>
                <div style={{ maxWidth: '114px', height: '60px', width: '100%' }}>
                    {imgUrl ? (
                        <img
                            src={imgUrl}
                            alt="Uploaded"
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            className="uploaded-img"
                        />
                    ) : (
                        <div>No image uploaded</div>
                    )}
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginRight: '12px',
                    }}
                >
                    <RichText.Content
                        tagName="p"
                        value={text1}
                        style={{ margin: '0px 0px 8px 0px', color: '#FFFFFF' }}
                    />
                    <RichText.Content
                        tagName="p"
                        value={text2}
                        style={{ margin: '0px', color: '#FFFFFF' }}
                    />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        right: '0px',
                        top: '0px',
                        height: '32px',
                        width: '2px',
                        backgroundColor: '#164BDC',
                    }}
                ></div>
            </div>
        </div>
    );
}
