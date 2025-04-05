import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, id, listItems } = attributes;
    const blockProps = useBlockProps();
    const [newListItem, setNewListItem] = useState("");
    const [newListItemLink, setNewListItemLink] = useState(""); // Додаємо стан для посилання

    useEffect(() => {
        if (!attributes.copyright) {
            setAttributes({ copyright: "© 2025 SKYRORA LIMITED" });
        }
        if (!attributes.listItems) {
            setAttributes({ listItems: [] });
        }
    }, []);

    const handleAddListItem = () => {
        if (newListItem.trim() !== "" && newListItemLink.trim() !== "") {
            const updatedList = [
                ...listItems,
                { text: newListItem, link: newListItemLink } // Додаємо текст і посилання
            ];
            setAttributes({ listItems: updatedList });
            setNewListItem(""); 
            setNewListItemLink(""); // Очищаємо поле для посилання
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
            
            {/* Введення для посилання */}
            <input
                type="text"
                value={newListItemLink}
                onChange={(e) => setNewListItemLink(e.target.value)}
                placeholder="Enter link for list item"
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
                        // Перевірка на наявність посилання
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
