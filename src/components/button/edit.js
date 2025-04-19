import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from '@wordpress/block-editor';
import {
	PanelBody,
	ColorPalette,
	SelectControl,
	TextControl,
	TabPanel, Button, ButtonGroup
} from '@wordpress/components';
import { alignLeft, alignCenter, alignRight } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes }) {
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
		paddingX,
		paddingTop,
		paddingBottom,
		tabSelected,
		url
	} = attributes;

	const blockStyle = {
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent:
			textAlign === 'center'
				? 'center'
				: textAlign === 'right'
					? 'flex-end'
					: 'flex-start',
		textAlign,
		paddingTop,
		paddingBottom,
		paddingLeft: paddingX,
		paddingRight: paddingX
	};

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						@media (max-width: 768px) {
							.wp-button {
								padding-left: 12px !important;
								padding-right: 12px !important;
							}
						}
					`
				}}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(newAlign) => setAttributes({ textAlign: newAlign || 'center' })}
				/>
			</BlockControls>

			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					initialTabName={tabSelected || 'settings'}
					onSelect={(tabName) => setAttributes({ tabSelected: tabName })}
					tabs={[
						{
							name: 'settings',
							title: (
								<span className="dashicons dashicons-admin-generic" />
							)
						},
						{
							name: 'styles',
							title: (
								<span className="dashicons dashicons-admin-appearance" />
							)
						}
					]}
				>
					{(tab) => {
						if (tab.name === 'settings') {
							return (
								<PanelBody title={__('Typography Settings', 'app')} initialOpen={true}>
									<TextControl
										label={__('Font Size', 'app')}
										value={fontSize}
										onChange={(value) => setAttributes({ fontSize: value })}

									/>
									<TextControl
										label={__('Line Height', 'app')}
										value={lineHeight}
										onChange={(value) => setAttributes({ lineHeight: value })}

									/>
									<SelectControl
										label={__('Font Weight', 'app')}
										value={fontWeight}
										options={[
											{ label: 'Normal', value: '400' },
											{ label: 'Medium', value: '500' },
											{ label: 'Semi-Bold', value: '600' },
											{ label: 'Bold', value: '700' }
										]}
										onChange={(value) => setAttributes({ fontWeight: value })}

									/>
									<SelectControl
										label={__('Text Transform', 'app')}
										value={textTransform}
										options={[
											{ label: 'None', value: 'none' },
											{ label: 'Uppercase', value: 'uppercase' },
											{ label: 'Lowercase', value: 'lowercase' },
											{ label: 'Capitalize', value: 'capitalize' }
										]}
										onChange={(value) => setAttributes({ textTransform: value })}

									/>
									<TextControl
										label={__('Button Link', 'app')}
										value={url}
										onChange={(value) => setAttributes({ url: value })}
										placeholder={__('Enter button URL', 'app')}

									/>
									<PanelBody title={__('Alignment', 'app')} initialOpen={true}>
										<ButtonGroup
											style={{
												display: 'flex',
												gap: '8px',
												width: '100%',
											}}
										>
											<Button
												icon={alignLeft}
												label={__('Align Left', 'app')}
												isPressed={textAlign === 'left'}
												onClick={() => setAttributes({ textAlign: 'left' })}
												style={{
													flex: 1,
													justifyContent: 'center',



												}}
											/>
											<Button
												icon={alignCenter}
												label={__('Align Center', 'app')}
												isPressed={textAlign === 'center'}
												onClick={() => setAttributes({ textAlign: 'center' })}
												style={{
													flex: 1,
													justifyContent: 'center',


												}}
											/>
											<Button
												icon={alignRight}
												label={__('Align Right', 'app')}
												isPressed={textAlign === 'right'}
												onClick={() => setAttributes({ textAlign: 'right' })}
												style={{
													flex: 1,
													justifyContent: 'center',


												}}
											/>
										</ButtonGroup>
									</PanelBody>

								</PanelBody>
							);
						}
						if (tab.name === 'styles') {
							return (
								<>
									<PanelBody title={__('Spacing', 'app')} initialOpen={true}>
										<TextControl
											label={__('Padding Top (px)', 'app')}
											value={paddingTop}
											onChange={(val) => setAttributes({ paddingTop: val })}
										/>
										<TextControl
											label={__('Padding Bottom (px)', 'app')}
											value={paddingBottom}
											onChange={(val) => setAttributes({ paddingBottom: val })}

										/>
										<TextControl
											label={__('Padding X (px)', 'app')}
											value={paddingX}
											onChange={(val) => setAttributes({ paddingX: val })}

										/>
									</PanelBody>

									<PanelBody title={__('Colors', 'app')} initialOpen={true}>
										<ColorPalette
											label={__('Text Color', 'app')}
											value={color}
											onChange={(value) => setAttributes({ color: value })}

										/>
										<ColorPalette
											label={__('Background Color', 'app')}
											value={backgroundColor}
											onChange={(value) => setAttributes({ backgroundColor: value })}

										/>
									</PanelBody>
								</>
							);
						}
						return null;
					}}
				</TabPanel>
			</InspectorControls>

			<div {...useBlockProps({ className: 'wp-button', style: blockStyle })}>
				<a
					href={url || '#'}
					style={{
						color,
						backgroundColor,
						fontWeight,
						fontSize,
						lineHeight,
						fontFamily,
						textTransform,
						border: 'none',
						cursor: 'pointer',
						display: 'inline-block',
						maxWidth: '256px',
						width: '100%',
						height: '56px',
						textDecoration: 'none',
						padding: '16px 24px',
						boxSizing: 'border-box',
						textAlign: 'center'
					}}
				>
					<RichText
						tagName="span"
						value={content}
						onChange={(value) => setAttributes({ content: value })}
						placeholder={__('Enter your button text', 'app')}
					/>
				</a>
			</div>
		</>
	);
}
