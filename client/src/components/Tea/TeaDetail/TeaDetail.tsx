import "../../../styles/tea/productdetail.scss";
import Newsletter from "../../Newsletter";
import SlideTrending from "../../Slick/SlideTrending";
import Comments from "./Comments";
import Instructions from "./Instructions";
import RatingView from "./RatingView";
import Specifications from "./Specifications";

const TeaDetail = () => {
  return (
    <div className="tea-detail">
      <SlideTrending button />
      <Instructions />
      <div className="tea-detail_info">
        <Specifications />
        <RatingView />
      </div>
      <Comments />
      <Newsletter />
    </div>
  );
};

export default TeaDetail;
