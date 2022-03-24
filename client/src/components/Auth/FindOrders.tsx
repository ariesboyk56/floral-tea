import { useState } from "react";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";

const FindOrders = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <div className="account-container">
      <div className="content content-small">
        <h1>WHERE’S MY ORDER?</h1>
        <p>
          Due to the ongoing COVID-19 pandemic, we’ve implemented stringent
          social distancing measures at our warehouse. As a result, we have
          fewer people working for fewer hours at a time which may cause delays
          in shipping out orders.{" "}
        </p>
        <div
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
          <div className="input">
            <input
              id="email"
              type="text"
              required
              placeholder="Enter your Tracking Number/Email"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>
        <div className="style-btn-1-1">
          <div className="btn primary style-btn-1-2">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default FindOrders;
