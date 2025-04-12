import { useBlockProps, RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { plus, trash } from '@wordpress/icons';
import { Icon } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, listItems = [], imageItems = [], paddingLeft, paddingRight } = attributes;
    const blockProps = useBlockProps();

    useEffect(() => {
        if (!copyright) {
            setAttributes({ copyright: "© 2025 SKYRORA LIMITED" });
        }
    }, []);

    // Оновлення елемента списку
    const updateListItem = (value, index) => {
        const newItems = [...listItems];
        newItems[index] = value;
        setAttributes({ listItems: newItems });
    };

    // Додавання нової колонки для тексту
    const addTextColumn = () => {
        setAttributes({ listItems: [...listItems, ""] });
    };

    // Видалення колонки тексту по індексу
    const removeTextColumn = (index) => {
        const newItems = [...listItems];
        newItems.splice(index, 1);  // Correct way to remove an item by index
        setAttributes({ listItems: newItems });
    };

    // Оновлення елемента списку через редагування
    const editTextColumn = (index) => {
        const newText = prompt("Редагувати текст:", listItems[index]);
        if (newText !== null) {
            const updatedItems = [...listItems];
            updatedItems[index] = newText;
            setAttributes({ listItems: updatedItems });
        }
    };

    // Додавання нової колонки для зображень
    const addImageColumn = () => {
        setAttributes({ imageItems: [...imageItems, ""] });
    };

    // Видалення останньої колонки для зображень
    const removeImageColumn = () => {
        setAttributes({ imageItems: imageItems.slice(0, -1) });
    };

    // Додавання зображення до колонки
    const addImageItem = (media, index) => {
        const newImageItems = [...imageItems];
        newImageItems[index] = media.url;
        setAttributes({ imageItems: newImageItems });
    };

    // Видалення зображення з колонки
    const removeImageItem = (index) => {
        const newImageItems = [...imageItems];
        newImageItems[index] = "";
        setAttributes({ imageItems: newImageItems });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Padding Controls" initialOpen={true}>
                    <TextControl
                        label="Padding Left (rem)"
                        value={paddingLeft}
                        onChange={(value) => setAttributes({ paddingLeft: Number(value) })}
                        type="number"
                        min={0}
                    />
                    <TextControl
                        label="Padding Right (rem)"
                        value={paddingRight}
                        onChange={(value) => setAttributes({ paddingRight: Number(value) })}
                        type="number"
                        min={0}
                    />
                </PanelBody>

                <PanelBody title="Text Columns Controls" initialOpen={true}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {listItems.map((column, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: '8px',
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '6px',
                                }}
                            >
                                <span style={{ marginRight: '12px', color: '#000' }}>
                                    Елемент номер {index + 1}
                                </span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={() => removeTextColumn(index)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#000',
                                            cursor: 'pointer',
                                        }}
                                        aria-label={`Видалити елемент номер ${index + 1}`}
                                    >
                                        <Icon icon={trash} style={{ color: '#8B0000', fontSize: '18px' }} />
                                    </button>
                                    <button
                                        onClick={() => editTextColumn(index)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#000',
                                            cursor: 'pointer',
                                        }}
                                        aria-label={`Редагувати елемент номер ${index + 1}`}
                                    >
                                        <Icon icon="edit" style={{ color: '#0066CC', fontSize: '18px' }} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        <Button onClick={addTextColumn} style={{ backgroundColor: '#181B24', color: '#FFF' }}>
                            <Icon icon={plus} style={{ marginRight: '8px' }} />
                            Додати текстову колонку
                        </Button>
                    </div>
                </PanelBody>

                <PanelBody title="Image Upload Controls" initialOpen={true}>
                    <Button
                        onClick={removeImageColumn}
                        isDestructive
                        style={{ backgroundColor: '#8B0000', color: '#FFF' }} 
                    >
                        Видалити зображення колонку
                    </Button>
                    <Button onClick={addImageColumn}>Додати зображення колонку</Button>

                    <div>
                        {imageItems.map((_, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <MediaUpload
                                    onSelect={(media) => addImageItem(media, index)}
                                    allowedTypes={['image']}
                                    value={imageItems[index]}
                                    render={({ open }) => (
                                        <Button
                                            onClick={open}
                                            style={{
                                                backgroundColor: '#0000FF', 
                                                color: '#FFF' 
                                            }}
                                        >
                                            {imageItems[index] ? 'Змінити зображення' : 'Додати зображення'}
                                        </Button>
                                    )}
                                />
                                {imageItems[index] && (
                                    <div>
                                        <img src={imageItems[index]} alt={`Column Image ${index + 1}`} style={{ maxWidth: '100px', marginTop: '10px' }} />
                                        <Button
                                            isDestructive
                                            onClick={() => removeImageItem(index)}
                                            style={{ backgroundColor: '#8B0000', color: '#FFF' }} // Dark red background
                                        >
                                            Видалити зображення
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
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
                <div style={{ display: 'flex', gap: '20px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {imageItems.map((image, index) => (
                        <div style={{ maxWidth: '48px', width: '100%', height: '48px' }}>
                            <img key={index} src={image} alt={`Column Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
