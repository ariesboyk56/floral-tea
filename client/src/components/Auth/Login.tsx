import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/account.scss";
import { ReactComponent as Check } from "../../images/icons/check.svg";
import { LOCAL_STORAGE_TOKEN, path } from "../../utils/contain";
import { ICheckInput, IFormInput } from "../../utils/interface";
import authApi from "../../api/authApi";
import { onBlur } from "../../utils/checkInput";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../actions/notificationAction";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {setAuth} = useContext(AuthContext)
  const [isError, setIsError] = useState<ICheckInput>({
    email: false,
    password: false,
  });
  const [isSuccess, setIsSuccess] = useState<ICheckInput>({
    email: false,
    password: false,
  });
  const [data, setData] = useState<IFormInput>({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const onChangeLoginForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault()
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await authApi.login(data);
      if(res.success) {
        console.log(res.data)
        setAuth(res.data)
        dispatch(setNotification({message: "Logged successfully", type: "success"}))
        localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.accessToken)
        navigate("/")
      }
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        dispatch(setNotification({message: "Wrong email or password!", type: "error"}))
        // console.log(err.response.status);
        // console.log(err.response.data);
      }
    }
  };
  return (
    <div className="account-container">
      <div className="content">
        <h1>LOG IN</h1>
        <div
          className={
            isError.email
              ? "input-group error"
              : isSuccess.email
              ? "input-group success"
              : "input-group"
          }
        >
          <div className="input">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your Email Address"
              defaultValue={email}
              onChange={onChangeLoginForm}
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
          <div className="input">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Type your Password"
              defaultValue={password}
              onChange={onChangeLoginForm}
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
        <div className="desc main">
          <Link to={`${location.pathname}/${path.FORGOT}`}>
            Forgot your pasword?
          </Link>
          <Link to={`${location.pathname}/${path.REGISTER}`}>
            Create an account
          </Link>
        </div>
        <div className="style-btn-1-1" onClick={handleSubmit}>
          <div className="btn primary style-btn-1-2">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
