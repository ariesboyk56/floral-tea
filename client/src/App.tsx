import { FC } from "react";
import { useSelector } from "react-redux";
import Admin from "./pages/layouts/Admin";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Main from "./pages/layouts/Main";
import Home from "./pages/Main/Home";
import { path } from "./utils/contain";
import About from "./pages/Main/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgot from "./components/Auth/Forgot";
import Profile from "./components/Auth/Profile/Profile";
import FindOrders from "./components/Auth/FindOrders";
import Tea from "./pages/Main/Tea";
import MyProfile from "./components/Auth/Profile/MyProfile";
import MyAddress from "./components/Auth/Profile/MyAddress";
import MyWallet from "./components/Auth/Profile/MyWallet";
import MyOrders from "./components/Auth/Profile/MyOrders";
import Notification from "./components/Notification";
import AuthContextProvider from "./contexts/AuthContext";
import TeaList from "./components/Tea/TeaList";
import TeaDetail from "./components/Tea/TeaDetail/TeaDetail";

const App: FC = () => {
  const { message, type } = useSelector((state: any) => state.notification);
  return (
    <Router
    // history={history}
    >
      <AuthContextProvider>
        <Routes>
          <Route path={path.ADMIN} element={<Admin />}>
            <Route path={path.EMPTY} element={<Dashboard />} />
          </Route>

          <Route path={path.HOME} element={<Main />}>
            <Route path={path.EMPTY} element={<Home />} />
            <Route path={path.ABOUT} element={<About />} />
            <Route path={path.TEA} element={<Tea />}>
              <Route path={path.EMPTY} element={<TeaList />} />
              <Route path={path.DETAIL} element={<TeaDetail />} />
            </Route>

            <Route path={path.AUTH} element={<Outlet />}>
              <Route path={path.EMPTY} element={<Login />} />
              <Route path={path.REGISTER} element={<Register />} />
              <Route path={path.FORGOT} element={<Forgot />} />
              <Route path={path.FINDORDERS} element={<FindOrders />} />

              <Route path={path.EDIT} element={<Outlet />}>
                <Route path={path.EMPTY} element={<Profile />} />
                <Route path={path.PROFILE} element={<MyProfile />} />
                <Route path={path.ADDRESS} element={<MyAddress />} />
                <Route path={path.WALLET} element={<MyWallet />} />
                <Route path={path.ORDERS} element={<MyOrders />} />
              </Route>
            </Route>
          </Route>
        </Routes>
        {message && <Notification message={message} type={type} />}
      </AuthContextProvider>
    </Router>
  );
};

export default App;
