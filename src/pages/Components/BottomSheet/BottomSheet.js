import React, { useState } from "react";
// import CustomMultiInput from "../CustomMultiInput/CustomMultiInput";
import DropdownInput from "../DropdownInput/DropdownInput";
import TextInput from "../TextInput/TextInput";
import "./BottomSheet.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import Spacing from "../Spacing/Spacing";

const BottomSheet = () => {
  const [dualInputs, setDualInput] = useState([]);
  const handleChange = () => {};
  const handleAdd = () => {
    setDualInput((prevState) => [...prevState, { key: "", value: "" }]);
  };
  const handleRemove = (idx) => {
    if (dualInputs.length > 0 && idx < dualInputs.length) {
      let oldArray = dualInputs;
      oldArray.splice(idx, 1);
      setDualInput((prevState) => [...oldArray]);
    }
  };

  return (
    <div className="bottomsheet__container">
      <div className="bottomsheet__topbar">Hello</div>
      <div className="bottomsheet__content">
        <div className="bottomsheet__content__section1">
          <DropdownInput
            label={"Select resource"}
            name={"resource"}
            options={[
              { name: "REST API", value: "REST" },
              { name: "SOAP", value: "SOAP" }
            ]}
          />
          <br />
          <br />
          <label className="textinput__label">Request</label>
          <div className="bottomsheet__dualinput">
            <DropdownInput
              name={"method"}
              options={[
                { name: "GET", value: "GET" },
                { name: "POST", value: "POST" }
              ]}
            />
            <Spacing width={"10px"} height={"1px"} />
            <TextInput
              name={"apiUrl"}
              placeholder={"Request url"}
              value={""}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <label className="textinput__label">URL Parameters</label>
          <DualInput
            handleChange={handleChange}
            onAdd={handleAdd}
            // onRemove={handleRemove}
          />
          <br />
          {dualInputs.length > 0
            ? dualInputs.map((options, idx) => (
                <>
                  <DualInput
                    key={idx}
                    inputKey={options.key}
                    inputValue={options.value}
                    handleChange={handleChange}
                    onAdd={handleAdd}
                    onRemove={() => handleRemove(idx)}
                  />
                  <br />
                </>
              ))
            : null}
        </div>
        <hr className="bottomsheet__verticalline" />
        <div className="bottomsheet__content__section2">Dubakur</div>
        <hr className="bottomsheet__verticalline" />
        <div className="bottomsheet__content__section3">Dubakur</div>
      </div>
    </div>
  );
};

export default BottomSheet;

const DualInput = ({ handleChange, onAdd, onRemove }) => {
  return (
    <div className="bottomsheet__dualinput">
      <TextInput
        name={"urlparametersKey"}
        placeholder={"Key"}
        value={""}
        onChange={handleChange}
      />
      <Spacing width={"10px"} height={"1px"} />
      <TextInput
        name={"urlparametersValue"}
        placeholder={"Value"}
        value={""}
        onChange={handleChange}
      />
      <Spacing width={"10px"} height={"1px"} />
      <FaPlus className="bottomsheet__icons" onClick={onAdd} />
      <Spacing width={"10px"} height={"1px"} />
      <FaTimes className="bottomsheet__icons" onClick={onRemove} />
    </div>
  );
};
