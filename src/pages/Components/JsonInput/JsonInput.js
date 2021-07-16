import React from "react";
import "./JsonInput.css";
import ReactJson from "react-json-view";

const JsonInput = ({ value }) => {
  return <ReactJson defaultValue={null} src={value} />;
};

export default JsonInput;
