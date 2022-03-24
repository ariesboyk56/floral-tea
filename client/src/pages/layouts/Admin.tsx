import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";

const Admin: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Admin;
