import React, { useState } from "react";
import "./BottomSheet.css";
import { VscLoading } from "react-icons/vsc";
import { BsBoxArrowUpRight, BsBoxArrowDownLeft } from "react-icons/bs";
import ReactModal from "react-modal";
import APIActionModal from "../APIActionModal/APIActionModal";

const BottomSheet = () => {
  const [actionsBar, toogleActionsBar] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bottomsheet__container">
      <div className="bottomsheet__bottombar">
        <div className="bottombar__firstarea">
          <p className="edit-mode">Mode: Edit Mode</p>
          <button onClick={() => toogleActionsBar(!actionsBar)}>
            {true ? "Open" : "Close"} Actions{" "}
            {true ? (
              <BsBoxArrowUpRight className="actions-icon" />
            ) : (
              <BsBoxArrowDownLeft className="actions-icon" />
            )}
          </button>
        </div>
        {loading ? (
          <p className="loading-with-icon">
            <VscLoading className="loading-icon" />
            Loading
          </p>
        ) : null}
      </div>
      <ReactModal
        isOpen={actionsBar}
        contentLabel={"API actions"}
        onRequestClose={() => toogleActionsBar(!actionsBar)}
        style={{
          overlay: {
            background: "rgba(182, 220, 246, 0.3)"
          },
          content: {
            height: "80vh",
            width: "90vw",
            left: "50%",
            top: "10%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 5px rgba(100, 100, 100, 0.3)"
          }
        }}
      >
        <APIActionModal />
      </ReactModal>
    </div>
  );
};

export default BottomSheet;
