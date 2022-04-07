import "../styles/newsletter.scss";
import { ReactComponent as ArrowRight } from "../images/icons/ArrowRight.svg";
import { ReactComponent as CheckCircle } from "../images/icons/CheckCircle.svg";
import { useState } from "react";
const Newsletter = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <div className="newsletter">
      <div
        style={
          !isShow
            ? { backgroundColor: "#ee732c" }
            : { backgroundColor: "#056552" }
        }
        className="newsletter-background style1-1"
      >
        {isShow ? (
          <>
            <div className="newsletter-signup style1-2">
              <h1>sign up for our newsletter</h1>
              <div className="newsletter-signup_input">
                <input type="text" placeholder="Your Email Address" />
                <div className="input-icon" onClick={() => setIsShow(false)}>
                  <ArrowRight />
                </div>
              </div>
              <h6>Sign up & Get 10% off your first purchase</h6>
            </div>
          </>
        ) : (
          <>
            <div className="newsletter-done style1-3">
              <CheckCircle />
              <h1>THANK YOU</h1>
              <h6>Form submitted successfully!</h6>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
