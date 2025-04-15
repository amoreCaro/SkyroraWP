import {
    useBlockProps,
    RichText,
    MediaUpload,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button,
    Dropdown,
    Icon,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { plus, trash, edit, close } from '@wordpress/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Edit({ attributes, setAttributes }) {
    const {
        copyright,
        listItems = [],
        imageItems = [],
        paddingLeft,
        paddingRight,
    } = attributes;

    const blockProps = useBlockProps();

    useEffect(() => {
        if (!copyright) {
            setAttributes({ copyright: '© 2025 SKYRORA LIMITED' });
        }
    }, []);

    const updateListItem = (value, index) => {
        const newItems = [...listItems];
        newItems[index] = value;
        setAttributes({ listItems: newItems });
    };

    const addTextColumn = () => setAttributes({ listItems: [...listItems, ''] });

    const removeTextColumn = (index) => {
        const newItems = [...listItems];
        newItems.splice(index, 1);
        setAttributes({ listItems: newItems });
    };

    const handleEditTextColumn = (value, index) => updateListItem(value, index);

    const addImageColumn = () => setAttributes({ imageItems: [...imageItems, ''] });

    const addImageItem = (media, index) => {
        const newImageItems = [...imageItems];
        newImageItems[index] = media.url;
        setAttributes({ imageItems: newImageItems });
    };

    const removeImageItem = (index) => {
        const newImageItems = [...imageItems];
        newImageItems[index] = '';
        setAttributes({ imageItems: newImageItems });
    };

    const removeImageColumn = (indexToRemove) => {
        const newItems = imageItems.filter((_, index) => index !== indexToRemove);
        setAttributes({ imageItems: newItems });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Padding Controls" initialOpen={true}>
                    <TextControl
                        label="Padding Left (rem)"
                        value={paddingLeft}
                        onChange={(value) =>
                            setAttributes({ paddingLeft: Number(value) })
                        }
                        type="number"
                        min={0}
                    />
                    <TextControl
                        label="Padding Right (rem)"
                        value={paddingRight}
                        onChange={(value) =>
                            setAttributes({ paddingRight: Number(value) })
                        }
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
                                >
                                    {listItems.map((column, index) => (
                                        <Draggable
                                            key={`item-${index}`}
                                            draggableId={`item-${index}`}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        marginBottom: '12px',
                                                        borderRadius: '8px',
                                                        backgroundColor: '#fff',
                                                        padding: '12px 24px',
                                                        height: '48px',
                                                        border: '1px solid #1e1e1e',
                                                        width: '100%',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    <Dropdown
                                                        renderToggle={({ onToggle }) => (
                                                            <Button
                                                                onClick={onToggle}
                                                                style={{
                                                                    all: 'unset',
                                                                    padding: '12px 16px',
                                                                    backgroundColor: 'transparent',
                                                                    borderRadius: '8px',
                                                                    border: 'none',
                                                                    color: '#181B24',
                                                                    fontSize: '16px',
                                                                    fontWeight: '600',
                                                                    width: '100%', // Ensure button spans the entire width
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                }}
                                                            >
                                                                <span>{column ? `Колонка ${index + 1}` : 'Нова колонка'}</span>
                                                                <Icon icon={edit} />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div
                                                                style={{
                                                                    padding: '20px',
                                                                    background: '#fff',
                                                                    width: '280px',
                                                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                                                                    borderRadius: '8px',
                                                                }}
                                                            >
                                                                <RichText
                                                                    tagName="div"
                                                                    value={column}
                                                                    onChange={(value) => handleEditTextColumn(value, index)}
                                                                    placeholder={`Елемент номер ${index + 1}`}
                                                                    style={{
                                                                        padding: '10px 14px',
                                                                        border: '1px solid #ccc',
                                                                        borderRadius: '8px',
                                                                        marginBottom: '12px',
                                                                        width: '100%', 
                                                                    }}
                                                                />
                                                                <Button
                                                                    onClick={() => removeTextColumn(index)}
                                                                    style={{
                                                                        padding: '12px 20px',
                                                                        backgroundColor: '#FFE4E6',
                                                                        color: '#B91C1C',
                                                                        borderRadius: '8px',
                                                                        fontSize: '16px',
                                                                        fontWeight: '500',
                                                                        width: '100%', 
                                                                    }}
                                                                >
                                                                    <Icon icon={close} style={{ marginRight: '8px' }} />
                                                                    Видалити
                                                                </Button>
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <Button
                        onClick={addTextColumn}
                        style={{
                            backgroundColor: '#1e1e1e',
                            color: '#fff',
                            width: '100%',
                            height: '44px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Icon icon={plus} style={{ marginRight: '8px' }} />
                        <span>Додати колонку</span>
                    </Button>
                </PanelBody>

                <PanelBody title="Image Upload Controls" initialOpen={true}>
                    <DragDropContext
                        onDragEnd={(result) => {
                            const { source, destination } = result;
                            if (!destination) return;
                            const reorderedItems = Array.from(imageItems);
                            const [movedItem] = reorderedItems.splice(source.index, 1);
                            reorderedItems.splice(destination.index, 0, movedItem);
                            setAttributes({ imageItems: reorderedItems });
                        }}
                    >
                        <Droppable droppableId="image-list">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {imageItems.map((item, index) => (
                                        <Draggable
                                            key={`image-${index}`}
                                            draggableId={`image-${index}`}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        marginBottom: '12px',
                                                        borderRadius: '8px',
                                                        backgroundColor: '#fff',
                                                        padding: '12px 24px',
                                                        height: '48px',
                                                        border: '1px solid #1e1e1e',
                                                        width: '100%',
                                                        fontWeight: '600',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    <Dropdown
                                                        renderToggle={({ onToggle }) => (
                                                            <Button
                                                                onClick={onToggle}
                                                                style={{
                                                                    padding: '8px 12px',
                                                                    backgroundColor: 'transparent',
                                                                    borderRadius: '8px',
                                                                    color: '#181B24',
                                                                    fontSize: '14px',
                                                                    fontWeight: '500',
                                                                    width: '100%', // Ensure button spans the entire width
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                }}
                                                            >
                                                                <span>{item ? 'Редагувати зображення' : 'Додати зображення'}</span>
                                                                <Icon icon={edit} />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div
                                                                style={{
                                                                    padding: '16px',
                                                                    background: '#fff',
                                                                    width: '280px',
                                                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                                                                    borderRadius: '10px',
                                                                }}
                                                            >
                                                                {item ? (
                                                                    <img
                                                                        src={item}
                                                                        alt={`Image Preview ${index + 1}`}
                                                                        style={{
                                                                            width: '100%', // Ensure image takes full width
                                                                            height: 'auto',
                                                                            borderRadius: '10px',
                                                                            objectFit: 'cover',
                                                                            marginBottom: '16px',
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        style={{
                                                                            width: '100%', // Ensure placeholder spans full width
                                                                            height: '200px',
                                                                            border: '2px dashed #D1D5DB',
                                                                            borderRadius: '12px',
                                                                            background: '#F9FAFB',
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            color: '#6B7280',
                                                                            marginBottom: '16px',
                                                                        }}
                                                                    >
                                                                        <Icon icon={plus} style={{ fontSize: '28px', marginBottom: '8px' }} />
                                                                        <span style={{ fontSize: '15px', fontWeight: '500' }}>Завантажити зображення</span>
                                                                    </div>
                                                                )}

                                                                <MediaUpload
                                                                    onSelect={(media) => addImageItem(media, index)}
                                                                    allowedTypes={['image']}
                                                                    render={({ open }) => (
                                                                        <Button
                                                                            onClick={open}
                                                                            style={{
                                                                                backgroundColor: '#000',
                                                                                color: '#fff',
                                                                                width: '100%',
                                                                                height: '44px',
                                                                                borderRadius: '8px',
                                                                                fontWeight: '500',
                                                                                marginBottom: '8px',
                                                                            }}
                                                                        >
                                                                            {item ? 'Змінити зображення' : 'Завантажити зображення'}
                                                                        </Button>
                                                                    )}
                                                                />

                                                                <Button
                                                                    onClick={() => removeImageColumn(index)}
                                                                    style={{
                                                                        padding: '12px 20px',
                                                                        backgroundColor: '#FFE4E6',
                                                                        color: '#B91C1C',
                                                                        borderRadius: '8px',
                                                                        fontSize: '16px',
                                                                        fontWeight: '500',
                                                                        width: '100%', 
                                                                    }}
                                                                >
                                                                    <Icon icon={close} style={{ marginRight: '6px' }} />
                                                                    Видалити
                                                                </Button>
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Button
                            onClick={addImageColumn}
                            style={{
                                backgroundColor: '#1e1e1e',
                                color: '#fff',
                                width: '100%', // Ensure the button spans the entire width
                                height: '44px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon icon={plus} style={{ marginRight: '8px' }} />
                            Додати колонку
                        </Button>
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
                    paddingRight: `${paddingRight || 0}rem`,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        marginBottom: '16px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {imageItems.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                maxWidth: '48px',
                                width: '100%',
                                height: '48px',
                            }}
                        >
                            <img
                                src={image}
                                alt={`Column Image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}
                >
                    {listItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>

                <div style={{ marginTop: '30px', color: '#6B7280', fontSize: '13px' }}>
                    {copyright}
                </div>
            </div>
        </>
    );
}
