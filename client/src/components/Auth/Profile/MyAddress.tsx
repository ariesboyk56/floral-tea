import { useState } from "react";
import "../../../styles/account.scss";
import { ReactComponent as Check } from "../../../images/icons/check.svg";
import { ReactComponent as ArrowRight } from "../../../images/icons/ArrowRight.svg";
import { useNavigate } from "react-router-dom";

const MyAddress = () => {
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
          <h4>My Address</h4>
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
          <label htmlFor="address">Address *</label>
          <div className="input">
            <input
              id="address"
              type="text"
              required
              placeholder="Address Name Ex: Home, Company,..."
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
          <label htmlFor="fisrtName">First Name *</label>
          <div className="input">
            <input
              id="fisrtName"
              type="text"
              required
              placeholder="Your First Name"
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
          <label htmlFor="lastName">Last Name *</label>
          <div className="input">
            <input
              id="lastName"
              type="text"
              required
              placeholder="Your Last Name"
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
          <label htmlFor="phone-number">Phone number *</label>
          <div className="input">
            <input
              id="phone-number"
              type="text"
              required
              placeholder="Your Phone Number"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>
        <div
          id="region-group"
          className={
            isError
            ? "input-group error"
            : isSuccess
            ? "input-group success"
            : "input-group"
          }
        >
          <label htmlFor="" >Region selected *</label>
              <div className="region">
                <select name="city" id="city">
                  <option value="">City</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbt">Non-binary</option>
                  <option value="none">Prefer not to say</option>
                </select>
                <select name="district" id="district">
                  <option value="">District</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbt">Non-binary</option>
                  <option value="none">Prefer not to say</option>
                </select>
                <select name="ward" id="ward">
                  <option value="">Ward</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbt">Non-binary</option>
                  <option value="none">Prefer not to say</option>
                </select>
              </div>
        </div>

        <div className="desc rule">
            <span className="checkbox">
              <input type="checkbox" name="" id="rule-1" />
              <label htmlFor="rule-1">
              Use as default address
              </label>
            </span>
        </div>
        <div className="style-btn-1-1 w86h27">
          <div className="btn primary style-btn-1-2 w86h27">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
