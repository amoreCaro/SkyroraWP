import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
  const {
    content,
    textAlign,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  } = attributes;

  return (
    <div {...useBlockProps.save()} className="wp-paragraph">
      <RichText.Content
        tagName="p"
        value={content}
        style={{
          color,
          backgroundColor,
          fontWeight,
          fontSize,
          lineHeight,
          fontFamily,
          textTransform,
          textAlign,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          margin: '0px',
        }}
      />
    </div>
  );
};

export default save;
