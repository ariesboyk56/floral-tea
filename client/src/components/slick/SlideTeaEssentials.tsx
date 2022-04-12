import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slick/slideTeaEssentials.scss";
import { ReactComponent as ArrowLeft } from "../../images/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/icons/ArrowRight.svg";
interface Idata {
  url: string;
  name: string;
}
const data: Idata[] = [
  {
    url: "https://lh3.googleusercontent.com/ZAlTGtstChRPIzYWgGsf-R_DQXN7HMeoXqavY9uqTVhNUhMxQt8mJu9dQLOBZb08FcLYeJEDWJ4EygR1_QIziePANEr6ZY-H6uE9pCm8FZj4tGNosWFYL_k9DqEj9Mr8XuHzFYX2MQ=w2400",
    name: "Kinto Porcelain teapot",
  },
  {
    url: "https://lh3.googleusercontent.com/3-kCbeV-Z9ZNwNehLqsrtmObvLnfup66JUBcfT6Krs4IwWwnYxAIXvH86N_FxyiiFhds2Mkf-W6z4UFjhnda9N_GuBWx-l60qHDuRUCkSLa1W2TBDInIdw84MPQ6PVeqOSl1kjj_eQ=w2400",
    name: "Tea Snob Mug",
  },
  {
    url: "https://lh3.googleusercontent.com/_fgr99kKveMAbwkp0ssSLGTfQhGaiHfzBDek8QGYghkQE4Zx9eguMW3ZPh4Lm1Lmq_IDmKL9J_agGq9hDDUte8vsPcIbi3rVeBda4T6p6z34uzhklpxOwk4M284ZAxEcjokwWqks5A=w2400",
    name: "At Home Matcha Kit",
  },
  {
    url: "https://lh3.googleusercontent.com/xSZ6vi6ulU5bqq1xFG59YK2cyBcrXFK2FnJp-cR_oBEUCLAbYZ4cOiiJyKlrgLe2Nt9GpTeeu0FOOlEcuawwrqiePcgGbCxjhUV8qQiMdBMlsoP2MrgkwogPpKxZxgrc7sP1t64yXA=w2400",
    name: "Takeya 2 QT Iced Tea Maker",
  },
  {
    url: "https://lh3.googleusercontent.com/ZAlTGtstChRPIzYWgGsf-R_DQXN7HMeoXqavY9uqTVhNUhMxQt8mJu9dQLOBZb08FcLYeJEDWJ4EygR1_QIziePANEr6ZY-H6uE9pCm8FZj4tGNosWFYL_k9DqEj9Mr8XuHzFYX2MQ=w2400",
    name: "Kinto Porcelain teapot",
  },
  {
    url: "https://lh3.googleusercontent.com/3-kCbeV-Z9ZNwNehLqsrtmObvLnfup66JUBcfT6Krs4IwWwnYxAIXvH86N_FxyiiFhds2Mkf-W6z4UFjhnda9N_GuBWx-l60qHDuRUCkSLa1W2TBDInIdw84MPQ6PVeqOSl1kjj_eQ=w2400",
    name: "Tea Snob Mug",
  },
  {
    url: "https://lh3.googleusercontent.com/_fgr99kKveMAbwkp0ssSLGTfQhGaiHfzBDek8QGYghkQE4Zx9eguMW3ZPh4Lm1Lmq_IDmKL9J_agGq9hDDUte8vsPcIbi3rVeBda4T6p6z34uzhklpxOwk4M284ZAxEcjokwWqks5A=w2400",
    name: "At Home Matcha Kit",
  },
  {
    url: "https://lh3.googleusercontent.com/xSZ6vi6ulU5bqq1xFG59YK2cyBcrXFK2FnJp-cR_oBEUCLAbYZ4cOiiJyKlrgLe2Nt9GpTeeu0FOOlEcuawwrqiePcgGbCxjhUV8qQiMdBMlsoP2MrgkwogPpKxZxgrc7sP1t64yXA=w2400",
    name: "Takeya 2 QT Iced Tea Maker",
  },
];
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <ArrowRight onClick={onClick} className={className} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <ArrowLeft onClick={onClick} className={className} />;
}
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
const slide = (data: Idata[]) => {
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div className="content-slide_item" key={index}>
            <div className="wrap-item">
              <div className="item-img">
                <img src={item.url} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
const SlideTeaEssentials: FC = () => {
  return (
    <div className="tea-essentials_container">
      <div className="content">
        <div className="content-title">
          <h1>Tea Essentials</h1>
          <div className="content-title_desc">
            These can’t-go-without tea accessories are everything a tea drinker
            needs to brew the perfect cup of tea.
          </div>
        </div>
        <div className="content-slide">{slide(data)}</div>
        <div className="style-btn-1-1 w277h62">
          <div className="btn primary style-btn-1-2 w277h62">
            LET’S TAKE A LOOK
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTeaEssentials;
