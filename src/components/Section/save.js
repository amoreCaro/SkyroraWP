import { useBlockProps } from '@wordpress/block-editor';

const Section = ({ marginTop, marginBottom, children }) => {
  return (
    <div
      {...useBlockProps.save()}
      style={{
        marginTop,
        marginBottom,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
