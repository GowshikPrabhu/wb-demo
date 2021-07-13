import React from "react";
import "./DropdownInput.css";

/**
 *
 * @param {string} label Input label
 * @param {string} name Input name
 * @param {object[]} options Options for dropdown
 * @returns
 */
const DropdownInput = ({ label = "", name, options }) => {
  return (
    <>
      {label.length > 0 ? (
        <label className="dropdown__label">{label}</label>
      ) : null}
      <select name={name} id={name} className="dropdown__select">
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownInput;
