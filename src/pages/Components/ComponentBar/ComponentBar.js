import React from "react";
import "./ComponentBar.css";
import { FaLayerGroup } from "react-icons/fa";
import EditComponent from "./EditComponent";

const ComponentBar = ({ addComponent, reFetchComponentsList }) => {
  return (
    <aside className="componentbar">
      <div className="componentbar__header">
        <center>
          <FaLayerGroup className="componentbar__icon" />
          Components
        </center>
      </div>
      <div className="componentbar__content" style={{ padding: 10 }}>
        <EditComponent
          reFetchComponentsList={reFetchComponentsList}
          addComponent={(componentType) => addComponent(componentType)}
        />
      </div>
    </aside>
  );
};

export default ComponentBar;
