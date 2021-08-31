import React, { useState } from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import TextInput from "../TextInput/TextInput";
import "./APIActionModal.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import Spacing from "../Spacing/Spacing";
import ActionTopBar from "./components/ActionTopBar";
import ActionContentTwo from "./components/ActionContentTwo";
import ActionContentThree from "./components/ActionContentThree";
import { doGet, doPost } from "../../../actions/REST_API_actions";
import JsonInput from "../JsonInput/JsonInput";
import ReactModal from "react-modal";
import ActionModal from "./components/ActionModal";

const APIActionModal = () => {
  const [noOfParameters, setNoOfParameters] = useState(1);
  const [apiResource, setAPIResource] = useState("REST");
  const [restAPIFormData, setRestAPIFormData] = useState({
    requestUrl: "",
    requestMethod: "GET",
    requestData: {},
    urlparameters: [{ key: "", value: "" }]
  });
  const [queryResponse, setQueryResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [dataVariable, setDataVariable] = useState({
    variableName: "",
    data: {}
  });

  const handleChange = (e) => {
    // let inputName = e.target.name;
    // if (inputName === "requestUrl") {
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, requestUrl: e.target.value };
    //   });
    // } else if (inputName === "requestData") {
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, requestData: e.target.value };
    //   });
    // } else if (inputName === "resource") {
    //   setAPIResource(e.target.value);
    // } else if (inputName === "method") {
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, requestMethod: e.target.value };
    //   });
    // } else if (inputName === "variableName") {
    //   setDataVariable((prevState) => {
    //     return { ...prevState, variableName: e.target.value };
    //   });
    // }
  };

  const handleChangeDualInput = (e, idx) => {
    // let inputName = e.target.name;
    // if (inputName === "urlparametersKey") {
    //   let arrCopy = restAPIFormData.urlparameters;
    //   arrCopy[idx].key = e.target.value;
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, urlparameters: [...arrCopy] };
    //   });
    // } else if (inputName === "urlparametersValue") {
    //   let arrCopy = restAPIFormData.urlparameters;
    //   arrCopy[idx].value = e.target.value;
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, urlparameters: [...arrCopy] };
    //   });
    // }
  };

  const handleAdd = () => {
    // setRestAPIFormData((prevState) => {
    //   return {
    //     ...prevState,
    //     urlparameters: [...prevState.urlparameters, { key: "", value: "" }]
    //   };
    // });
    // setNoOfParameters(noOfParameters + 1);
  };

  const handleRemove = (idx) => {
    // if (noOfParameters > 1) {
    //   let arr = restAPIFormData.urlparameters;
    //   arr.splice(idx, 1);
    //   setRestAPIFormData((prevState) => {
    //     return {
    //       ...prevState,
    //       urlparameters: [...arr]
    //     };
    //   });
    //   setNoOfParameters(noOfParameters - 1);
    // }
  };

  const clearActionStates = () => {
    // setNoOfParameters(1);
    // setAPIResource("REST");
    // setRestAPIFormData(() => {
    //   return {
    //     requestUrl: "",
    //     requestMethod: "GET",
    //     requestData: "",
    //     urlparameters: [{ key: "", value: "" }]
    //   };
    // });
    // setQueryResponse({});
  };

  const handleRequestPreview = async () => {
    // try {
    //   setLoading(true);
    //   if (apiResource === "REST") {
    //     if (restAPIFormData.requestMethod === "GET") {
    //       let data = await doGet(
    //         restAPIFormData.requestUrl,
    //         restAPIFormData.urlparameters
    //       );
    //       setQueryResponse(data);
    //     }
    //     if (restAPIFormData.requestMethod === "POST") {
    //       let body = JSON.stringify(restAPIFormData.requestData);
    //       let data = await doPost(
    //         restAPIFormData.requestUrl,
    //         restAPIFormData.urlparameters,
    //         body
    //       );
    //       setQueryResponse(data);
    //     }
    //   }
    // } catch (err) {
    //   alert("Invalid URL");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleChangeData = (data, forModal = false) => {
    // if (forModal) {
    //   setDataVariable((prevState) => {
    //     return { ...prevState, data: { ...data } };
    //   });
    // } else {
    //   setRestAPIFormData((prevState) => {
    //     return { ...prevState, requestData: { ...data } };
    //   });
    // }
  };

  const handleOnSave = () => {
    // setDataVariable((prevState) => {
    //   return { ...prevState, data: queryResponse };
    // });
    // setModalOpened(true);
  };

  return (
    <div className="actionmodal__container">
      <>
        <ActionTopBar
          onClear={clearActionStates}
          onPreview={handleRequestPreview}
          onSave={handleOnSave}
        />
        <div className="actionmodal__content">
          <div className="actionmodal__content__section1">
            <DropdownInput
              label={"Select resource"}
              name={"resource"}
              options={[
                { name: "REST API", value: "REST" }
                // { name: "SOAP", value: "SOAP" }
              ]}
              value={apiResource}
              onChange={handleChange}
            />
            <br />
            <br />
            <label className="textinput__label">Request</label>
            <div className="actionmodal__dualinput">
              <DropdownInput
                name={"method"}
                options={[
                  { name: "GET", value: "GET" },
                  { name: "POST", value: "POST" }
                ]}
                value={restAPIFormData.requestMethod}
                onChange={handleChange}
              />
              <Spacing width={"10px"} height={"1px"} />
              <TextInput
                name={"requestUrl"}
                id={"requestUrl"}
                placeholder={"Request url"}
                value={restAPIFormData.requestUrl}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </div>
            <br />
            <label className="textinput__label">URL Parameters</label>
            <DualInput
              handleChange={(e) => handleChangeDualInput(e, 0)}
              onAdd={handleAdd}
              value={restAPIFormData.urlparameters[0]}
            />
            <br />
            {restAPIFormData.urlparameters.length > 1
              ? restAPIFormData.urlparameters.map((obj, idx) => {
                  return idx !== 0 ? (
                    <>
                      <DualInput
                        key={idx}
                        value={obj}
                        handleChange={(e) => handleChangeDualInput(e, idx)}
                        onAdd={handleAdd}
                        onRemove={() => handleRemove(idx)}
                      />
                      <br />
                    </>
                  ) : null;
                })
              : null}
            {restAPIFormData.requestMethod === "POST" && (
              <>
                <label htmlFor="requestData" className="textinput__label">
                  Body
                </label>
                {/* <textarea
                    name="requestData"
                    id="requestData"
                    cols="30"
                    rows="10"
                    className="actionmodal__textarea"
                    onChange={handleChange}
                    value={restAPIFormData.requestData}
                  /> */}
                <div className="actionmodal__datainput">
                  <JsonInput
                    name={"body"}
                    value={restAPIFormData.requestData}
                    onChange={handleChangeData}
                  />
                </div>
              </>
            )}
            <br />
            <br />
          </div>
          <hr className="actionmodal__verticalline" />
          <div className="actionmodal__content__section2">
            <ActionContentTwo />
          </div>
          <hr className="actionmodal__verticalline" />
          <div className="actionmodal__content__section3">
            <ActionContentThree content={queryResponse} />
          </div>
        </div>
      </>

      <ReactModal
        isOpen={modalOpened}
        contentLabel={"Save response object"}
        style={{
          overlay: {
            background: "rgba(182, 220, 246, 0.3)"
          },
          content: {
            height: "max-content",
            width: "50vw",
            left: "50%",
            top: "25%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 5px rgba(100, 100, 100, 0.3)"
          }
        }}
      >
        <ActionModal
          variableName={dataVariable.variableName}
          onVariableChange={handleChange}
          responseData={dataVariable.data}
          onDataChange={(data) => handleChangeData(data, true)}
          onClickSave={() => {}}
          onClickClose={() => setModalOpened(false)}
        />
      </ReactModal>
    </div>
  );
};

export default APIActionModal;

const DualInput = ({ handleChange, onAdd, onRemove, value }) => {
  return (
    <div className="actionmodal__dualinput">
      <TextInput
        name={"urlparametersKey"}
        placeholder={"Key"}
        value={value.key}
        onChange={handleChange}
      />
      <Spacing width={"10px"} height={"1px"} />
      <TextInput
        name={"urlparametersValue"}
        placeholder={"Value"}
        value={value.value}
        onChange={handleChange}
      />
      <Spacing width={"10px"} height={"1px"} />
      <FaPlus className="actionmodal__icons" onClick={onAdd} />
      <Spacing width={"10px"} height={"1px"} />
      <FaTimes className="actionmodal__icons" onClick={onRemove} />
    </div>
  );
};
