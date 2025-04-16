import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ColorPalette,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

const HeadingEdit = ({ attributes, setAttributes }) => {
	const {
		content,
		level,
		textAlign,
		color,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		textTransform,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingBottom,
	} = attributes;

	// Функція для встановлення розміру заголовка залежно від рівня
	const headingSize = (hLevel) => {
		switch (hLevel) {
			case 1:
				return '2.5rem';
			case 2:
				return '2.0rem';
			case 3:
				return '1.75rem';
			case 4:
				return '1.5rem';
			case 5:
				return '1.25rem';
			case 6:
				return '1.0rem';
			default:
				return '2rem';
		}
	};

	const onChangePadding = (side, value) =>
		setAttributes({ [side]: parseFloat(value || 0) });

	// Додаємо додатковий клас для адаптивного стилю
	const blockProps = useBlockProps({
		className: 'custom-heading',
		style: {
			color,
			fontWeight,
			fontSize: headingSize(level),
			lineHeight,
			fontFamily,
			textTransform,
			textAlign,
			paddingTop: `${paddingTop}px`,
			paddingBottom: `${paddingBottom}px`,
			paddingLeft: `${paddingLeft}px`,
			paddingRight: `${paddingRight}px`,
			margin: '0px',
		},
	});

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{[1, 2, 3, 4, 5, 6].map((hLevel) => (
						<ToolbarButton
							key={hLevel}
							isPressed={level === hLevel}
							onClick={() => setAttributes({ level: hLevel })}
						>
							H{hLevel}
						</ToolbarButton>
					))}
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Heading Settings', 'custom-heading')}>
					<SelectControl
						label={__('Heading Level', 'custom-heading')}
						value={level}
						options={Array.from({ length: 6 }, (_, i) => ({
							label: `H${i + 1}`,
							value: i + 1,
						}))}
						onChange={(val) => setAttributes({ level: parseInt(val, 10) })}
					/>
					<SelectControl
						label={__('Text Align', 'custom-heading')}
						value={textAlign}
						options={[
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						]}
						onChange={(val) => setAttributes({ textAlign: val })}
					/>
					<ColorPalette
						label={__('Text Color', 'custom-heading')}
						value={color}
						onChange={(val) => setAttributes({ color: val || '#000000' })}
					/>
					<TextControl
						label={__('Font Size (rem)', 'custom-heading')}
						type="number"
						value={fontSize.replace('rem', '')}
						onChange={(val) => setAttributes({ fontSize: `${val}rem` })}
					/>
					<TextControl
						label={__('Line Height', 'custom-heading')}
						type="number"
						step="0.1"
						value={lineHeight}
						onChange={(val) => setAttributes({ lineHeight: val })}
					/>
					<TextControl
						label={__('Font Family', 'custom-heading')}
						value={fontFamily}
						onChange={(val) => setAttributes({ fontFamily: val })}
					/>
					<SelectControl
						label={__('Font Weight', 'custom-heading')}
						value={fontWeight}
						options={[
							{ label: 'Normal', value: '400' },
							{ label: 'Bold', value: '700' },
							{ label: 'Bolder', value: '900' },
						]}
						onChange={(val) => setAttributes({ fontWeight: val })}
					/>
					<SelectControl
						label={__('Text Transform', 'custom-heading')}
						value={textTransform}
						options={[
							{ label: 'None', value: 'none' },
							{ label: 'Uppercase', value: 'uppercase' },
							{ label: 'Lowercase', value: 'lowercase' },
							{ label: 'Capitalize', value: 'capitalize' },
						]}
						onChange={(val) => setAttributes({ textTransform: val })}
					/>
				</PanelBody>

				<PanelBody title={__('Padding Settings', 'custom-heading')} initialOpen={true}>
					<TextControl
						label={__('Padding Top (px)', 'custom-heading')}
						value={paddingTop}
						onChange={(val) => onChangePadding('paddingTop', val)}
						type="number"
						min={0}
					/>
					<TextControl
						label={__('Padding Bottom (px)', 'custom-heading')}
						value={paddingBottom}
						onChange={(val) => onChangePadding('paddingBottom', val)}
						type="number"
						min={0}
					/>
					<TextControl
						label={__('Padding Left (px)', 'custom-heading')}
						value={paddingLeft}
						onChange={(val) => onChangePadding('paddingLeft', val)}
						type="number"
						min={0}
					/>
					<TextControl
						label={__('Padding Right (px)', 'custom-heading')}
						value={paddingRight}
						onChange={(val) => onChangePadding('paddingRight', val)}
						type="number"
						min={0}
					/>
				</PanelBody>
			</InspectorControls>

			{/* Додаємо адаптивний padding через media-запит */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
						@media (max-width: 768px) {
							.custom-heading {
								padding-left: 12px !important;
								padding-right: 12px !important;
								padding-top: 8px !important;
								padding-bottom: 8px !important;
							}
						}
					`,
				}}
			/>

			<RichText
				{...blockProps}
				tagName={`h${level}`}
				value={content}
				onChange={(val) => setAttributes({ content: val })}
				placeholder={__('Enter heading text...', 'custom-heading')}
			/>
		</>
	);
};

export default HeadingEdit;
