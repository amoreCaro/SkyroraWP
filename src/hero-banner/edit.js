import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { RadioControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { PanelBody,TextControl,TabPanel, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

import './editor.css';

export default function Edit({ attributes, setAttributes }) {
    const { 
        id, title, content, imageUrl, videoUrl, gallery, text, backgroundType } = attributes;

    // Use blockProps to apply block-level properties
    const blockProps = useBlockProps();

    // Function for selecting an image
    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url, imageId: media.id, videoUrl: '' }); // Clear video when image is selected
    };

    // Function for selecting a video
    const onSelectVideo = (media) => {
        setAttributes({ videoUrl: media.url, videoId: media.id, imageUrl: '' }); // Clear image when video is selected
    };

    return (
        <Fragment>
            <div id={id} {...blockProps}>
                <TabPanel
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: 'hero_content',
                            title: 'Content',
                            className: 'tab-item hero-content-tab'
                        },
                        {
                            name: 'hero_brands',
                            title: 'Brands',
                            className: 'tab-item hero-brands-tab'
                        },
                        {
                            name: 'hero_media',
                            title: 'Media',
                            className: 'tab-item hero-media-tab'
                        },
                        {
                            name: 'hero_design',
                            title: 'Design',
                            className: 'tab-item hero-design-tab'
                        }
                    ]}
                >
                    {(tab) => (
                        <div>
                            {tab.name === 'hero_content' && (
                                <div className="content-tab">
                                    <RichText
                                        tagName='h1'
                                        value={title}
                                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                                        placeholder="Text"
                                        allowedFormats=""
                                    />
                                    <RichText
                                        tagName='p'
                                        value={content}
                                        onChange={(newContent) => setAttributes({ content: newContent })}
                                        placeholder="Text"
                                        allowedFormats={[
                                            'core/bold',
                                            'core/link',
                                        ]}
                                    />
                                </div>
                            )}

                            {tab.name === 'hero_brands' && (
                                <div className="brands-tab">
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={(e) => setAttributes({ text: e.target.value })}
                                        placeholder="Text"
                                    />
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => setAttributes({ gallery: media.map((img) => ({ url: img.url, id: img.id })) })}
                                            allowedTypes={['image']}
                                            multiple
                                            gallery
                                            render={({ open }) => (
                                                <div className='wp-group__gallery'>
                                                    <Button onClick={open} className="select-gallery-button">
                                                        {gallery && gallery.length ? (
                                                            <div className="gallery-preview">
                                                                {gallery.map((image, index) => (
                                                                    <div key={index} className="gallery-image">
                                                                        <img src={image.url} width="150px" height="150px" alt={`Gallery image ${index + 1}`} />
                                                                        <Button className="remove-gallery-image-button" onClick={() => {
                                                                            const newGallery = [...gallery];
                                                                            newGallery.splice(index, 1);
                                                                            setAttributes({ gallery: newGallery });
                                                                        }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                                        </Button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            'Select Gallery'
                                                        )}
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                </div>
                            )}

                            {tab.name === 'hero_media' && (
                                <div className="media-tab">
                                    {!videoUrl && (
                                        <MediaUpload
                                            onSelect={onSelectImage}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <div className='wp-group__image'>
                                                    <Button onClick={open} className="select-image-button">
                                                        {imageUrl ? (
                                                            <img src={imageUrl} alt="Selected" width="150px" height="150px" className="selected-image" />
                                                        ) : (
                                                            'Select Image'
                                                        )}
                                                    </Button>
                                                    {imageUrl && (
                                                        <Button onClick={() => setAttributes({ imageUrl: '', imageId: undefined })} className="remove-image-button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    )}

                                    {!imageUrl && (
                                        <MediaUpload
                                            onSelect={onSelectVideo}
                                            allowedTypes={['video']}
                                            render={({ open }) => (
                                                <div className='wp-group__video'>
                                                    <Button onClick={open} className="select-video-button">
                                                        {videoUrl ? (
                                                            <video src={videoUrl} className="selected-video" controls />
                                                        ) : (
                                                            'Select Video'
                                                        )}
                                                    </Button>
                                                    {videoUrl && (
                                                        <Button onClick={() => setAttributes({ videoUrl: '', videoId: undefined })} className="remove-video-button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    )}
                                </div>
                            )}

                            {tab.name === 'hero_design' && (
                                <div className="design-tab">
                                    <RadioControl
                                        label="Select Background Type"
                                        selected={backgroundType}
                                        options={[
                                            { label: 'Image', value: 'image' },
                                            { label: 'Video', value: 'video' },
                                        ]}
                                        onChange={(value) => setAttributes({ backgroundType: value })}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
              {/* Sidebar Panel */}
              <InspectorControls>
                <PanelBody title="Section Settings" initialOpen={true}>
                    <TextControl
                        label="Section ID"
                        value={id}
                        onChange={(newId) => setAttributes({ id: newId })}
                        placeholder="Enter section ID"
                    />
                </PanelBody>
            </InspectorControls>
        </Fragment>
    );
}
