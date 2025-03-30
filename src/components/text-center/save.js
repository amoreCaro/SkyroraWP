import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();

    const { 
        isVisible,
        id, 
        title, 
        imageUrl, 
        videoUrl, 
        text, 
        buttonName, 
        buttonOpenInNewTab, 
        buttonUrl, 
        sectionAlignment,
        sectionPadding,
        sectionOverlay,        
        backgroundTab,
        mediaTab,
        backgroundImage,
        backgroundVideo,
        backgroundColor,
        backgroundGradient
    } = attributes;

    let backgroundStyle = {};
    let mediaContent = {};

    const alignmentClass = sectionAlignment === 'right' ? 'section-right' : 'section-left';
    const overlayClass = sectionOverlay === 'overlay' ? 'overlay' : 'no-overlay';
    const paddingClass = sectionPadding === 'small-padding' ? 'small-padding' : 'large-padding';
    const sectionVisibility = isVisible;

    switch (backgroundTab) {
        case 'background-image':
            backgroundStyle = backgroundImage ? { background: `url(${backgroundImage})` } : {};
            break;
        case 'background-color':
            backgroundStyle = backgroundColor ? { background: backgroundColor } : {};
            break;
        case 'background-gradient':
            backgroundStyle = backgroundGradient ? { background: backgroundGradient } : {};
            break;
        case 'background-video':
            backgroundStyle = backgroundVideo ? { background: `url(${backgroundVideo})` } : {};
            break;
        default:
            backgroundStyle = backgroundImage ? { background: `url(${backgroundImage})` } : {};
            break;
    }

    switch (mediaTab) {
        case 'media-image':
            mediaContent = imageUrl ? (
                <div className="h-image lazy" data-src={imageUrl}>
                    <img width="320px" height="240px" src={imageUrl} loading="lazy" alt="Selected image" />
                </div>
            ) : null;
            break;
        case 'media-video':
            mediaContent = videoUrl ? (
                <video width="720px" height="240px" className="h-video lazy" muted playsInline autoPlay loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null;
            break;
        default:
            mediaContent = (
                <img src="https://via.placeholder.com/150" loading="lazy" alt="Placeholder image" />
            );
            break;
    }
    
  
    if (!sectionVisibility) return null;

    return (
        <section id={id} {...blockProps}>
            <div className={`info-blockblack-text ${overlayClass} ${paddingClass} align-${alignmentClass || 'left'}`} style={backgroundStyle}>
                <div className="info-block__container container section">
                    <div className="info-block__main">
                        <div className="info-block__text-wraper">
                            {mediaContent}

                            {title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
                            {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
                        </div>

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
            </div>
        </section>
    );
}
