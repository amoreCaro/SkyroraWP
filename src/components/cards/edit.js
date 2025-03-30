import { useState } from 'react';
import Block from './block.json';
import { useBlockProps } from '@wordpress/block-editor';
import { renderPreview } from '/src/base/preview';
import { getField } from '/src/base/helpers';
import { renderModal } from './modal';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { 
        id,
        title,
        subtitle,
        text,
        items = []
    } = attributes;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('tabContent');

    const data = {
        isModalOpen,
        activeTab
    }

    const tabContent = () => (
        <div className='form-group'>
            {/* {getField(setAttributes,'text',attributes.title,'Title')}
            {getField(setAttributes,'text',attributes.subtitle,'Subtitle')}
            {getField(setAttributes,'textarea',attributes.text,'Text')} */}
        </div>
    );

    const tabItems = () => (
        <div>
        {/* {getField(setAttributes, "repeater", attributes.items, "Items")} */}
        </div>
    );

    const tabStyle = () => (
        <div>
            <h2>Style Settings</h2>
            {/* Add additional content here */}
        </div>
    );

    const tabView = () => (
        <div>
            <h2>View Settings</h2>
            {/* Add additional content here */}
        </div>
    );

    const blockProps = useBlockProps();

    return (
        <div id={id} {...blockProps}>
           
            {renderPreview({ setIsModalOpen, blockName: Block.title, blockIndex: '1' })}
         
            {isModalOpen && renderModal(
                ...data,
                setAttributes,
                attributes,
                activeTab, 
                setActiveTab, 
                setIsModalOpen, 
                tabContent, 
                tabItems, 
                tabStyle, 
                tabView
            )}
        </div>
    );
}
