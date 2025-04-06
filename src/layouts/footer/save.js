import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { copyright, paddingLeft, paddingRight, listItems = [] } = attributes;
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
                paddingTop:'30px',
                paddingBottom:'48px',
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
            }}
        >
            <div className="footer-columns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {listItems.map((item, index) => (
                    <RichText.Content
                        key={index}
                        tagName="div"
                        value={item}
                        style={{
                            background: '#232125',
                            color: '#FBFBFB',
                            padding: '10px',
                            borderRadius: '8px',
                            minWidth: '150px',
                            textAlign: 'center'
                        }}
                    />
                ))}
            </div>

            <RichText.Content 
                tagName="span"
                value={copyright}
                style={copyrightStyle}
            />
        </div>
    );
}
