import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, id, listItems } = attributes; // Додаємо listItems для зберігання списку
    const blockProps = useBlockProps();

    // Стан для контролю введеного елементу списку
    const [newListItem, setNewListItem] = useState("");

    useEffect(() => {
        if (!attributes.copyright) {
            setAttributes({ copyright: "© 2025 SKYRORA LIMITED" });
        }
        if (!attributes.listItems) {
            setAttributes({ listItems: [] });
        }
    }, []);

    const handleAddListItem = () => {
        if (newListItem.trim() !== "") {
            // Додаємо новий елемент до списку
            const updatedList = [...listItems, newListItem];
            setAttributes({ listItems: updatedList });
            setNewListItem(""); // Очищаємо поле вводу
        }
    };

    return (
        <div {...blockProps} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* RichText для copyright */}
            <RichText
                tagName="p"
                value={copyright}
                onChange={(newCopyright) => setAttributes({ copyright: newCopyright })}
                placeholder="Enter copyright text"
                style={{
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    textTransform: 'uppercase', 
                    color: "#B8BDCC"
                }}
            />

            {/* Введення для елементу списку */}
            <input
                type="text"
                value={newListItem}
                onChange={(e) => setNewListItem(e.target.value)}
                placeholder="Enter list item"
                style={{ marginTop: '10px', padding: '5px' }}
            />
            <button
                onClick={handleAddListItem}
                style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#7D0AF2', color: 'white' }}
            >
                Add list
            </button>

            {/* Виведення списку */}
            {listItems && listItems.length > 0 && (
                <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
                    {listItems.map((item, index) => (
                        <li key={index} style={{ color: "#B8BDCC", textAlign: 'center' }}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
