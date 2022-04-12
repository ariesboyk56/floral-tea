import { FC } from "react";
import { Outlet } from "react-router-dom";
import SlideBackgroundTea from "../../components/slick/SlideBackgroundTea";

const Tea: FC = () => {
  return (
    <>
      <SlideBackgroundTea />
      <Outlet />
    </>
  );
};

export default Tea;
