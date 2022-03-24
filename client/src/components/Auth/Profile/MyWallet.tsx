import { useState } from "react";
import "../../../styles/account.scss";
import { ReactComponent as Check } from "../../../images/icons/check.svg";
import { ReactComponent as ArrowRight } from "../../../images/icons/ArrowRight.svg";
import { useNavigate } from "react-router-dom";

const MyWallet = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const history = useNavigate();
  return (
    <div className="account-container">
      <div className="content">
        <div
          className="content-header"
          onClick={() => history("/account/edit")}
        >
          <h4>Wallet</h4>
          <div className="content-header_back">
            <span>Back</span>
            <ArrowRight className="content-header_icon" />
          </div>
        </div>

        <div
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="name-on-card">Name on card *</label>
          <div className="input">
            <input
              id="name-on-card"
              type="text"
              required
              placeholder="Name on card"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div
          id="card-group"
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
          <div className="item">
            <label htmlFor="card-number">Card Number *</label>
            <div className="input">
              <input
                id="card-number"
                type="text"
                required
                placeholder="Card Number"
              />
              {isSuccess && <Check />}
            </div>
            {isError && (
              <span className="error-message">This field is required.</span>
            )}
          </div>

          <div className="item">
            <label htmlFor="cvv-number">CVV Number *</label>
            <div className="input">
              <input
                id="cvv-number"
                type="text"
                required
                placeholder="CVV Number"
              />
              {isSuccess && <Check />}
            </div>
            {isError && (
              <span className="error-message">This field is required.</span>
            )}
          </div>
        </div>

        <div
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="billing-address">Billing Address *</label>
          <div className="input">
            <input
              id="billing-address"
              type="text"
              required
              placeholder="Billing Address"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="postal-code">Postal Code *</label>
          <div className="input">
            <input
              id="postal-code"
              type="text"
              required
              placeholder="Postal Code"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div className="desc rule">
          <span className="checkbox">
            <input type="checkbox" name="" id="rule-1" />
            <label htmlFor="rule-1">Use as default wallet</label>
          </span>
        </div>
        <div className="style-btn-1-1 w86h27">
          <div className="btn primary style-btn-1-2 w86h27">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
