import { useState } from "react";
import { ISideBarData } from "./SideBarData";

const SideBarSecondary = (props: ISideBarData) => {
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
  return (
    <>
      <li className="submenu-list_item">
        <div onClick={()=>setIsSubMenu(!isSubMenu)}>{props.title}</div>
        <div className="menu-list--drop">
          {props.subNav && isSubMenu
            ? props.iconOpened
            : props.subNav
            ? props.iconClosed
            : null}
        </div>
        <ul className="submenu-list_secondary">
          {
          // isSubMenu &&
           props.subNav?.map((item, index) => {
            return (
              <li className="submenu-list_item submenu-list_item-secondary" key={index}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
};

export default SideBarSecondary;
