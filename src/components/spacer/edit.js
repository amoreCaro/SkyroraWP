import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.css';

const Edit = ({ attributes, setAttributes }) => {
    const { height, backgroundColor } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Spacer Settings', 'textdomain')} initialOpen={true}>
                    <RangeControl
                        label={__('Height (px)', 'textdomain')}
                        value={parseInt(height)}
                        onChange={(newHeight) =>
                            setAttributes({ height: `${newHeight}px` })
                        }
                        min={0}
                        max={300}
                    />
                    <div>
                        <p>{__('Background Color', 'textdomain')}</p>
                        <ColorPalette
                            value={backgroundColor}
                            onChange={(newColor) =>
                                setAttributes({ backgroundColor: newColor })
                            }
                        />
                    </div>
                </PanelBody>
            </InspectorControls>

            <div
                className="wp-block-app-spacer"
                style={{ height, backgroundColor }}
            />
        </>
    );
};

export default Edit;
