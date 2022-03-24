import { useState } from "react";
import "../../../styles/account.scss";
import { ReactComponent as Check } from "../../../images/icons/check.svg";
import { ReactComponent as ArrowRight } from "../../../images/icons/ArrowRight.svg";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
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
          <h4>My Profile</h4>
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
          id="date-group"
          className={
            isError
              ? "input-group error"
              : isSuccess
              ? "input-group success"
              : "input-group"
          }
        >
              <select name="day" id="day">
                <option value="">DD</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="lgbt">Non-binary</option>
                <option value="none">Prefer not to say</option>
              </select>
           
              <select name="month" id="month">
                <option value="">MM</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="lgbt">Non-binary</option>
                <option value="none">Prefer not to say</option>
              </select>
            
              <select name="year" id="year">
                <option value="">YYYY</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="lgbt">Non-binary</option>
                <option value="none">Prefer not to say</option>
              </select>
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
          <div className="gender">
            <select name="gender" id="gender">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="lgbt">Non-binary</option>
              <option value="none">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="desc rule">
          <span>
            <strong>Check the boxes</strong> next to the emails you'd like to
            receive and tap APPLY to save.
          </span>
            <span className="checkbox">
              <input type="checkbox" name="" id="rule-1" />
              <label htmlFor="rule-1">
                Yes, I'd like to receive marketing emails about promotions,
                launches & more.
              </label>
            </span>
            <span className="checkbox">
              <input type="checkbox" name="" id="rule-2" />
              <label htmlFor="rule-2">
                Yes, I'd like to receive marketing emails about my LoyalTea
                points earned and events.
              </label>
            </span>
            <span className="checkbox">
              <input type="checkbox" name="" id="rule-3" />
              <label htmlFor="rule-3">
                I no longer wish to receive any marketing emails from FLORAL.
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

export default MyProfile;
