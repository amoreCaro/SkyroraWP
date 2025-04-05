import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { copyright, listItems = [] } = attributes;
    const blockProps = useBlockProps.save();

    const copyrightStyle = {
        fontFamily: 'Bai Jamjuree',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '100%',
        letterSpacing: '0px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: "#B8BDCC"
    };

    return (
        <div
            {...blockProps}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
            {/* Виведення copyright */}
            <RichText.Content 
                tagName="span"
                value={copyright}
                style={copyrightStyle}
            />

            {/* Виведення списку */}
            {listItems && listItems.length > 0 && (
                <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
                    {listItems.map((item, index) => (
                        item.link ? (
                            <li key={index} style={{ color: "#B8BDCC", textAlign: 'center' }}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.text}
                                </a>
                            </li>
                        ) : (
                            <li key={index} style={{ color: "#B8BDCC", textAlign: 'center' }}>
                                {item.text}
                            </li>
                        )
                    ))}
                </ul>
            )}
        </div>
    );
}
