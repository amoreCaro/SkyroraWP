import { useBlockProps, RichText } from '@wordpress/block-editor';
import Section from '../Section/block.json'; // Імпортуємо компонент Section

const Save = ({ attributes }) => {
  const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform, marginTop, marginBottom } = attributes;

  return (

    <div {...useBlockProps.save()} style={{ marginTop, marginBottom }}>
      <RichText.Content
        style={{
          color,
          fontWeight,
          fontSize,
          lineHeight,
          fontFamily,
          textTransform,
          textAlign,
        }}
        tagName={`h${level}`}
        value={content}
      />
    </div>

  );
};

export default Save;

