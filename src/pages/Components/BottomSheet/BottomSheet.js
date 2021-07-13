import React from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import TextInput from "../TextInput/TextInput";
import "./BottomSheet.css";

const BottomSheet = () => {
  const handleChange = () => {};
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
          <DropdownInput
            label={"Request"}
            name={"method"}
            options={[
              { name: "GET", value: "GET" },
              { name: "POST", value: "POST" }
            ]}
          />
          <TextInput
            name={"apiUrl"}
            placeholder={"Request url"}
            value={""}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextInput
            label={"URL parameters"}
            name={"urlparameters"}
            placeholder={"key1=value1,key2=value2"}
            value={""}
            onChange={handleChange}
            hint={"Enter key=value pairs seperated by comma"}
          />
        </div>
        <hr className="bottomsheet__verticalline" />
        <div className="bottomsheet__content__section2">Dubakur</div>
      </div>
    </div>
  );
};

export default BottomSheet;
