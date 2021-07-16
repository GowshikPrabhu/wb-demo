import React from "react";
import ReactJson from "react-json-view";

const BottomSheetContentThree = ({ content }) => {
  return (
    <>
      <div className="content__options">
        <label className="textinput__label">Response</label>
      </div>
      <div className="content__area">
        {Object.keys(content).length > 0 && (
          // <pre>{JSON.stringify(content, undefined, 4)}</pre>
          <ReactJson
            src={content}
            name={"Response data"}
            iconStyle={"triangle"}
            enableClipboard={true}
            displayDataTypes={true}
            displayObjectSize={true}
            onDelete={false}
            onAdd={false}
            onEdit={false}
          />
        )}
      </div>
    </>
  );
};

export default BottomSheetContentThree;
