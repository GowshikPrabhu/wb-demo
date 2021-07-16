import React from "react";
import "./JsonInput.css";
import ReactJson from "react-json-view";

const JsonInput = ({ value, name = "root", onChange }) => {
  const onAdd = (e) => {
    if (e.new_value === "error") {
      return false;
    }
    console.log(e);
    onChange(e.updated_src);
  };
  const onDelete = (e) => {
    if (e.new_value === "error") {
      return false;
    }
    console.log(e);
    onChange(e.updated_src);
  };
  const onEdit = (e) => {
    if (e.new_value === "error") {
      return false;
    }
    console.log(e);
    onChange(e.updated_src);
  };
  return (
    <ReactJson
      defaultValue={null}
      src={value}
      name={name}
      iconStyle={"triangle"}
      enableClipboard={true}
      displayDataTypes={true}
      displayObjectSize={true}
      onDelete={onDelete}
      onAdd={onAdd}
      onEdit={onEdit}
    />
  );
};

export default JsonInput;
