import React, { useState } from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import TextInput from "../TextInput/TextInput";
import "./BottomSheet.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import Spacing from "../Spacing/Spacing";
import BottomSheetTopBar from "./components/BottomSheetTopBar";
import BottomSheetContentTwo from "./components/BottomSheetContentTwo";
import BottomSheetContentThree from "./components/BottomSheetContentThree";
import BottomSheetBottomBar from "./components/BottomSheetBottomBar";
import { doGet, doPost } from "../../../actions/REST_API_actions";
import JsonInput from "../JsonInput/JsonInput";

const BottomSheet = () => {
  const [noOfParameters, setNoOfParameters] = useState(1);
  const [actionsBar, toogleActionsBar] = useState(true);
  const [apiResource, setAPIResource] = useState("REST");
  const [restAPIFormData, setRestAPIFormData] = useState({
    requestUrl: "",
    requestMethod: "GET",
    requestData: {},
    urlparameters: [{ key: "", value: "" }]
  });
  const [queryResponse, setQueryResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let inputName = e.target.name;
    if (inputName === "requestUrl") {
      setRestAPIFormData((prevState) => {
        return { ...prevState, requestUrl: e.target.value };
      });
    } else if (inputName === "requestData") {
      setRestAPIFormData((prevState) => {
        return { ...prevState, requestData: e.target.value };
      });
    } else if (inputName === "resource") {
      setAPIResource(e.target.value);
    } else if (inputName === "method") {
      setRestAPIFormData((prevState) => {
        return { ...prevState, requestMethod: e.target.value };
      });
    }
  };
  const handleChangeDualInput = (e, idx) => {
    let inputName = e.target.name;
    if (inputName === "urlparametersKey") {
      let arrCopy = restAPIFormData.urlparameters;
      arrCopy[idx].key = e.target.value;
      setRestAPIFormData((prevState) => {
        return { ...prevState, urlparameters: [...arrCopy] };
      });
    } else if (inputName === "urlparametersValue") {
      let arrCopy = restAPIFormData.urlparameters;
      arrCopy[idx].value = e.target.value;
      setRestAPIFormData((prevState) => {
        return { ...prevState, urlparameters: [...arrCopy] };
      });
    }
  };
  const handleAdd = () => {
    setRestAPIFormData((prevState) => {
      return {
        ...prevState,
        urlparameters: [...prevState.urlparameters, { key: "", value: "" }]
      };
    });
    setNoOfParameters(noOfParameters + 1);
  };
  const handleRemove = (idx) => {
    if (noOfParameters > 1) {
      let arr = restAPIFormData.urlparameters;
      arr.splice(idx, 1);
      setRestAPIFormData((prevState) => {
        return {
          ...prevState,
          urlparameters: [...arr]
        };
      });
      setNoOfParameters(noOfParameters - 1);
    }
  };

  const clearActionStates = () => {
    setNoOfParameters(1);
    setAPIResource("REST");
    setRestAPIFormData(() => {
      return {
        requestUrl: "",
        requestMethod: "GET",
        requestData: "",
        urlparameters: [{ key: "", value: "" }]
      };
    });
    setQueryResponse({});
  };

  const handleRequestPreview = async () => {
    try {
      setLoading(true);
      if (apiResource === "REST") {
        if (restAPIFormData.requestMethod === "GET") {
          let data = await doGet(
            restAPIFormData.requestUrl,
            restAPIFormData.urlparameters
          );
          setQueryResponse(data);
        }
        if (restAPIFormData.requestMethod === "POST") {
          let body = JSON.stringify(restAPIFormData.requestData);
          let data = await doPost(
            restAPIFormData.requestUrl,
            restAPIFormData.urlparameters,
            body
          );
          setQueryResponse(data);
        }
      }
    } catch (err) {
      alert("Invalid URL");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeData = (data) => {
    setRestAPIFormData((prevState) => {
      return { ...prevState, requestData: { ...data } };
    });
  };

  return (
    <div className="bottomsheet__container">
      {actionsBar && (
        <>
          <BottomSheetTopBar
            onClear={clearActionStates}
            onPreview={handleRequestPreview}
            onSave={() => {}}
          />
          <div className="bottomsheet__content">
            <div className="bottomsheet__content__section1">
              <DropdownInput
                label={"Select resource"}
                name={"resource"}
                options={[
                  { name: "REST API", value: "REST" },
                  { name: "SOAP", value: "SOAP" }
                ]}
                value={apiResource}
                onChange={handleChange}
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
                    className="bottomsheet__textarea"
                    onChange={handleChange}
                    value={restAPIFormData.requestData}
                  /> */}
                  <div className="bottomsheet__datainput">
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
            <hr className="bottomsheet__verticalline" />
            <div className="bottomsheet__content__section2">
              <BottomSheetContentTwo />
            </div>
            <hr className="bottomsheet__verticalline" />
            <div className="bottomsheet__content__section3">
              <BottomSheetContentThree content={queryResponse} />
            </div>
          </div>
        </>
      )}
      <BottomSheetBottomBar
        onToggleAction={() => toogleActionsBar(!actionsBar)}
        loading={loading}
      />
    </div>
  );
};

export default BottomSheet;

const DualInput = ({ handleChange, onAdd, onRemove, value }) => {
  return (
    <div className="bottomsheet__dualinput">
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
      <FaPlus className="bottomsheet__icons" onClick={onAdd} />
      <Spacing width={"10px"} height={"1px"} />
      <FaTimes className="bottomsheet__icons" onClick={onRemove} />
    </div>
  );
};
