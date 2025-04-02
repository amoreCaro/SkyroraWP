import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ColorPalette, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { content, level, textAlign, color, fontWeight, fontSize, lineHeight, fontFamily, textTransform, marginTop, marginBottom } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'app-heading')}>
                    <RangeControl
                        label={__('Heading Level', 'app-heading')}
                        value={level}
                        onChange={(newLevel) => setAttributes({ level: newLevel })}
                        min={1}
                        max={6}
                    />
                    <TextControl
                        label={__('Font Size', 'app-heading')}
                        value={fontSize}
                        onChange={(value) => setAttributes({ fontSize: value })}
                    />
                    <ColorPalette
                        label={__('Text Color', 'app-heading')}
                        value={color}
                        onChange={(newColor) => setAttributes({ color: newColor })}
                    />
                    <SelectControl
                        label={__('Font Weight', 'app-heading')}
                        value={fontWeight}
                        options={[{ label: 'Normal', value: '400' }, { label: 'Bold', value: '700' }]}
                        onChange={(value) => setAttributes({ fontWeight: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <RichText
                {...useBlockProps({
                    style: { color, fontSize, fontWeight, lineHeight, fontFamily, textTransform, marginTop, marginBottom, textAlign },
                })}
                tagName={`h${level}`}
                value={content}
                onChange={(newContent) => setAttributes({ content: newContent })}
            />
        </>
    );
}
