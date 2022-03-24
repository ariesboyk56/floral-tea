import "../styles/header.scss";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { ReactComponent as Vector } from "../images/logo/Vector.svg";
import { useState } from "react";
import SideBar from "./SideBar";
import { SideBarData } from "./SideBarData";

const Header = () => {
  const [isBars, setIsBars] = useState<boolean>(true);
  const [isHistoryModal, setIsHistoryModal] = useState<boolean>(false);
  return (
    <div className="header">
      <div className="header-item bars">
        <div onClick={() => setIsBars(!isBars)}>
          {isBars ? <FaBars /> : <VscChromeClose />}
        </div>

        {!isBars && (
          <div className="menu">
            <div className="search">
              <input
                type="text"
                placeholder="Enter Keyword or Item No."
                onClick={() => setIsHistoryModal(!isHistoryModal)}
              />
              <span className="btn-search">
                <AiOutlineSearch color="#EE732C" />
              </span>
              {isHistoryModal && (
                <div className="search-history">
                  <div>You searched for “Loose Leaf Tea”</div>
                  <ul className="search-history_list">
                    <li className="search-history_list-item">
                      <img alt="img" srcSet="/img/LEMON_MERINGUE.png 2x" />
                      <div className="desc">
                        <div className="desc-title">Lemon Meringue</div>
                        <div className="desc-price">$9.98</div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <ul className="menu-list">
              {SideBarData.map((item, index) => {
                return <SideBar {...item} key={index} />;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="header-item header-logo">
        <Vector />
        <span>Floral</span>
      </div>
      <div className="header-item car">
        <BsCart3 />
      </div>
    </div>
  );
};

export default Header;
