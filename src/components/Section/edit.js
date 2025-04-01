import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes, children }) => {
    const { marginTop, marginBottom } = attributes;

    const onChangeMarginTop = (newMarginTop) => {
        setAttributes({ marginTop: `${newMarginTop}px` });
    };

    const onChangeMarginBottom = (newMarginBottom) => {
        setAttributes({ marginBottom: `${newMarginBottom}px` });
    };

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody title="Section Settings" initialOpen={true}>
                    <RangeControl
                        label="Margin Top"
                        value={parseInt(marginTop)}
                        onChange={onChangeMarginTop}
                        min={0}
                        max={100}
                    />
                    <RangeControl
                        label="Margin Bottom"
                        value={parseInt(marginBottom)}
                        onChange={onChangeMarginBottom}
                        min={0}
                        max={100}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                style={{
                    marginTop,
                    marginBottom,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Edit;
