import React from "react";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Header = ({
  title = "Project Name",
  onToggleSidebar,
  isSaved,
  onShare,
  onPublish,
  onView,
  onClickAccount
}) => {
  return (
    <header>
      <div className="header__left">
        <AiOutlineMenu className="header__menuIcon" onClick={onToggleSidebar} />
        <h4 className="header__title">{title}</h4>
        <span className="header__saved">
          {isSaved ? "(Saved)" : "(Unsaved)"}
        </span>
      </div>
      <div className="header__right">
        <FaPlay className="header__playIcon" onClick={onView} />
        <button className="header__shareButton" onClick={onShare}>
          Share
        </button>
        <button className="header__publishButton" onClick={onPublish}>
          Publish
        </button>
        <button className="header__accountButton" onClick={onClickAccount}>
          <img src="https://via.placeholder.com/150" alt="Account" />
        </button>
      </div>
    </header>
  );
};

export default Header;
