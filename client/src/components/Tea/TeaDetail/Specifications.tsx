import React, { FC } from "react";
import "../../../styles/tea/specifications.scss";
const Datas = [
  {
    specifications: "Ingredients",
    descriptions:
      "Organic Chamomile, Organic Lavender, Organic Roses, Organic Rosehips, Organic Pink Peppercorn, Contains Allergen Tree Nuts",
  },
  {
    specifications: "Allergens",
    descriptions: "Contains Allergen Tree Nuts",
  },
  {
    specifications: "Product No.",
    descriptions: "10212US01VAR0013071",
  },
];
const Specifications: FC = () => {
  return (
    <div className="specifications">
      <div className="specifications-wrapper">
        <h1>Product Specifications</h1>
        <div className="specifications-content">
          {Datas.map((data, index) => {
            return (
              <div key={index} className="specifications-item">
                <div className="specifications-item_left">
                  {data.specifications}
                </div>
                <div className="specifications-item_right">
                  {data.descriptions}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
