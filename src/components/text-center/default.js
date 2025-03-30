
export default function DefaultPreview(data) {

    let backgroundStyle = {};
    let mediaContent = {};

    const attributes = data.attributes;
    const alignmentClass = attributes.sectionAlignment === 'right' ? 'section-right' : 'section-left';
    const overlayClass = attributes.sectionOverlay === 'overlay' ? 'overlay' : 'no-overlay';
    const paddingClass = attributes.sectionPadding === 'small-padding' ? 'small-padding' : 'large-padding';

    switch (attributes.backgroundTab) {
        case 'background-image':
            backgroundStyle = attributes.backgroundImage ? { background: `url(${attributes.backgroundImage})` } : {};
            break;
        case 'background-color':
            backgroundStyle = attributes.backgroundColor ? { background: attributes.backgroundColor } : {};
            break;
        case 'background-gradient':
            backgroundStyle = attributes.backgroundGradient ? { background: attributes.backgroundGradient } : {};
            break;
        case 'background-video':
            backgroundStyle = attributes.backgroundVideo ? { background: `url(${attributes.backgroundVideo})` } : {};
            break;
        default:
            backgroundStyle = attributes.backgroundGradient ? { background: attributes.backgroundGradient } : {};
            break;
    }

    switch (attributes.mediaTab) {
        case 'media-image':
            mediaContent = attributes.imageUrl ? (
                <div className="h-image lazy" data-src={attributes.imageUrl}>
                    <img width="320px" height="240px" src={attributes.imageUrl} loading="lazy" alt="Selected image" />
                </div>
            ) : null;
            break;
        case 'media-video':
            mediaContent = attributes.videoUrl ? (
                <video width="720px" height="240px" className="h-video lazy" muted playsInline autoPlay loop>
                    <source src={attributes.videoUrl} type="video/mp4" />
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
    
    return (
        <div className='app-block__default'>
            <div className={`app-block info-blockblack-text ${overlayClass} ${paddingClass} align-${alignmentClass || 'left'}`} style={backgroundStyle}>
                <div className="info-block__container container section">
                    <div className="info-block__main">
                        <div className="info-block__text-wraper">
                            {mediaContent}

                            {attributes.title && <h3 dangerouslySetInnerHTML={{ __html: attributes.title }} />}
                            {attributes.text && <p dangerouslySetInnerHTML={{ __html: attributes.text }} />}
                        </div>

                        {attributes.buttonName && (
                            <div className="info-block__button">
                                <a
                                    href={attributes.buttonUrl || '#'}
                                    className="btn btn--gold"
                                    target={attributes.buttonOpenInNewTab ? "_blank" : "_self"}
                                    rel={attributes.buttonOpenInNewTab ? "noopener noreferrer" : undefined}
                                >
                                    {attributes.buttonName}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
