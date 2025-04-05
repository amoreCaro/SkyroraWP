import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    // Set the default value for copyright text if it's empty
    useEffect(() => {
        if (!attributes.copyright) {
            setAttributes({ copyright: "© 2025 SKYRORA LIMITED" });
        }
    }, []);

    return (
        <div {...blockProps} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <RichText
                tagName="p"
                value={attributes.copyright}
                onChange={(newCopyright) => setAttributes({ copyright: newCopyright })}
                placeholder="Enter copyright text"
                style={{
                    // fontFamily: 'Bai Jamjuree',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    textTransform: 'uppercase', 
                    color: "#B8BDCC"
                }}
            />
        </div>
    );
}
