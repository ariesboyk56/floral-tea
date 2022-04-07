import { FC } from "react";
import Slider from "react-slick";
import "../../styles/slick/slideExplore.scss";
import { ReactComponent as ArrowLeft } from "../../images/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/icons/ArrowRight.svg";
interface IData {
  title: string;
  url: string;
  desc: string;
  name: string;
}
const datas: IData[] = [
  {
    name: "TEA 101",
    title: "Learn Everything There Is to Know About Tea",
    url: "https://lh3.googleusercontent.com/1J2oL2m4e-qMBNkKv18Atsf8QXyH57oTgYuoGD4uZM4lziEQIcvMVxGGC8vsznM_93ui0fnluDFvIG8f0F3MPgHWVix4CoyHKTY0zLJb9IRV4oZQU2MGVw35ThUk0ouP4YM1bbt_hA=w2400",
    desc: "With brand new tea knowledge and discoveries unveiling themselves each day, the journey into the world of tea is an exciting and limitless adventure with room for us all to explore,...",
  },
  {
    name: "OUR STORY",
    title: "Floral Tea Is A Tea Importer Based In Vietnam.",
    url: "https://lh3.googleusercontent.com/Edv1clWzjdnRMM273LJhB52rvGojGIR_WwjPf9ZM6BkZ_po4euyh77mLqfiNIVYuMzFBOGvL5vnh5WxDhQCNZbwxLIZ3In2BKJUYmPfrJIXA0UBcmiXZMZbQlT_q7dcVJhGTL8csPQ=w2400",
    desc: "We hand blend and custom craft the world’s finest organic te as and botanicals. Our teas are carefully selected directly from growers...",
  },
  {
    name: "FIND MY TEA QUIZ",
    title: "The Best Way to Find What You Want!",
    url: "https://lh3.googleusercontent.com/vxxPx1tMSUtL5tDmxJsjV_uwWu_TIUl-GA7kk2J95RDpydDmI9ERT_lELePvgO-xmT73rXoeBericCwN80gKx9U2Scju5GI5X72FJloWdwEXoYRzAkaS8QDjiIf1HCzkjkt-y7ABZw=w2400",
    desc: "No matter if you’re new to tea or have been drinking tea for decades, dive into our quick tea quiz and discover new teas you never even knew you would like!",
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
const SlideExplore: FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const slide = (datas: IData[]) => {
    return (
      <Slider {...settings}>
        {datas.map((data, index) => {
          return (
            <div key={index}>
              <div className="wrap-item">
                <div className="item-left">
                    <div className="item-img">
                      <img src={data.url} alt={data.name} />
                    </div>
                </div>
                <div className="item-right">
                  <div className="item-name">{data.name}</div>
                  <div className="item-desc">
                    <div className="item-desc_title">{data.title}</div>
                    <div>{data.desc}</div>
                  </div>
                  <div className="style-btn-1-1 w277h62">
                    <div className="btn primary style-btn-1-2 w277h62">
                        READ MORE
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
    <div className="explore-container">
      <div className="title">
        <h1>EXPLORE</h1>
        <div className="title_desc">
          Discover and Learn Everything About Tea With Us
        </div>
      </div>
      <div className="content">
        <div className="content-slider">{slide(datas)}</div>
      </div>
    </div>
  );
};

export default SlideExplore;
