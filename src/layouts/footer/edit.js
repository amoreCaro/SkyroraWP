import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, listItems = [] } = attributes;
    const blockProps = useBlockProps();

    useEffect(() => {
        if (!copyright) {
            setAttributes({ copyright: "© 2025 SKYRORA LIMITED" });
        }
    }, []);

    const updateListItem = (value, index) => {
        const newItems = [...listItems];
        newItems[index] = value;
        setAttributes({ listItems: newItems });
    };

    const addListItem = () => {
        setAttributes({ listItems: [...listItems, ""] });
    };

    return (
        <div {...blockProps} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#181B24',
            paddingTop: '30px',
            paddingBottom: '48px'
        }}>
            <div className="footer-columns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {listItems.map((item, index) => (
                    <RichText
                        key={index}
                        tagName="div"
                        value={item}
                        onChange={(value) => updateListItem(value, index)}
                        placeholder={`Column ${index + 1}`}
                        style={{
                            fontSize:'12px',
                            lineHeight:'100%',
                            color: '#FFFFFF',
                            gap: '16px',
                            textAlign: 'center',
                            textTransform:'uppercase'
                        }}
                    />
                ))}
            </div>

            <button onClick={addListItem} style={{
                marginTop: '20px',
                backgroundColor: '#164BDC',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer'
            }}>
                Додати колонку
            </button>

            <RichText
                tagName="p"
                value={copyright}
                onChange={(newVal) => setAttributes({ copyright: newVal })}
                placeholder="Enter copyright text"
                style={{
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: "#B8BDCC",
                    marginTop: '24px'
                }}
            />
        </div>
    );
}
