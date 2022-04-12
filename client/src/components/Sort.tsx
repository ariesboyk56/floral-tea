import { FC, useState } from "react";
import "../styles/tea.scss";
import { ReactComponent as DropDown } from "../images/icons/DropDown.svg";
import { ReactComponent as DropUp } from "../images/icons/DropUp.svg";

const Sort: FC = () => {
  const [isSort, setIsSort] = useState<boolean>(false);

  return (
    <div className="content-sort">
          <div className="sort-box" onClick={() => setIsSort(!isSort)}>
            <div>Sort By</div>
            <div>{isSort ? <DropUp /> : <DropDown />}</div>
          </div>
          {isSort && (
            <div className="sort-list">
              <div className="sort-item">
                <input type="checkbox" name="News Release" id="News Release" />
                <label htmlFor="News Release">News Release</label>
              </div>
              <div className="sort-item">
                <input type="checkbox" name="Best-seller" id="Best-seller" />
                <label htmlFor="Best-seller">Best-seller</label>
              </div>
              <div className="sort-item">
                <input type="checkbox" name="Recommended" id="Recommended" />
                <label htmlFor="Recommended">Recommended</label>
              </div>
              <div className="sort-item">
                <input type="checkbox" name="Sales" id="Sales" />
                <label htmlFor="Sales">Sales</label>
              </div>
            </div>
          )}
        </div>
  )
}

export default Sort