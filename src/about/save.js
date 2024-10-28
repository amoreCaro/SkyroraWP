import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const {
        id,
        aboutTitle,
        aboutText,
        imageUrl,
        iconUrl,
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
    } = attributes;

    // Define alignment class
    const alignmentClass = sectionAlignment === 'right' ? 'section-right' : 'section-left';
    const overlay = sectionOverlay === 'overlay' ? 'overlay' : 'no-overlay';
    const padding = sectionPadding === 'small-padding' ? 'small-padding' : 'large-padding';
    const view =  sectionVisibility;
    // Define section styles based on the presence of backgroundUrl
    const sectionStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : {
            background: `linear-gradient(180deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`
        };

        if(sectionVisibility === 'show'){
            return (
                <section
                    id={id}
                    {...blockProps}
                    className={`info-block ${overlay} white-text ${alignmentClass}`} 
                    style={sectionStyle} // Apply the style directly here
                >
                    <div className={`info-block__container container ${padding}`}>
                        {/* Image */}
                        <div className="info-block__image">
                            {imageUrl && <img src={imageUrl} loading="lazy" alt={`Image for ${aboutTitle}`} />}
                        </div>

                        {/* Main Content */}
                        <div className="info-block__main">
                            <div className="info-block__text-wraper">
                                {/* Icon */}
                                {iconUrl && <img src={iconUrl} loading="lazy" alt="Icon" />}

                                {/* Title */}
                                {aboutTitle && <h3 className="about-title" dangerouslySetInnerHTML={{ __html:aboutTitle }}/>}

                                {/* Text */}
                                {aboutText && <p className="about-text" dangerouslySetInnerHTML={{ __html:aboutText }}/>}
                            </div>

                            {/* Button */}
                            {buttonText && (
                                <div className="info-block__button">
                                    <a 
                                        href={buttonUrl} 
                                        className="btn btn--green" 
                                        target={buttonOpenInNewTab ? "_blank" : "_self"} 
                                        rel={buttonOpenInNewTab ? "noopener noreferrer" : undefined}
                                        style={{ backgroundColor: buttonColor }} // Apply button color here
                                    >
                                        {buttonText}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            );
        } else {
            return '';
        }
}
