import "../../styles/productdetail.scss"
import instructions1 from "../../images/product/instructions/instructions1.png"
import instructions2 from "../../images/product/instructions/instructions2.png"
import instructions3 from "../../images/product/instructions/instructions3.png"
const ProductDetail = () => {
  return (
    <>
    <div className="instructions">
        <h1>steeping Instructions</h1>
        <div className="">
            <div className="">
                <img alt="instructions" srcSet={`${instructions1} 2x`} />
                <span>1-2 TBSP</span>
            </div>
            <div className="">
                <img alt="instructions" srcSet={`${instructions2} 2x`} />
                <span>206 F</span>
            </div>
            <div className="">
                <img alt="instructions" srcSet={`${instructions3} 2x`} />
                <span>5 - 7 min</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail