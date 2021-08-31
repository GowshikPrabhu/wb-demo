import React from "react";
import JsonInput from "../../JsonInput/JsonInput";
import TextInput from "../../TextInput/TextInput";

const ActionModal = ({
  variableName,
  onVariableChange,
  responseData,
  onDataChange,
  onClickSave,
  onClickClose
}) => {
  return (
    <div className="actionmodal__modal">
      <TextInput
        label={"Variable Name"}
        name={"variableName"}
        id={"variableName"}
        placeholder={"Name"}
        value={variableName}
        onChange={onVariableChange}
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <label htmlFor="requestData" className="textinput__label">
        Body
      </label>
      <div className="actionmodal__datainput" style={{ width: "100%" }}>
        <JsonInput name={"body"} value={responseData} onChange={onDataChange} />
      </div>
      <br />
      <hr style={{ color: "#fff" }} />
      <div className="actionmodal__modal__buttonsArea">
        <button className="modal__buttonsave" onClick={onClickSave}>
          Save
        </button>
        <button className="modal__buttonclose" onClick={onClickClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ActionModal;
