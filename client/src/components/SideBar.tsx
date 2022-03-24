import { useState } from "react";
import { ISideBarData } from "./SideBarData";

const SideBar = (props: ISideBarData) => {
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
  return (
    <>
      <li className="menu-list_item" onClick={() => setIsSubMenu(!isSubMenu)}>
        <div>{props.title}</div>
        <div className="menu-list_item--drop">
          {props.subNav && isSubMenu
            ? props.iconOpened
            : props.subNav
            ? props.iconClosed
            : null}
        </div>
      </li>
      <ul className="submenu-list">
        {isSubMenu &&
          props.subNav?.map((item, index) => {
            return <li className="submenu-list_item" key={index}>
                {item.title}
            </li>;
          })}
      </ul>
    </>
  );
};

export default SideBar;
