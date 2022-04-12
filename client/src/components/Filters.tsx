import { FC, useState } from "react";
import "../styles/filters.scss";

interface IDatas {
  name: string;
  value: string[];
}
const Datas: IDatas[] = [
  {
    name: "By Benefits",
    value: ["Energy", "Wellness", "Immunity", "Relax", "Detox & Deg... "],
  },
  {
    name: "By Type",
    value: ["Herbal", "Matcha", "Mate’", "Pu’erh", "Roobois"],
  },
  {
    name: "By Price",
    value: ["30", "50", "70"],
  },
  {
    name: "Caffeine Level",
    value: ["Caffeine-Free", "Low", "Medium", "High"],
  },
  {
    name: "Flavor",
    value: [
      "Sweet",
      "Citrus",
      "Fruity",
      "Smooth",
      "Minty",
      "Round",
      "Grassy",
      "Fresh",
      "Floral",
      "Spice",
    ],
  },
  {
    name: "Rating",
    value: ["4 & 5", "3", "2"],
  },
];
const Filters: FC = () => {
  const plus =
    "https://lh3.googleusercontent.com/4207QJcwxYAm5tKrZlBu7rnsoA8-yWXX2LhZzoQwz1313UKQs3qB6Lx7wMJ9JzZXqhqoavK_NwXQK1qI3knKD4H54pGk-GaT4y5AjzG8rqJkn0xM_GrBaqY2-AETmZ4LiPHfvuXoKA=w2400";
  const minus =
    "https://lh3.googleusercontent.com/4UnzcijHVM10CxtiZ32I2EM4NleyqzKBson_NglhliEKmgIPnGp04QWmnguB0QgeClJSwlkJTNmpsMSv8AZnVxH3wIJAOdSodSTYYbnV-Y60NHmhTtas25xpy_752Oruf_iW2Y9RDw=w2400";
  const handleShowFilter = (event: React.MouseEvent, index: number): void => {
    event.preventDefault();
    document.getElementById(`filter-${index}`)?.classList.toggle("show");
    const imgIcon = document.getElementById(`filter-icon-${index}`);
    const currentImg = imgIcon?.getAttribute("src");
    imgIcon?.setAttribute("src", currentImg === plus ? minus : plus);
  };
  const handleShowFiltersMobile = (): void => {
    document.getElementById("wrapper")?.classList.toggle("show");
    const imgIcon = document.getElementById("title-mobile_icon");
    const currentImg = imgIcon?.getAttribute("src");
    imgIcon?.setAttribute("src", currentImg === plus ? minus : plus);
  };
  return (
    <div className="filter-container">
      <div className="title">Shop all</div>
      <div
        className="title-mobile"
        style={{ zIndex: 10 }}
        onClick={handleShowFiltersMobile}
      >
        Filters
        <div style={{ width: "9px", height: "9px", marginLeft: "8px" }}>
          <img
            id="title-mobile_icon"
            src={plus}
            alt="icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "translateY(-4px)",
            }}
          />
        </div>
      </div>
      <div id="wrapper" className="wrapper">
        {Datas.map((data, index) => {
          return (
            <div key={index} className="filter">
              <div
                className="filter-name"
                onClick={(event) => handleShowFilter(event, index)}
              >
                <div>{data.name}</div>
                <div className="filter-icon">
                  <img id={`filter-icon-${index}`} src={plus} alt="icon" />
                </div>
              </div>
              <div className="filter-list" id={`filter-${index}`}>
                {data.value.map((item, index) => {
                  return (
                    <div key={index} className="filter-item">
                      <div>
                        <input
                          type="checkbox"
                          name={item}
                          id={`${item}-${index}`}
                        />
                      </div>
                      <label htmlFor={`${item}-${index}`}>{item}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
