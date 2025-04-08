const Save = ({ attributes }) => {
    const { height, backgroundColor } = attributes;

    return (
        <div
            className="wp-block-app-spacer"
            style={{ height, backgroundColor }}
        />
    );
};

export default Save;
