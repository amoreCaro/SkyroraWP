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

    const addImageColumn = () =>
        setAttributes({ imageItems: [...imageItems, ''] });

    const removeImageColumn = () =>
        setAttributes({ imageItems: imageItems.slice(0, -1) });

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

    const iconButtonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '6px',
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
                                                    <RichText
                                                        tagName="div"
                                                        value={column}
                                                        onChange={(value) =>
                                                            handleEditTextColumn(value, index)
                                                        }
                                                        placeholder={`Елемент номер ${index + 1}`}
                                                        style={{ flex: 1, marginRight: '10px' }}
                                                    />
                                                    <Button
                                                        onClick={() => removeTextColumn(index)}
                                                        style={{
                                                            ...iconButtonStyle,

                                                            color: '#000',
                                                        }}
                                                    >
                                                        <Icon icon={close} />

                                                    </Button>
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
                            backgroundColor: '#181B24',
                            color: '#FFF',
                            marginTop: '10px',
                        }}
                    >
                        <Icon icon={plus} style={{ marginRight: '8px' }} />
                        Додати текстову колонку
                    </Button>
                </PanelBody>

                <PanelBody title="Image Upload Controls" initialOpen={true}>
                    {imageItems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                padding: '12px',
                                marginBottom: '12px',
                                background: '#fff',
                            }}
                        >
                            {item ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={item}
                                        alt={`Image ${index + 1}`}
                                        style={{
                                            maxWidth: '100px',
                                            borderRadius: '6px',
                                        }}
                                    />
                                    <Dropdown
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button
                                                onClick={onToggle}
                                                style={{
                                                    ...iconButtonStyle,
                                                    color: '#181B24',
                                                }}
                                            >
                                                <Icon icon={edit} />
                                            </Button>
                                        )}
                                        renderContent={() => (
                                            <div
                                                style={{
                                                    padding: '10px',
                                                    background: '#f9f9f9',
                                                    width: '280px',

                                                }}
                                            >
                                                <MediaUpload
                                                    onSelect={(media) =>
                                                        addImageItem(media, index)
                                                    }
                                                    allowedTypes={['image']}
                                                    render={({ open }) => (
                                                        <Button
                                                            onClick={open}
                                                            isSecondary
                                                            style={{ marginBottom: '8px' }}
                                                        >
                                                            Змінити зображення
                                                        </Button>
                                                    )}
                                                />
                                                <img
                                                    src={item}
                                                    alt={`Image Preview ${index + 1}`}
                                                    style={{
                                                        width: '100px',
                                                        borderRadius: '6px',
                                                        display: 'block',
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Button
                                        onClick={() => removeTextColumn(index)}
                                        style={{
                                            ...iconButtonStyle,

                                            color: '#000',
                                        }}
                                    >
                                        <Icon icon={close} />

                                    </Button>
                                </div>
                            ) : (
                                <MediaUpload
                                    onSelect={(media) => addImageItem(media, index)}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button
                                            onClick={open}
                                            style={{
                                                backgroundColor: '#0066CC',
                                                color: '#FFF',
                                            }}
                                        >
                                            Додати зображення
                                        </Button>
                                    )}
                                />
                            )}
                        </div>
                    ))}

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            marginTop: '10px',
                        }}
                    >
                        <Button
                            onClick={addImageColumn}
                            style={{
                                backgroundColor: '#181B24',
                                color: '#FFF',
                                borderRadius: '8px',
                                padding: '8px 16px',
                            }}
                        >
                            <Icon icon={plus} style={{ marginRight: '8px' }} />
                            Додати колонку з зображенням
                        </Button>
                        <Button
                            onClick={removeImageColumn}
                            style={{
                                backgroundColor: '#181B24',
                                color: '#FFF',
                                borderRadius: '8px',
                                padding: '8px 16px',
                            }}
                        >
                            Видалити колонку з картинкою
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

                {/* Текстові елементи */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        marginBottom: '18px',
                    }}
                >
                    {listItems.map((text, index) => (
                        <RichText
                            key={index}
                            tagName="div"
                            value={text}
                            onChange={(value) => updateListItem(value, index)}
                            placeholder={`Елемент ${index + 1}`}
                            style={{ color: '#FBFBFB' }}
                        />
                    ))}
                </div>

                {/* Copyright */}
                <RichText
                    tagName="div"
                    value={copyright}
                    onChange={(value) => setAttributes({ copyright: value })}
                    placeholder="© 2025 SKYRORA LIMITED"
                    style={{ color: '#A39FA9', fontSize: '12px' }}
                />
            </div>
        </>
    );
}
