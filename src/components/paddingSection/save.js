const Save = (props) => {
    const { attributes } = props;
    const { paddingLeft, paddingRight } = attributes;
  
    return (
      <div
        className="padding-section"
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
      >
        <p>This is a section with customizable padding.</p>
      </div>
    );
  };
  
  export default Save;
  