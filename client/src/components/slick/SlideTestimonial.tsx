import { FC, useState } from "react";
import Slider from "react-slick";
import "../../styles/slick/slideTestimonial.scss";
import BasicRating from "../Rating";
interface IData {
  name: string;
  url: string;
  title: string;
  desc: string;
  rating: number;
}
const datas: IData[] = [
  {
    name: "Hoa Nguyen",
    url: "https://lh3.googleusercontent.com/KqpHMDbDPjHOu0rsVjiBk8GlBqjw8fZMuzdFa-ScsqQOHZqQh3SKFsT8Y2VfxJ5AE3TxGTnlKtaiBH2NElEM_A1WwBQw6XK8QdTjue3tvcRXoyvOeBmVS0LQvDXwe1r3mhk4XKa3mg=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 5,
  },
  {
    name: "Thanh Nguyen",
    url: "https://lh3.googleusercontent.com/dZxhpa8OEGc1-WcX6x0tMF_odD3WsASPaETQDZG87G8gTUJu3qyxUspwfb7oAqejCc_fxSGgRXUD3WofDIfo8wtA3ovzP6U5kb24zXvH07F2xOgp5UI9ZV-yMxotfGkddWKySBsFVA=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 5,
  },
  {
    name: "Tran Trinh",
    url: "https://lh3.googleusercontent.com/rlp0AufY59s32wagvLHJKQe9zAfSryvj2YWfSKuLSKRutxGQa2QEhaCI_kfNtY078VjwooiHZbYbc1DBzQRxWeRsMUSxjrRBAe9pqiVjEiCbSHFHiWotfvh21704Q5uSPK1FrsTvkQ=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 4,
  },
  {
    name: "Helena",
    url: "https://lh3.googleusercontent.com/nNLHtNmRqR1MD-6WdrRLWoFrIwfMZI3g_-fFZAt_iAfOyaFoeiI-v2-ezM15zQFBOaigh46C5-OT4Nusct78n_-BMeSOsm_-T8nSvy7WhpPWcsYQLPrAjErwEAiw4QxZqWwzNtvAWg=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 2,
  },
  {
    name: "Angela",
    url: "https://lh3.googleusercontent.com/RBjPDa9602NRcLLzPnD68YDOvqeldEkzqKaHavtE4uLMbsUQ3rzpmfxZeURS5wyGy7_O1QlN8Mp-_HgaoJBrY_SS0EZZxYf2VOPKG-B7dq18J1YVtv6b7s5vk95iuu4a2fEMKC4gGw=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 3,
  },
  {
    name: "Hoa Nguyen",
    url: "https://lh3.googleusercontent.com/KqpHMDbDPjHOu0rsVjiBk8GlBqjw8fZMuzdFa-ScsqQOHZqQh3SKFsT8Y2VfxJ5AE3TxGTnlKtaiBH2NElEM_A1WwBQw6XK8QdTjue3tvcRXoyvOeBmVS0LQvDXwe1r3mhk4XKa3mg=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 5,
  },
  {
    name: "Thanh Nguyen",
    url: "https://lh3.googleusercontent.com/dZxhpa8OEGc1-WcX6x0tMF_odD3WsASPaETQDZG87G8gTUJu3qyxUspwfb7oAqejCc_fxSGgRXUD3WofDIfo8wtA3ovzP6U5kb24zXvH07F2xOgp5UI9ZV-yMxotfGkddWKySBsFVA=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 5,
  },
  {
    name: "Tran Trinh",
    url: "https://lh3.googleusercontent.com/rlp0AufY59s32wagvLHJKQe9zAfSryvj2YWfSKuLSKRutxGQa2QEhaCI_kfNtY078VjwooiHZbYbc1DBzQRxWeRsMUSxjrRBAe9pqiVjEiCbSHFHiWotfvh21704Q5uSPK1FrsTvkQ=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 4,
  },
  {
    name: "Helena",
    url: "https://lh3.googleusercontent.com/nNLHtNmRqR1MD-6WdrRLWoFrIwfMZI3g_-fFZAt_iAfOyaFoeiI-v2-ezM15zQFBOaigh46C5-OT4Nusct78n_-BMeSOsm_-T8nSvy7WhpPWcsYQLPrAjErwEAiw4QxZqWwzNtvAWg=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 2,
  },
  {
    name: "Angela",
    url: "https://lh3.googleusercontent.com/RBjPDa9602NRcLLzPnD68YDOvqeldEkzqKaHavtE4uLMbsUQ3rzpmfxZeURS5wyGy7_O1QlN8Mp-_HgaoJBrY_SS0EZZxYf2VOPKG-B7dq18J1YVtv6b7s5vk95iuu4a2fEMKC4gGw=w2400",
    title: "Already excited for my first times!",
    desc: "I am so pleased with the tea I received in the first times! The package is so beautiful and thoughtful, and the spoon that comes for free is, in fact, perfect. Can't wait to see what comes next :)",
    rating: 3,
  },
];
const SlideTestimonial: FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "85px",
        }
      }
    ]
  };
  const slide = (datas: IData[]) => {
    return (
      <Slider {...settings}>
        {datas.map((data, index) => {
          return (
            <div className="content-slider_item" key={index}>
              <div
                className={
                  index === slideIndex ? "wrap-item activeSlide" : "wrap-item"
                }
              >
                <div className={index === slideIndex ? "background-active" : ""}>
                  <div className="item-img">
                    <img src={data.url} alt={data.name} />
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
    <div className="testimonial-container">
      <div className="title">
        <h1>TESTIMONIAL</h1>
        <div className="title_desc">Let’s see what others say</div>
      </div>

      <div className="content">
        <div className="content-slider">{slide(datas)}</div>
        {datas.length && (
          <div className="content-info">
            <div className="content-info_rating">
              <BasicRating type="readOnly" number={datas[slideIndex].rating} />
            </div>
            <div className="content-info_desc">
              <div className="title-desc">{datas[slideIndex].title}</div>
              <div className="desc">{datas[slideIndex].desc}</div>
            </div>
            <div className="content-info_by">
              Reviewed by {datas[slideIndex].name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideTestimonial;
