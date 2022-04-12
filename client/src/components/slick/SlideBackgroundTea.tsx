import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IDatas {
  name: string;
  url: string;
}
const Datas: IDatas[] = [
  {
    name: "1",
    url: "https://lh3.googleusercontent.com/6kQCLjIyXyC83xuHai3ZCI8tw7FVeMY1shvxN2qTo3w5WFXmRRDQaLO0kNFMttQloWv-SCI0Vzt2dK2_SzYEos_s20feS0kXYyTk1Y30OeAX5a-eJ2Ygro-XLm1k9xJ5aizhlYVGjg=w2400",
  },
  {
    name: "2",
    url: "https://lh3.googleusercontent.com/W892SyQFca5efVeFl9ME00eOl8kb4OtFxs7245P49Lvyo0z-XoUIiA8Kgd4Sm7OUVXCkxM_4OfLokCbqRZ7Up7lNlkzr6IsJ_6FUtHhc_gxjDT67qPb42YcisGcvmcra6236YguNNA=w2400",
  },
];
const SlideBackgroundTea: FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  
  return (
    <Slider {...settings}>
      {Datas.map((data, index) => {
        return (
            <div key={index}>
                <div className="background-tea_container" style={{background: `url(${data.url}) top center / cover no-repeat`, paddingTop: "28%"}}>
                </div>
            </div>
        );
      })}
    </Slider>
  );
};

export default SlideBackgroundTea;
