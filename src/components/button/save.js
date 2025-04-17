import { useBlockProps } from '@wordpress/block-editor';

const save = ({ attributes }) => {
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
		paddingBottom
	} = attributes;

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

			<div
				{...useBlockProps.save({
					className: 'wp-button',
					style: {
						backgroundColor: '#fff',
						paddingTop,
						paddingBottom,
						paddingLeft: paddingX,
						paddingRight: paddingX,
						display: 'flex',
						justifyContent:
							textAlign === 'center'
								? 'center'
								: textAlign === 'right'
								? 'flex-end'
								: 'flex-start'
					}
				})}
			>
				<a
					href="#"
					style={{
						textAlign,
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
						textAlign: 'center',
					}}
				>
					{content}
				</a>
			</div>
		</>
	);
};

export default save;
