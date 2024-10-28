import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const {
        id,
        title,
        text,
        imageUrl,
        buttonText,
        buttonUrl,
        buttonOpenInNewTab,
        sectionAlignment,
        backgroundUrl,
        gradientColor1,
        gradientColor2,
        buttonColor,
        sectionOverlay,
        sectionPadding,
        sectionVisibility,
        items,
    } = attributes;

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="repeater-item">
                    <h4>{item.title}</h4>
                    {item.imageUrl && <img src={item.imageUrl} alt="" />}
                </div>
            ))}
        </div>
    );
}