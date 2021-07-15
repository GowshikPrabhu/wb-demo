import React from "react";

const BottomSheetContentThree = ({ content }) => {
  return (
    <>
      <div className="content__options">
        <label className="textinput__label">Response</label>
      </div>
      <div className="content__area">
        {Object.keys(content).length > 0 && (
          <pre>{JSON.stringify(content, undefined, 4)}</pre>
        )}
      </div>
    </>
  );
};

export default BottomSheetContentThree;
