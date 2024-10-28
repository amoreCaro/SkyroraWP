import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const { id,title, content, imageUrl, videoUrl, gallery, text } = attributes;

    // Default background color
    const DEFAULT_BACKGROUND_COLOR = '#f0f0f0';

    // Conditional background styles
    const sectionStyle = imageUrl
        ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }
        : videoUrl
        ? {} // No background style for video
        : { backgroundColor: DEFAULT_BACKGROUND_COLOR }; // Default background color if no image/video

    return (
        <section id={id} {...blockProps} style={sectionStyle}>
            {/* Video block, only rendered if videoUrl is available */}
            {videoUrl && (
                <video className="hero__video" muted playsInline autoPlay loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <div className="hero__container container">
                <div className="hero__content">
                    {title && <h1 className="title--01" dangerouslySetInnerHTML={{ __html:title }}/>}
                    {content && <p dangerouslySetInnerHTML={{ __html:content }}/>}
                </div>
            
                <div className="hero__partrers-block">
                    {text && <div className="hero__partrers-title" dangerouslySetInnerHTML={{ __html:text}}/>}
                    {gallery && gallery.length > 0 && (
                        <div className="hero__partrers-list">
                            {gallery.map((image) => (
                                <img
                                    key={image.id} // Use unique id from image
                                    src={image.url}
                                    alt={`Partner - ${image.url.split('/').pop()}`} // Better alt text for accessibility
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
