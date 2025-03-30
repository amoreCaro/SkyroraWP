import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody,TextControl,TabPanel, Button, ColorPalette, Modal } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { RadioControl } from '@wordpress/components';
import { useState } from 'react';

import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const {
        id, 
        aboutTitle,
        aboutText,
        imageUrl,
        iconUrl,
        sectionAlignment,
        sectionPadding,
        sectionOverlay,
        sectionVisibility,
        backgroundUrl,
        backgroundType,
        gradientColor1,
        gradientColor2,
        buttonColor,
        buttonText, 
        buttonUrl, 
        buttonOpenInNewTab ,
        
    } = attributes;

    

    const blockProps = useBlockProps();

    // Define new state for button color
    const [selectedButtonColor, setSelectedButtonColor] = useState(buttonColor || '#000000');

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    const onRemoveImage = () => {
        setAttributes({ imageUrl: '', imageId: undefined });
    };

    const onSelectIcon = (media) => {
        setAttributes({ iconUrl: media.url, iconId: media.id });
    };

    const onRemoveIcon = () => {
        setAttributes({ iconUrl: '', iconId: undefined });
    };

    const onSelectBackground = (media) => {
        setAttributes({ backgroundUrl: media.url, backgroundId: media.id });
    };

    const onRemoveBackground = () => {
        setAttributes({ backgroundUrl: '', backgroundId: undefined });
    };

    const onChangeBackgroundType = (newType) => {
        setAttributes({ backgroundType: newType });
        // Reset background URL when changing to gradient
        if (newType === 'gradient') {
            setAttributes({ backgroundUrl: '' });
        }
    };

    const onChangeGradientColor1 = (newColor) => {
        setAttributes({ gradientColor1: newColor });
    };

    const onChangeGradientColor2 = (newColor) => {
        setAttributes({ gradientColor2: newColor });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonName, setButtonName] = useState(buttonText || ''); // Use buttonText for initial value
    const [buttonUrlValue, setButtonUrlValue] = useState(buttonUrl || ''); // Use buttonUrl for initial value
    const [openInNewTab, setOpenInNewTab] = useState(buttonOpenInNewTab);

    const saveButtonDetails = () => {
        setAttributes({
            buttonText: buttonText, // Save button name
            buttonUrl: buttonUrlValue, // Save button URL
            buttonOpenInNewTab: openInNewTab,
            buttonColor: selectedButtonColor // Use the selectedButtonColor state
        });
        closeModal();
    };

    const openModal = () => {
        setButtonName(buttonText || ''); // Reset the state with current value
        setButtonUrlValue(buttonUrl || ''); // Reset the state with current value
        setOpenInNewTab(buttonOpenInNewTab);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // if(!attributes.aboutTitle){
    //     return null;
    // }

    console.log('test',attributes.buttonText);

    return (
        <>
            <div id={id} {...blockProps}>
                <TabPanel
                    className="tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        { name: 'about_left', title: 'Content Left', className: 'tab-item' },
                        { name: 'about_right', title: 'Content Right', className: 'tab-item' },
                        { name: 'about_design', title: 'Design', className: 'tab-item' },
                    ]}
                >
                    {(tab) => (
                        <div>
                            {tab.name === 'about_left' && (
                                <div className="tab-item content-tab">
                                    {/* Image Selection */}
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={onSelectImage}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <>
                                                    {imageUrl ? (
                                                        <div className='wp-group__image'>
                                                            <img height="150px" width="150px" src={imageUrl} alt="Selected image" />
                                                            <Button onClick={onRemoveImage} isDestructive className="btn btn--green remove-image">
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
                                </div>
                            )}

                            {tab.name === 'about_right' && (
                                <div className="tab-item content-tab">
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={onSelectIcon}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <>
                                                    {iconUrl ? (
                                                        <div className='wp-group__image'>
                                                            <img height="100px" width="100px" src={iconUrl} alt="Selected icon" />
                                                            <Button onClick={onRemoveIcon} isDestructive className="remove-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <Button onClick={open} isPrimary>
                                                            Select Icon
                                                        </Button>
                                                    )}
                                                </>
                                            )}
                                        />
                                    </MediaUploadCheck>

                                    <RichText
                                        tagName="h2"
                                        value={aboutTitle}
                                        onChange={(newTitle) => setAttributes({ aboutTitle: newTitle })}
                                        placeholder="Enter title here"
                                    />

                                    <RichText
                                        tagName="p"
                                        value={aboutText}
                                        onChange={(newText) => setAttributes({ aboutText: newText })}
                                        placeholder="Enter text here"
                                    />

                                    <Button isPrimary onClick={openModal}>
                                        Add Button
                                    </Button>

                                    {/* Modal for Button Details */}
                                    {isModalOpen && (
                                        <Modal title="Button Details" onRequestClose={closeModal}>
                                            <div className='wp-button__top'>
                                                <label className='wp-group__col'>
                                                    Button Name:
                                                    <input
                                                        type="text"
                                                        value={buttonText}
                                                        onChange={(e) => setButtonName(e.target.value)}
                                                        placeholder="Enter button name"
                                                    />
                                                </label>
                                                <label className='wp-group__col'>
                                                    Button URL:
                                                    <input
                                                        type="text"
                                                        value={buttonUrlValue} // Use buttonUrlValue here
                                                        onChange={(e) => setButtonUrlValue(e.target.value)} // Use setButtonUrlValue here
                                                        placeholder="Enter button URL"
                                                    />
                                                </label>
                                                <label className='wp-group__row'>
                                                    <input
                                                        type="checkbox"
                                                        checked={openInNewTab}
                                                        onChange={(e) => setOpenInNewTab(e.target.checked)}
                                                    />
                                                    Open in new tab
                                                </label>
                                                {/* Color Palette for Button Color */}
                                                <label className='wp-group__col'>
                                                    Button Color:
                                                    <ColorPalette
                                                        value={selectedButtonColor}
                                                        onChange={(color) => setSelectedButtonColor(color)}
                                                    />
                                                </label>
                                            </div>
                                            <div className='wp-button__bottom'>
                                                <Button isPrimary onClick={saveButtonDetails}>Save</Button>
                                                <Button onClick={closeModal}>Cancel</Button>
                                            </div>
                                        </Modal>
                                    )}
                                </div>
                            )}

                            {tab.name === 'about_design' && (
                                <div className="tab-item design-tab">
                                    <RadioControl
                                        label="Section Visibility"
                                        selected={sectionVisibility}
                                        options={[
                                            { label: 'Show', value: 'show' },
                                            { label: 'Hide', value: 'hide' },
                                        ]}
                                        onChange={(newVisibility) => setAttributes({ sectionVisibility: newVisibility })}
                                    />
                                    <RadioControl
                                        label="Section Padding"
                                        selected={sectionPadding}
                                        options={[
                                            { label: 'Small', value: 'small-padding' },
                                            { label: 'Large', value: 'large-padding' },
                                        ]}
                                        onChange={(newPadding) => setAttributes({ sectionPadding: newPadding })}
                                    />
                                    <RadioControl
                                        label="Section Overlay"
                                        selected={sectionOverlay}
                                        options={[
                                            { label: 'Show', value: 'overlay' },
                                            { label: 'Hide', value: 'no-overlay' },
                                        ]}
                                        onChange={(newOverlay) => setAttributes({ sectionOverlay: newOverlay })}
                                    />
                                    <RadioControl
                                        label="Section Alignment"
                                        selected={sectionAlignment}
                                        options={[
                                            { label: 'Left Image', value: 'left' },
                                            { label: 'Right Image', value: 'right' },
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
                                                            <div className='wp-group__image'>
                                                                <img height="150px" width="150px" src={backgroundUrl} alt="Selected background" />
                                                                <Button onClick={onRemoveBackground} isDestructive className="remove-image">
                                                                    Remove Background
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
        </>
    );
}
