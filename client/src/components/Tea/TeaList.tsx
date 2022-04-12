import { FC } from "react";
import "../../styles/tea.scss";
import Filters from "../Filters";
import { datas } from "../slick/SlideTrending"; //--modify
import { BsCart3, BsSuitHeart } from "react-icons/bs";
import BasicRating from "../Rating";
import { Pagination } from "../Pagination";
import Sort from "../Sort";

const TeaList: FC = () => {
  let seld = 0.2; //--modify
  let isSale = true; //--modify
  return (
    <div className="tea-container">
      <Filters />
      <div className="content">
        <Sort />
        <div className="content-tea">
          {datas.map((data, index) => {
            return (
              <div key={index} className="tea-item">
                <div className="tea-item_img">
                  <img src={data.url} alt={data.name} />
                  {isSale && (
                    <img
                      id="sales"
                      srcSet="https://lh3.googleusercontent.com/xACoIKoxon4vTiiUFbVDeScOsWEKogMEAmx7TJsRRiYNO_B7ZORy7lbOrvPA6RCpsxbxJxGwC0XQszSMw18wGhXIerfvLKklXlJ8YmJPczUTS9-KQ5MNE7P7otX8lWwBD6UzbrW26Q=w2400 2x"
                      alt="sale"
                    />
                  )}
                </div>
                <div className="tea-item_rating">
                  <BasicRating type="readOnly" number={data.rating} />
                  (41 Reviews)
                </div>
                <div className="tea-item_name">{data.name}</div>
                <div className="tea-item_filters">
                  <span>{data.filters.benefits}</span>
                  <span>{data.filters.level}</span>
                  <span>{data.filters.types}</span>
                </div>
                <div className="tea-item_action">
                  <div className="tea-item_action-price">
                    <span>${data.price - data.price * seld}</span>
                    <span>${data.price}</span>
                  </div>
                  <div className="tea-item_action-list">
                    <div className="whist-list_btn">
                      <BsSuitHeart />
                    </div>
                    <div className="cart_btn">
                      <BsCart3 />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="content-pagination">
          <Pagination pagesCount={10} />
        </div>
      </div>
    </div>
  );
};

export default TeaList;
