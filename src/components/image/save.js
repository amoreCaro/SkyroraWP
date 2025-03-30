export default function save({ attributes }) {
    const { imageUrl } = attributes;
    return <img src={imageUrl} alt="Selected" />;
}
