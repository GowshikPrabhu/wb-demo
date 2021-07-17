import React from "react";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header__left">
        <AiOutlineMenu className="header__menuIcon" />
        <h4 className="header__title">Project Name</h4>
        <span className="header__saved">(Saved)</span>
      </div>
      <div className="header__right">
        <FaPlay className="header__playIcon" />
        <button className="header__shareButton">Share</button>
        <button className="header__publishButton">Publish</button>
        <button className="header__accountButton">
          <img src="https://via.placeholder.com/150" alt="Account" />
        </button>
      </div>
    </header>
  );
};

export default Header;
