import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	TabPanel,
} from '@wordpress/components';

const ParagraphEdit = ({ attributes, setAttributes }) => {
	const {
		content,
		textAlign,
		color,
		backgroundColor,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		textTransform,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingBottom,
		tabSelected,
	} = attributes;

	const onChangePadding = (side, value) => {
		setAttributes({ [side]: parseFloat(value || 0) });
	};

	const blockProps = useBlockProps({
		className: 'custom-paragraph',
		style: {
			color,
			backgroundColor: backgroundColor || '#FFFFFF',
			fontWeight,
			fontSize,
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
			<BlockControls />
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					initialTabName={tabSelected || 'settings'}
					onSelect={(tabName) => setAttributes({ tabSelected: tabName })}
					tabs={[
						{ name: 'settings', title: <span className="dashicons dashicons-admin-generic" /> },
						{ name: 'styles', title: <span className="dashicons dashicons-admin-appearance" /> },
					]}
				>
					{(tab) => {
						if (tab.name === 'settings') {
							return (
								<PanelBody title={__('Paragraph Settings', 'custom-paragraph')}>
									<RichText
										tagName="div"
										value={content}
										onChange={(value) => setAttributes({ content: value })}
										placeholder={__('Enter text', 'custom-paragraph')}
										style={{
											padding: '10px 14px',
											border: '1px solid #ccc',
											borderRadius: '2px',
											marginBottom: '12px',
											width: '100%',
										}}
									/>
								</PanelBody>
							);
						}

						if (tab.name === 'styles') {
							return (
								<>
									<PanelColorSettings
										title={__('Colors', 'custom-paragraph')}
										initialOpen={true}
										colorSettings={[
											{
												value: color,
												onChange: (value) => setAttributes({ color: value }),
												label: __('Text Color', 'custom-paragraph'),
											},
											{
												value: backgroundColor,
												onChange: (value) => setAttributes({ backgroundColor: value }),
												label: __('Background Color', 'custom-paragraph'),
											},
										]}
									/>
									<PanelBody title={__('Style Settings', 'custom-paragraph')}>
										<TextControl
											label={__('Font Size (rem)', 'custom-paragraph')}
											type="number"
											value={(fontSize || '').replace('rem', '')}
											onChange={(val) => setAttributes({ fontSize: `${val}rem` })}
										/>
										<TextControl
											label={__('Line Height', 'custom-paragraph')}
											type="number"
											step="0.1"
											value={lineHeight}
											onChange={(val) => setAttributes({ lineHeight: val })}
										/>
										<SelectControl
											label={__('Font Weight', 'custom-paragraph')}
											value={fontWeight}
											options={[
												{ label: 'Normal', value: '400' },
												{ label: 'Bold', value: '700' },
												{ label: 'Bolder', value: '900' },
											]}
											onChange={(val) => setAttributes({ fontWeight: val })}
										/>
										<SelectControl
											label={__('Text Transform', 'custom-paragraph')}
											value={textTransform}
											options={[
												{ label: 'None', value: 'none' },
												{ label: 'Uppercase', value: 'uppercase' },
												{ label: 'Lowercase', value: 'lowercase' },
												{ label: 'Capitalize', value: 'capitalize' },
											]}
											onChange={(val) => setAttributes({ textTransform: val })}
										/>
										<TextControl
											label={__('Padding Top (px)', 'custom-paragraph')}
											value={paddingTop}
											onChange={(value) => onChangePadding('paddingTop', value)}
										/>
										<TextControl
											label={__('Padding Bottom (px)', 'custom-paragraph')}
											value={paddingBottom}
											onChange={(value) => onChangePadding('paddingBottom', value)}
										/>
										<TextControl
											label={__('Padding Left (px)', 'custom-paragraph')}
											value={paddingLeft}
											onChange={(value) => onChangePadding('paddingLeft', value)}
										/>
										<TextControl
											label={__('Padding Right (px)', 'custom-paragraph')}
											value={paddingRight}
											onChange={(value) => onChangePadding('paddingRight', value)}
										/>
									</PanelBody>
								</>
							);
						}

						return null;
					}}
				</TabPanel>
			</InspectorControls>

			<RichText
				{...blockProps}
				tagName="p"
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__('Enter paragraph text', 'custom-paragraph')}
			/>
		</>
	);
};

export default ParagraphEdit;
