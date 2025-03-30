import { useState } from '@wordpress/element';
import Block from './block.json';
import { useDispatch } from '@wordpress/data';
import DefaultPreview from './default';

import { 
    useBlockProps, 
    InspectorControls ,
    MediaUpload, 
    MediaUploadCheck, 
    RichText, 
    ColorPalette } from '@wordpress/block-editor';

import { 
    PanelBody,
    TextControl,
    TabPanel, 
    Button, 
    Modal, 
    RadioControl } from '@wordpress/components';

import { renderPreview } from '/src/base/preview';
import { getField } from '/src/base/helpers';
import { renderModal } from './modal';
import './editor.css';

export default function Edit({ attributes, setAttributes , clientId }) {

    const { 
        isVisible,
        id, 
        title, 
        imageUrl, 
        videoUrl, 
        text, 
        buttonName, 
        buttonOpenInNewTab, 
        buttonUrl, 
        sectionAlignment,   
        sectionPadding,
        sectionOverlay,     
        backgroundTab,
        mediaTab,
        backgroundImage,
        backgroundVideo,
        backgroundColor,
        backgroundGradient
    } = attributes;

    const blockName = Block.title;

    const blockProps = useBlockProps({
        className: isVisible ? '' : 'wp-block-hide'
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('tabContent');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const tabList = [
        { key: 'tabContent', label: 'Content' },
        { key: 'tabMedia', label: 'Media' },
        { key: 'tabView', label: 'View' },
        { key: 'tabSettings', label: 'Settings' }
    ];


    const { removeBlock } = useDispatch('core/block-editor');

    const handleDeleteBlock = () => {
        removeBlock(clientId);
    };

    const handleViewBlock = () => {
        setAttributes({ isVisible: !isVisible });
    };

    const tabContent = () => (
        <div className='form-group'>
            {getField('text','title',attributes.title, setAttributes)}
            {getField('textarea','text',attributes.text, setAttributes)}
        </div>
    );

    const tabMedia = () => (
      
        <div className='form-group'>
            {getField('media','null',attributes, setAttributes)}
        </div>
    );

    const tabView = () => (
        <div className='form-group'>
            {getField('background', 'null' ,attributes, setAttributes)}
        </div>
    );

    const defaultPreview = () => (
        <DefaultPreview attributes={attributes} />
    );

    const valuesAlignment = [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
    ];

    const valuesPadding = [
        { label: 'Small', value: 'small-padding' },
        { label: 'Large', value: 'large-padding' }
    ];

    const valuesOverlay = [
        { label: 'Show', value: 'overlay' },
        { label: 'Hide', value: 'no-overlay' }
    ];

    const tabSettings = () => (
        <div className='form-group'>
            {getField('radio', 'Section Alignment' ,attributes.sectionAlignment, setAttributes, valuesAlignment)}
            {getField('radio', 'Section Padding' ,attributes.sectionPadding, setAttributes, valuesPadding)}
            {getField('radio', 'Section Overlay' ,attributes.sectionOverlay, setAttributes, valuesOverlay)}

        </div>
    );

    

    const data = {
        tabList,
        attributes,
        setAttributes,
        setActiveTab,
        activeTab,
        setIsModalOpen,
        closeModal,
        openModal,
        blockName,
        handleDeleteBlock,
        handleViewBlock,
        removeBlock,
        clientId,
        tabContent,
        tabView,
        tabMedia,
        tabSettings,
        defaultPreview
    }

    return (
        <div id={id} {...blockProps }>

            {renderPreview({ data })}

            {isModalOpen && renderModal({ data })}

        </div>
    );

}
