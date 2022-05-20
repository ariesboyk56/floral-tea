import { FC, useState } from "react";
import Package from "../ui/Autocomplete/Package";
import BtnWishList from "../ui/Button/BtnWishList";

const CartSildeTrending: FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const handleQuantity = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    num: number
  ) => {
    event.preventDefault();
    if (quantity === 0 && num === -1) {
      setQuantity(0);
    } else {
      console.log(num);
      setQuantity(quantity + num);
    }
  };
  return (
    <div className="cart">
      <div className="cart-item cart_package">
        <Package />
        <BtnWishList />
      </div>
      <div className="cart-item cart_action">
        <div className="atc_quantity">
          <div
            className="quantity-item"
            onClick={(event) => handleQuantity(event, -1)}
          >
            -
          </div>
          <div className="quantity-item">{quantity}</div>
          <div
            className="quantity-item"
            onClick={(event) => handleQuantity(event, 1)}
          >
            +
          </div>
        </div>
        <div className="style-btn-1-1 w277h62">
          <div className="btn primary style-btn-1-2 w277h62">
            FIND MY TEA NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSildeTrending;
