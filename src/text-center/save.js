import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const { 
        id,title, imageUrl, buttonUrl, buttonName, text, buttonOpenInNewTab, 
        sectionAlignment, backgroundType, backgroundUrl, gradientColor1, gradientColor2 
    } = attributes;

    // Determine the background style based on the background type (image or gradient)
    const backgroundStyle = backgroundType === 'image' && backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})` }
        : (backgroundType === 'gradient'
            ? { background: `linear-gradient(180deg, ${gradientColor1 || '#ffffff'}, ${gradientColor2 || '#ffffff'})` }
            : {});

    return (
        <section
            id={id}
            className={`info-block section-center black-text align-${sectionAlignment || 'left'}`}
            {...blockProps}
            style={backgroundStyle}
        >
            <div className="info-block__container container section">
                <div className="info-block__main">
                    <div className="info-block__text-wraper">
                        {/* Render the image if available */}
                        {imageUrl && <img src={imageUrl} loading="lazy" alt="Selected image" />}

                        {/* Render the title if available */}
                        {title && <h3 dangerouslySetInnerHTML={{ __html:title }}/>}

                        {/* Render the text if available */}
                        {text && <p dangerouslySetInnerHTML={{ __html:text }}/>}
                    </div>

                    {/* Render the button if available */}
                    {buttonName && (
                        <div className="info-block__button">
                            <a
                                href={buttonUrl || '#'}
                                className="btn btn--gold"
                                target={buttonOpenInNewTab ? "_blank" : "_self"}
                                rel={buttonOpenInNewTab ? "noopener noreferrer" : undefined}
                            >
                                {buttonName}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
