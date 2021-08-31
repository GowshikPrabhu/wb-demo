import React from "react";

const ActionTopBar = ({ onClear, onPreview, onSave }) => {
  return (
    <div className="actionmodal__topbar">
      <p>Actions</p>
      <div>
        <button className="clear" onClick={onClear}>
          Clear
        </button>
        <button className="preview" onClick={onPreview}>
          Preview
        </button>
        <button className="save" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ActionTopBar;
