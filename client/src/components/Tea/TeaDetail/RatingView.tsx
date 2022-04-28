import { FC } from "react";
import starUrl from "../../../images/icons/star.png";
import "../../../styles/tea/ratingView.scss";
import InputRange from "../../InputRange";
import BasicRating from "../../Rating";
const RatingView: FC = () => {
  return (
    <div className="ratingView">
      <div className="ratingView-wrapper">
        <div className="rating-content">
          <h1>rating & review</h1>
          <div className="rating-content_vote">
            <BasicRating type="readOnly" number={4}/>
            <span>4.5</span>
            <span> 42 reviews</span>
          </div>
          <div className="rating-content_desc">
            <strong>Rating Snapshot</strong> (Select a row below to filter reviews)
          </div>
        </div>
        <div className="view-content">
          <div className="view-content_list">
            <div className="view-content_item">
              <span>5</span>
              <div className="view-content_img">
                <img alt="star" srcSet={`${starUrl} 2x`} />
              </div>
              <div className="view-content_inputRange">
                <InputRange value={50} type="onlyRead" />
              </div>
              <span>40</span>
            </div>
            <div className="view-content_item">
              <span>4</span>
              <div className="view-content_img">
                <img alt="star" srcSet={`${starUrl} 2x`} />
              </div>
              <div className="view-content_inputRange">
                <InputRange value={40} type="onlyRead" />
              </div>
              <span>40</span>
            </div>
            <div className="view-content_item">
              <span>3</span>
              <div className="view-content_img">
                <img alt="star" srcSet={`${starUrl} 2x`} />
              </div>
              <div className="view-content_inputRange">
                <InputRange value={30} type="onlyRead" />
              </div>
              <span>30</span>
            </div>
            <div className="view-content_item">
              <span>2</span>
              <div className="view-content_img">
                <img alt="star" srcSet={`${starUrl} 2x`} />
              </div>
              <div className="view-content_inputRange">
                <InputRange value={20} type="onlyRead" />
              </div>
              <span>20</span>
            </div>
            <div className="view-content_item">
              <span>1</span>
              <div className="view-content_img">
                <img alt="star" srcSet={`${starUrl} 2x`} />
              </div>
              <div className="view-content_inputRange">
                <InputRange value={10} type="onlyRead" />
              </div>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingView;
