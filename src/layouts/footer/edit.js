import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, listItems = [], paddingLeft, paddingRight } = attributes;
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
        <>
            <InspectorControls>
                <PanelBody title="Padding Controls" initialOpen={true}>
                    <TextControl
                        label="Padding Left (rem)"
                        value={paddingLeft || 0}
                        onChange={(value) => setAttributes({ paddingLeft: Number(value) })}
                        type="number"
                        min={0}
                    />
                    <TextControl
                        label="Padding Right (rem)"
                        value={paddingRight || 0}
                        onChange={(value) => setAttributes({ paddingRight: Number(value) })}
                        type="number"
                        min={0}
                    />
                </PanelBody>
            </InspectorControls>

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
                    paddingRight: `${paddingRight || 0}rem`
                }}
            >
                <div className="footer-columns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {listItems.map((item, index) => (
                        <RichText
                            key={index}
                            tagName="div"
                            value={item}
                            onChange={(value) => updateListItem(value, index)}
                            placeholder={`Column ${index + 1}`}
                            style={{
                                fontSize: '12px',
                                lineHeight: '100%',
                                color: '#FFFFFF',
                                gap: '16px',
                                textAlign: 'center',
                                textTransform: 'uppercase'
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
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: "#B8BDCC",
                        marginTop: '24px'
                    }}
                />
            </div>
        </>
    );
}
