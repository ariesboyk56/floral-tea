import { useState } from "react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";
import { path } from "../../utils/contain";
import { ICheckInput, IFormInput } from "../../utils/interface";
import { onBlur } from "../../utils/checkInput";
import authApi from "../../api/authApi";
import { setNotification } from "../../store/actions/notificationAction";

const Register = () => {
  const dispatch = useDispatch()
  const [isError, setIsError] = useState<ICheckInput>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [isSuccess, setIsSuccess] = useState<ICheckInput>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [data, setData] = useState<IFormInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { email, password, firstName, lastName } = data;
  const onChangeRegisterForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const res = await authApi.register(data);
      res.success && dispatch(setNotification({message: "Account created successfully", type: "success"}));
      console.log(res)
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        // Toast
        dispatch(setNotification({message: "Account created failed!", type: "error"}))
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };
  return (
    <div className="account-container">
      <div className="content">
        <h1>SIGN UP</h1>
        <div
          className={
            isError.firstName
              ? "input-group error"
              : isSuccess.firstName
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="firstName">First Name *</label>
          <div className="input">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your First Name"
              defaultValue={firstName}
              onChange={onChangeRegisterForm}
              onBlur={(event) =>
                onBlur(event, isSuccess, setIsSuccess, isError, setIsError)
              }
            />
            {isSuccess.firstName && <Check />}
          </div>
          {isError.firstName && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div
          className={
            isError.lastName
              ? "input-group error"
              : isSuccess.lastName
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="lastName">Last Name *</label>
          <div className="input">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Your Last Name"
              defaultValue={lastName}
              onChange={onChangeRegisterForm}
              onBlur={(event) =>
                onBlur(event, isSuccess, setIsSuccess, isError, setIsError)
              }
            />
            {isSuccess.lastName && <Check />}
          </div>
          {isError.lastName && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div
          className={
            isError.email
              ? "input-group error"
              : isSuccess.email
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="email">Your Email *</label>
          <div className="input">
            <input
              id="email"
              name="email"
              type="text"
              required
              placeholder="Your Email Address"
              defaultValue={email}
              onChange={onChangeRegisterForm}
              onBlur={(event) =>
                onBlur(event, isSuccess, setIsSuccess, isError, setIsError)
              }
            />
            {isSuccess.email && <Check />}
          </div>
          {isError.email && (
            <span className="error-message">This field is required.</span>
          )}
        </div>

        <div
          className={
            isError.password
              ? "input-group error"
              : isSuccess.password
              ? "input-group success"
              : "input-group"
          }
        >
          <label htmlFor="password">Your Password *</label>
          <div className="input">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Type your Password"
              defaultValue={password}
              onChange={onChangeRegisterForm}
              onBlur={(event) =>
                onBlur(event, isSuccess, setIsSuccess, isError, setIsError)
              }
            />
            {isSuccess.password && <Check />}
          </div>
          {isError.password && (
            <span className="error-message">This field is required.</span>
          )}
        </div>
        <div className="desc none">
          Already have an account?
          <Link to={`/${path.AUTH}`}>Log In Now</Link>
        </div>
        <div className="style-btn-1-1" onClick={handleSubmit}>
          <div className="btn primary style-btn-1-2">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
