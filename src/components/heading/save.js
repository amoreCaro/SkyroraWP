import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const {
        content,
        level,
        textAlign,
        color,
        fontWeight,
        fontSize,
        lineHeight,
        fontFamily,
        textTransform,
    } = attributes;

    const headingSize = (hLevel) => {
        switch (hLevel) {
            case 1:
                return "2.5rem";  
            case 2:
                return "2.0rem";  
            case 3:
                return "1.75rem";
            case 4:
                return "1.5rem"; 
            case 5:
                return "1.25rem";
            case 6:
                return "1.0rem"; 
            default:
                return "2rem";   
        }
    }
    

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="wp-heading">
            <RichText.Content
                tagName={`h${level}`}
                value={content}
                style={{
                    color,
                    fontWeight,
                    fontSize: headingSize(level),  // Call the function with the correct argument
                    lineHeight,
                    fontFamily,
                    textTransform,
                    textAlign,
                }}
            />
        </div>
    );
};

export default save;
