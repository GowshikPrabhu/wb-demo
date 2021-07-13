import React from "react";
import "./TextInput.css";

/**
 *
 * @param {string} name Input name
 * @param {string} label Input label
 * @param {any} value Input value
 * @param {string} placeholder Input placeholder
 * @param {string} hint Input hint
 * @param {Function} onChange On Change handler
 */
const TextInput = ({
  name,
  label = "",
  onChange,
  placeholder,
  value,
  hint = "",
  ...rest
}) => {
  return (
    <>
      {label.length > 0 ? (
        <label className="textinput__label">{label}</label>
      ) : null}
      <input
        className="textinput__input"
        type="text"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {hint.length > 0 ? <span className="input-hint">{hint}</span> : null}
    </>
  );
};

export default TextInput;
