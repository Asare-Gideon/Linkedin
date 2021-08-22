import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick, avatar2 }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="header-icon" />}
      {user
        ? avatar && (
            <Avatar src={user?.photourl} className="header-icon">
              {" "}
              {user?.displayname[0]}
            </Avatar>
          )
        : avatar2 && <Avatar className="header-icon" />}

      <h4 className="header-option-title">{title} </h4>
    </div>
  );
}

export default HeaderOption;
