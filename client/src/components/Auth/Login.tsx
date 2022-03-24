import { useState } from "react";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";
import { Link, useLocation } from "react-router-dom";
import { path } from "../../utils/contain";

const Login = () => {
  const location = useLocation()
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <div className="account-container">
      <div className="content">
        <h1>LOG IN</h1>
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
        <div className="desc main">
            <Link to={`${location.pathname}/${path.FORGOT}`}>Forgot your pasword?</Link>
            <Link to={`${location.pathname}/${path.REGISTER}`}>Create an account</Link>
        </div>
        <div className="style-btn-1-1">
          <div className="btn primary style-btn-1-2">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
