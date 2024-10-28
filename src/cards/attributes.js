

const [currentItems, setCurrentItems] = useState(items);


const addItem = () => {
    const newItem = { title: '', imageUrl: '' };
    const newItems = [...currentItems, newItem];
    setCurrentItems(newItems);
    setAttributes({ items: newItems });
};

const removeItem = (index) => {
    const newItems = currentItems.filter((_, i) => i !== index);
    setCurrentItems(newItems);
    setAttributes({ items: newItems });
};

const updateItem = (index, field, value) => {
    const newItems = [...currentItems];
    newItems[index][field] = value;
    setCurrentItems(newItems);
    setAttributes({ items: newItems });
};
                {/* {currentItems.map((item, index) => (
                    <div key={index} className="repeater-item">
                        <TextControl
                            label='Item Title'
                            value={item.title}
                            onChange={(value) => updateItem(index, 'title', value)}
                        />
                        <MediaUpload
                            onSelect={(media) => updateItem(index, 'imageUrl', media.url)}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <Button onClick={open}>
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt="" />
                                    ) : (
                                        'Upload Image'
                                    )}
                                </Button>
                            )}
                        />
                        <Button isDestructive onClick={() => removeItem(index)}>
                            Remove Item
                        </Button>
                    </div>
                ))}
                <Button onClick={addItem}>
                    Add Item
                </Button> */}