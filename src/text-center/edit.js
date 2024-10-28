import { useBlockProps, InspectorControls ,MediaUpload, MediaUploadCheck, RichText, ColorPalette } from '@wordpress/block-editor';
import { Fragment, useState } from '@wordpress/element';
import { PanelBody,TextControl,TabPanel, Button, Modal, RadioControl } from '@wordpress/components';

import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { 
        id, 
        title, 
        imageUrl, 
        text, 
        buttonName, 
        buttonOpenInNewTab, 
        buttonUrl, 
        sectionAlignment, 
        backgroundType, 
        backgroundUrl, 
        gradientColor1, 
        gradientColor2 
    } = attributes;

    const blockProps = useBlockProps();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    const onRemoveImage = () => {
        setAttributes({ imageUrl: '', imageId: undefined });
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const saveButtonDetails = () => {
        setAttributes({
            buttonName,
            buttonUrl,
            buttonOpenInNewTab,
        });
        closeModal();
    };

    const onChangeGradientColor1 = (newColor) => {
        setAttributes({ gradientColor1: newColor });
    };

    const onChangeGradientColor2 = (newColor) => {
        setAttributes({ gradientColor2: newColor });
    };

    const onSelectBackground = (media) => {
        setAttributes({ backgroundUrl: media.url });
    };

    const onRemoveBackground = () => {
        setAttributes({ backgroundUrl: '' });
    };

    const onChangeBackgroundType = (newType) => {
        setAttributes({ backgroundType: newType });
    };

    return (
        <Fragment>
            <div id={id} {...blockProps}>
                <TabPanel
                    activeClass="active-tab"
                    tabs={[
                        { name: 'tab_content', title: 'Content', className: 'tab-item' },
                        { name: 'tab_design', title: 'Design', className: 'tab-item' },
                    ]}
                >
                    {(tab) => (
                        <div>
                            {tab.name === 'tab_content' && (
                                <div className="content-tab">
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={onSelectImage}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <>
                                                    {imageUrl ? (
                                                        <div>
                                                            <img height="150px" width="150px" src={imageUrl} alt="Selected image" />
                                                            <Button onClick={onRemoveImage} isDestructive className="remove-image">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <Button className="btn btn--green" onClick={open} isPrimary>
                                                            Select Image
                                                        </Button>
                                                    )}
                                                </>
                                            )}
                                        />
                                    </MediaUploadCheck>

                                    <RichText
                                        tagName="h3"
                                        value={title}
                                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                                        placeholder="Enter your Title..."
                                        allowedFormats={['core/bold', 'core/link']}
                                    />

                                    <RichText
                                        tagName="p"
                                        value={text}
                                        onChange={(newText) => setAttributes({ text: newText })}
                                        placeholder="Enter your Text..."
                                        allowedFormats={['core/bold', 'core/link']}
                                    />

                                    <Button isPrimary onClick={openModal}>
                                        Set Button Details
                                    </Button>

                                    {isModalOpen && (
                                        <Modal title="Button Details" onRequestClose={closeModal}>
                                            <div>
                                                <label>
                                                    Button Name:
                                                    <input
                                                        type="text"
                                                        value={buttonName}
                                                        onChange={(e) => setAttributes({ buttonName: e.target.value })}
                                                        placeholder="Enter button name"
                                                    />
                                                </label>
                                                <label>
                                                    Button URL:
                                                    <input
                                                        type="text"
                                                        value={buttonUrl}
                                                        onChange={(e) => setAttributes({ buttonUrl: e.target.value })}
                                                        placeholder="Enter button URL"
                                                    />
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={buttonOpenInNewTab}
                                                        onChange={(e) => setAttributes({ buttonOpenInNewTab: e.target.checked })}
                                                    />
                                                    Open in new tab
                                                </label>
                                            </div>
                                            <Button isPrimary onClick={saveButtonDetails}>Save</Button>
                                            <Button onClick={closeModal}>Cancel</Button>
                                        </Modal>
                                    )}
                                </div>
                            )}

                            {tab.name === 'tab_design' && (
                                <div className="tab-item design-tab">
                                    <RadioControl
                                        label="Section Alignment"
                                        selected={sectionAlignment}
                                        options={[
                                            { label: 'Left Section', value: 'left' },
                                            { label: 'Right Section', value: 'right' },
                                        ]}
                                        onChange={(newAlignment) => setAttributes({ sectionAlignment: newAlignment })}
                                    />

                                    <RadioControl
                                        label="Background Type"
                                        selected={backgroundType}
                                        options={[
                                            { label: 'Background Image', value: 'image' },
                                            { label: 'Background Gradient', value: 'gradient' },
                                        ]}
                                        onChange={onChangeBackgroundType}
                                    />

                                    {backgroundType === 'image' && (
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={onSelectBackground}
                                                allowedTypes={['image']}
                                                render={({ open }) => (
                                                    <>
                                                        {backgroundUrl ? (
                                                            <div>
                                                                <img height="150px" width="150px" src={backgroundUrl} alt="Selected background image" />
                                                                <Button onClick={onRemoveBackground} isDestructive className="remove-image">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <Button onClick={open} isPrimary>
                                                                Select Background Image
                                                            </Button>
                                                        )}
                                                    </>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                    )}

                                    {backgroundType === 'gradient' && (
                                        <>
                                            <p>Select First Gradient Color</p>
                                            <ColorPalette
                                                value={gradientColor1}
                                                onChange={onChangeGradientColor1}
                                            />
                                            <p>Select Second Gradient Color</p>
                                            <ColorPalette
                                                value={gradientColor2}
                                                onChange={onChangeGradientColor2}
                                            />
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
              {/* Sidebar Panel */}
              <InspectorControls>
                <PanelBody title="Section Settings" initialOpen={true}>
                    <TextControl
                        label="Section ID"
                        value={id}
                        onChange={(newId) => setAttributes({ id: newId })}
                        placeholder="Enter section ID"
                    />
                </PanelBody>
            </InspectorControls>
        </Fragment>
    );
}
