import { useState } from "react";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";
import { Link } from "react-router-dom";
import { path } from "../../utils/contain";

const Register = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <div className="account-container">
      <div className="content">
        <h1>SIGN UP</h1>
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
          <label htmlFor="email">Your Email *</label>
          <div className="input">
            <input
              id="email"
              type="text"
              required
              placeholder="Your Email Address"
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
          <label htmlFor="password">Your Password *</label>
          <div className="input">
            <input
              id="password"
              type="password"
              required
              placeholder="Type your Password"
            />
            {isSuccess && <Check />}
          </div>
          {isError && (
            <span className="error-message">This field is required.</span>
          )}
        </div>
        <div className="desc none">
          Already have an account?
          <Link to={`/${path.AUTH}`}>Log In Now</Link>
        </div>
        <div className="style-btn-1-1">
          <div className="btn primary style-btn-1-2">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
