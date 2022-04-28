import { FC, useState } from "react";
import { IData } from "./SlideTrending";
interface IProps {
  datas: IData[];
  cbIndex: (i: number) => void;
}
const ClickSildeTrending: FC<IProps> = ({ datas, cbIndex }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const handleClick = (i: number) => {
    cbIndex(i);
    setSlideIndex(i);
  };
  return (
    <div className="slider">
      {datas.map((data, index) => {
        return (
          <div
            className={
              slideIndex === index ? "slider-item active" : "slider-item"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={data.url} alt={data.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ClickSildeTrending;
