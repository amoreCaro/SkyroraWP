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
	TabPanel
} from '@wordpress/components';

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
		tabSelected
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
					onChange={(newAlign) => setAttributes({ textAlign: newAlign || 'left' })}
				/>
			</BlockControls>

			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					initialTabName={tabSelected || 'tab1'}
					onSelect={(tabName) => setAttributes({ tabSelected: tabName })}
					tabs={[
						{
							name: 'tab1',
							title: __('Tab 1', 'app'),
							className: 'tab1'
						},
						{
							name: 'tab2',
							title: __('Tab 2', 'app'),
							className: 'tab2'
						},
						{
							name: 'tab3',
							title: __('Tab 3', 'app'),
							className: 'tab3'
						}
					]}
				>
					{(tab) => {
						switch (tab.name) {
							case 'tab1':
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
									</PanelBody>
								);
							case 'tab2':
								return (
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
								);
							case 'tab3':
								return (
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
								);
							default:
								return null;
						}
					}}
				</TabPanel>
			</InspectorControls>

			<div {...useBlockProps({ className: 'wp-button', style: blockStyle })}>
				<a
					href="#"
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
