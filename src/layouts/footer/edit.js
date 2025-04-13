import { useBlockProps, RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { plus, trash } from '@wordpress/icons';
import { Icon } from '@wordpress/components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Edit({ attributes, setAttributes }) {
    const { copyright, listItems = [], imageItems = [], paddingLeft, paddingRight } = attributes;
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

    const addTextColumn = () => {
        setAttributes({ listItems: [...listItems, ""] });
    };

    const removeTextColumn = (index) => {
        const newItems = [...listItems];
        newItems.splice(index, 1);
        setAttributes({ listItems: newItems });
    };

    const handleEditTextColumn = (value, index) => {
        updateListItem(value, index);
    };

    const addImageColumn = () => {
        setAttributes({ imageItems: [...imageItems, ""] });
    };

    const removeImageColumn = () => {
        setAttributes({ imageItems: imageItems.slice(0, -1) });
    };

    const addImageItem = (media, index) => {
        const newImageItems = [...imageItems];
        newImageItems[index] = media.url;
        setAttributes({ imageItems: newImageItems });
    };

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
                    <DragDropContext
                        onDragEnd={(result) => {
                            const { source, destination } = result;
                            if (!destination) return;

                            const reorderedItems = Array.from(listItems);
                            const [movedItem] = reorderedItems.splice(source.index, 1);
                            reorderedItems.splice(destination.index, 0, movedItem);

                            setAttributes({ listItems: reorderedItems });
                        }}
                    >
                        <Droppable droppableId="columns-list">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                >
                                    {listItems.map((column, index) => (
                                        <Draggable key={index} draggableId={`item-${index}`} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        marginBottom: '8px',
                                                        padding: '8px',
                                                        border: '1px solid #ccc',
                                                        borderRadius: '6px',
                                                        backgroundColor: '#fff',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    <span style={{ marginRight: '12px', color: '#000', flex: 1 }}>
                                                        {listItems[index]?.trim() || `Елемент номер ${index + 1}`}
                                                    </span>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <Button
                                                            onClick={() => handleEditTextColumn(column, index)}
                                                            style={{
                                                                background: 'none',
                                                                border: 'none',
                                                                color: '#000',
                                                                cursor: 'pointer',
                                                            }}
                                                            aria-label={`Редагувати елемент номер ${index + 1}`}
                                                        >
                                                            <Icon icon="edit" style={{ color: '#0066CC', fontSize: '18px' }} />
                                                        </Button>
                                                        <Button
                                                            onClick={() => removeTextColumn(index)}
                                                            style={{
                                                                background: 'none',
                                                                border: 'none',
                                                                color: '#FF5C5C',
                                                                cursor: 'pointer',
                                                                borderRadius: '6px',
                                                                padding: '5px',
                                                            }}
                                                            aria-label={`Видалити елемент номер ${index + 1}`}
                                                        >
                                                            <Icon icon={trash} style={{ color: '#FF5C5C', fontSize: '18px' }} />
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <Button onClick={addTextColumn} style={{ backgroundColor: '#181B24', color: '#FFF', marginTop: '10px' }}>
                        <Icon icon={plus} style={{ marginRight: '8px' }} />
                        Додати текстову колонку
                    </Button>
                </PanelBody>

                <PanelBody title="Image Upload Controls" initialOpen={true}>
                    <Button
                        onClick={removeImageColumn}
                        isDestructive
                        style={{
                            backgroundColor: '#FF5C5C',
                            color: '#FFF',
                            borderRadius: '6px',
                            padding: '5px',
                        }}
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
                                                backgroundColor: '#0066CC',
                                                color: '#FFF',
                                                borderRadius: '6px',
                                                padding: '8px'
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
                                            style={{
                                                backgroundColor: '#FF5C5C',
                                                color: '#FFF',
                                                borderRadius: '6px',
                                                padding: '5px',
                                            }}
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
                        <div key={index} style={{ maxWidth: '48px', width: '100%', height: '48px' }}>
                            <img src={image} alt={`Column Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                        color: "#FFF",
                        marginTop: '24px'
                    }}
                />
            </div>
        </>
    );
}
