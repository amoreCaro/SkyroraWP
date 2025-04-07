import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { copyright, paddingLeft, paddingRight, listItems = [], imageItems = [] } = attributes;
    const blockProps = useBlockProps.save();

    const copyrightStyle = {
        fontFamily: 'Bai Jamjuree',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '100%',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: "#B8BDCC",
        marginTop: '24px'
    };

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

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {imageItems.map((image, index) => (
                    <img key={index} src={image} alt={`Column Image ${index + 1}`} style={{ width: '100px', height: 'auto' }} />
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
                            textTransform: 'uppercase'
                        }}
                    />
                ))}
            </div>


            <span style={copyrightStyle}>
                {copyright}
            </span>
        </div>
    );
}
