import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { id, marginTop, marginBottom } = attributes;

  return (
    <div
      {...useBlockProps.save({
        id,
        style: {
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        },
      })}
    >
      {/* Child content will go here */}
    </div>
  );
}
