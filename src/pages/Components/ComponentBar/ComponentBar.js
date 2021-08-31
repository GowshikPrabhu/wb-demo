import React from "react";
import "./ComponentBar.css";

const ComponentBar = () => {
  return (
    <aside className="componentbar__container">
      <h4>Components</h4>
      <br />
      <details className="componentbar__details">
        <summary>Basic</summary>
        <ul>
          <li>Text</li>
          <li>Image</li>
          <li>List</li>
        </ul>
      </details>
      <br />
      <hr />
      <br />
      <details className="componentbar__details">
        <summary>Container</summary>
        <ul>
          <li>Simple card</li>
          <li>Flex card</li>
          <li>Action card</li>
        </ul>
      </details>
      <br />
      <hr />
      <br />
      <details className="componentbar__details">
        <summary>Chart &amp; graphs</summary>
        <ul>
          <li>Line plot</li>
          <li>Bar plot</li>
          <li>Scatter plot</li>
        </ul>
      </details>
    </aside>
  );
};

export default ComponentBar;
