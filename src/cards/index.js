import { registerBlockType } from '@wordpress/blocks';
import Block from './block.json';
import Edit from './edit';
import Save from './save';
import '../styles/index.scss';
import './style.scss';

registerBlockType(Block.name, {
    edit: Edit,
    save: Save
})