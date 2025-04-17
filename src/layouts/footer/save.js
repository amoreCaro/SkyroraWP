import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { copyright, paddingLeft, paddingRight, listItems = [], imageItems = [] } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div
            {...blockProps}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#181B24',
                paddingTop: '30px',
                paddingBottom: '48px',
                paddingLeft: `${paddingLeft || 0}rem`,
                paddingRight: `${paddingRight || 0}rem`,
            }}
        >

            <div style={{ display: 'flex', gap: '20px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {imageItems.map((image, index) => (
                    <div style={{ maxWidth: '48px', width: '100%', height: '48px' }}>
                        <img key={index} src={image} alt={`Column Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
            <div className="footer-columns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {listItems.map((item, index) => (
                    <RichText.Content
                        key={index}
                        tagName="a"
                        value={item}
                        style={{
                            fontSize: '12px',
                            lineHeight: '100%',
                            color: '#FFFFFF',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontFamily: 'Bai Jamjuree, sans-serif',
                            textDecoration: 'none'
                        }}
                    />
                ))}
            </div>

            <span style={{
                fontFamily: 'Bai Jamjuree, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '100%',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: "#B8BDCC",
                marginTop: '24px'
            }}>
                {copyright}
            </span>
        </div>
    );
}
