import React from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import TextInput from "../TextInput/TextInput";
import "./BottomSheet.css";

const BottomSheet = () => {
  const handleChange = () => {};
  return (
    <div className="bottomsheet__container">
      <div>
        <DropdownInput
          label={"Select resouce"}
          name={"resouce"}
          options={[
            { name: "REST API", value: "REST" },
            { name: "SOAP", value: "SOAP" }
          ]}
        />
        <br />
        <DropdownInput
          label={"Method"}
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
        <TextInput
          label={"URL parameters"}
          name={"urlparameters"}
          placeholder={"key1=value1,key2=value2"}
          value={""}
          onChange={handleChange}
          hint={"Enter key=value pairs seperated by comma"}
        />
      </div>
    </div>
  );
};

export default BottomSheet;
