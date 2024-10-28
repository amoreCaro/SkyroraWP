import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
  const blockProps = useBlockProps();
  
	return <h1 { ...blockProps }>Admin</h1>;
}