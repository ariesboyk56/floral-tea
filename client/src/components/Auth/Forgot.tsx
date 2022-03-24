import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";
import { path } from "../../utils/contain";

const Forgot = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="account-container">
      <div className="content">
        {!isShow ? (
          <>
            <h2>RESET YOUR PASSWORD</h2>
            <p>
              That’s okay, it happens! Type your email and click the button
              below to reset your password.
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
                  placeholder="Email@gmail.com"
                />
                {isSuccess && <Check />}
              </div>
              {isError && (
                <span className="error-message">This field is required.</span>
              )}
            </div>
            <div className="style-btn-1-1">
              <div className="btn primary style-btn-1-2" onClick={()=>setIsShow(true)}>RESET pASSWORD</div>
            </div>
          </>
        ) : (
          <>
            <h2>You got yourself a new password</h2>
            <p className="done">
            The password for username <strong>hoanguyen@gmail.com</strong> has been successfully changed. Check your email now!
            </p>
            <div className="style-btn-1-1">
              <div className="btn primary style-btn-1-2">send email again</div>
            </div>
          </>
        )}

        <div className="desc main">
          <Link to={`/${path.AUTH}`}>Log In</Link>
          <Link to={`/${path.AUTH}/${path.REGISTER}`}>Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
