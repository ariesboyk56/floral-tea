import { useCallback, useContext, useEffect, useState } from "react";
import "../styles/header1.scss";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { ReactComponent as Vector } from "../images/logo/Vector.svg";
import { ReactComponent as MenuBars } from "../images/icons/Menu.svg";
import User from "../images/account/my2.png";
import SideBar from "./SideBar";
import { SideBarData } from "./SideBarData";
import { LOCAL_STORAGE_TOKEN } from "../utils/contain";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const [isBars, setIsBars] = useState<boolean>(true);
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isHistoryModal, setIsHistoryModal] = useState<boolean>(false);
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  useEffect(() => {
    token && setIsUser(true);
  }, [token]);
  return (
    <div className="header-container">
      <div className="header wide">
        <div className="header-item bars header-icons ">
          <div onClick={() => setIsBars(!isBars)}>
            {isBars ? (
              <div className="icon-item">
                <MenuBars />
              </div>
            ) : (
              <div className="icon-item">
                <VscChromeClose />
              </div>
            )}
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
              <ul className="menu-list mobile">
                {SideBarData.map((item, index) => {
                  return <SideBar {...item} key={index} />;
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="header-item header-logo">
          <Vector />
          <h3>Floral</h3>
        </div>
        <ul className="header-item menu-list desktop">
          {SideBarData.map((item, index) => {
            return <SideBar {...item} key={index} />;
          })}
        </ul>
        <div className="header-item header-icons">
          {isUser ? (
            <div className="icon-item icon-img">
              <img alt="user" srcSet={`${User} 2x`} />
            </div>
          ) : (
            <div className="icon-item icon-user">
              <FaRegUser />
            </div>
          )}
          <div className="icon-item icon-search">
            <HiOutlineSearch />
          </div>
          <div className="icon-item">
            <BsCart3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
