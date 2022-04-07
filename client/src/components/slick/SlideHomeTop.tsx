import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../styles/slick/slideHomTop.scss";
import Arrow from "../../images/icons/Arrow.svg";
import Highlight from "../../images/icons/Highlight_05.svg";
interface IData {
  title: string;
  url: string;
  desc: string;
  action: string;
}
const data: IData[] = [
  {
    title: "FIND YOUR TEA",
    url: "https://lh3.googleusercontent.com/pZn_Pakx1EwU2ZCRjirCsusLSA3PoKlglbqHJi398p2rJgP8_dTHpH4I14HlmJdD6zVDEglRlxC-TOppCM32wygoAF9G96d088ILBoD5vtdp111r-aNOzdnalh6r4Fw88im1z54JXw=w2400",
    desc: "No matter if you’re new to tea or have been drinking tea for decades, dive into our quick tea quiz and discover new teas you never even knew you would like!",
    action: "FIND MY TEA NOW!",
  },
  {
    title: "MATCHA IS BACK",
    url: "https://lh3.googleusercontent.com/W892SyQFca5efVeFl9ME00eOl8kb4OtFxs7245P49Lvyo0z-XoUIiA8Kgd4Sm7OUVXCkxM_4OfLokCbqRZ7Up7lNlkzr6IsJ_6FUtHhc_gxjDT67qPb42YcisGcvmcra6236YguNNA=w2400",
    desc: "Organic grade A matcha that provides a rich, complex taste and a boost of calm energy for the day. Delicious any time of day! We’re donating 5% of all Matcha Sales to Gift of Registry.",
    action: "SHOP MATCHA",
  },
];
const SlideHomeTop: FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slide = (data: IData[]) => {
    return (
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="content">
                <div className="content-left">
                  <div className="border-img">
                    <img srcSet={item.url} alt={item.title} />
                  </div>
                </div>
                <div className="content-right">
                  <h1>{item.title}</h1>
                  <div className="desc">{item.desc}</div>
                  <div className="background-btn">
                    <div className="slide-content_arrow">
                      <img alt="arrow" srcSet={Arrow} />
                    </div>
                    <div className="slide-content_hl1">
                      <img alt="arrow" srcSet={Highlight} />
                    </div>
                    <div className="slide-content_hl2">
                      <img alt="arrow" srcSet={Highlight} />
                    </div>
                    <div className="style-btn-1-1 w277h62">
                      <div className="btn primary style-btn-1-2 w277h62">
                        {item.action}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  };
  return (
    <div className="slide-top_container">
      <div className="slide-content wide">{slide(data)}</div>
    </div>
  );
};

export default SlideHomeTop;
