import {
    TextControl,
    TextareaControl,
    Button,
    RadioControl,
} from "@wordpress/components";

import {
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from "@wordpress/block-editor";

import { Repeater } from "./fields/repeater/repeater";

const Map = {
    select: <TreeSelect />,
    image: <MediaUploadCheck />
}

export const getField = (setAttributes,type, data, label) => {
    // console.log('map', Map[type]);
    switch (type) {
        case 'select':
            return (
                <TreeSelect/>
            );
        case 'image':
            return (
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <>
                                {imageUrl ? (
                                    <div className='wp-group__image'>
                                        <img height="150px" width="150px" src={imageUrl} alt="Selected image" />
                                        <Button onClick={onRemoveImage} isDestructive className="btn btn--green remove-image">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="-1.7 0 20.4 20.4" class="cf-icon-svg"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg>
                                        </Button>
                                    </div>
                                ) : (
                                    <Button className="btn btn--green" onClick={open} isPrimary>
                                        Select Image
                                    </Button>
                                )}
                            </>
                        )}
                    />
                </MediaUploadCheck>
            );
        case 'button':
            return <Button>Button</Button>;
        case 'link':
            return <Link>link</Link>;
        case 'file':
            return <FormFileUpload>file</FormFileUpload>;
        case 'text':
            return (
                <TextControl
                    value={data}
                    placeholder={label}
                    className='form-control form-text'
                    onChange={(value) => setAttributes({ value: data })}
                />
            )
        case 'textarea':
            return(
                <TextareaControl
                    value={data}
                    placeholder={label}
                    className='form-control form-textarea'
                    onChange={(value) => setAttributes({ value: data })}
                />
            )
        case 'color':
            return <PaletteEdit/>;
        case 'richtext':
            return <RichText />;
        case 'date':
            return <RichText />;
        case 'checkbox':
            return <CheckboxControl></CheckboxControl>;
        case 'radio':
            return <RadioControl></RadioControl>;
        case 'editorbox':
            return <EditorBox/>;
        case 'repeater':
            return <Repeater/>;
        default:
            return null;
    }
};
