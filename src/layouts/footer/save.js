import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { copyright, id } = attributes;
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
    }

    return (
        <div
            id={id}
            {...blockProps}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
            <RichText.Content 
                tagName="span"
                value={copyright}
                style={copyrightStyle}
            />
        </div>
    );
}
