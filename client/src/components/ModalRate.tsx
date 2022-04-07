import { useState } from "react";
import "../styles/modal.scss";
import BasicRating from "./Rating";
interface IProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalRate = (props: IProps) => {
  const { close } = props;
  return (
    <div className="modal-container">
      <div className="modal-rate">
        <div className="close-btn" onClick={() => close(false)}>
          X
        </div>
        <div className="model-rate_content">
          <div className="model-rate_content-rate">
            <div>Select a rating:</div>
            <div>
              <BasicRating type="controlled" />
            </div>
          </div>
          <div className="model-rate_content-review">
            <div className="">
              <label htmlFor="title">Enter title of your review:</label>
              <div className="input input-text">
                <input
                  type="text"
                  id="title"
                  placeholder="Type your title here...."
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="review">Enter your review:</label>
              <div className="input textarea">
                <textarea id="review" placeholder="Type your review here...." />
              </div>
            </div>
          </div>
          <div className="model-rate_content-btn">
            <div className="rule">
              <input type="checkbox" name="" id="rule-rate" />
              <label htmlFor="rule-rate">I recommend this product</label>
            </div>
            <div className="style-btn-1-1 w86h27">
              <div className="btn primary style-btn-1-2 w86h27">submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRate;
