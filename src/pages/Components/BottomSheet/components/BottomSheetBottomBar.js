import React from "react";
import { VscLoading } from "react-icons/vsc";
import { BsBoxArrowUpRight, BsBoxArrowDownLeft } from "react-icons/bs";

const BottomSheetBottomBar = ({ onToggleAction }) => {
  return (
    <div className="bottomsheet__bottombar">
      <div className="bottombar__firstarea">
        <p className="edit-mode">Mode: Edit Mode</p>
        <button onClick={onToggleAction}>
          {true ? "Open" : "Close"} Actions{" "}
          {true ? (
            <BsBoxArrowUpRight className="actions-icon" />
          ) : (
            <BsBoxArrowDownLeft className="actions-icon" />
          )}
        </button>
      </div>
      {true ? (
        <p className="loading-with-icon">
          <VscLoading className="loading-icon" />
          Loading
        </p>
      ) : null}
    </div>
  );
};

export default BottomSheetBottomBar;
