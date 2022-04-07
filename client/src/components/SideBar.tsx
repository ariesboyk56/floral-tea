import { useState } from "react";
import SideBarSecondary from "./SideBarSecondary";
import { ISideBarData } from "./SideBarData";

const SideBar = (props: ISideBarData) => {
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
  return (
    <>
      <li
        id={props.title}
        className={isSubMenu ? "menu-list_item active" : "menu-list_item"}
      >
        <h3 onClick={()=>setIsSubMenu(!isSubMenu)}>{props.title}</h3>
        <div className="menu-list--drop">
          {props.subNav && isSubMenu
            ? props.iconOpened
            : props.subNav
            ? props.iconClosed
            : null}
        </div>
        <ul className="submenu-list">
          {
          // isSubMenu &&
           props.subNav?.map((item, index) => {
            return <SideBarSecondary {...item} key={index} />;
          })}
        </ul>
      </li>
    </>
  );
};

export default SideBar;
