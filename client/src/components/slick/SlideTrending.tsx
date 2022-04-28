import { FC, useState } from "react";
import BasicRating from "../Rating";
import "../../styles/slick/slideTrending.scss";
import { ReactComponent as TriArrow } from "../../images/icons/TriArrow.svg";
import { ReactComponent as PropertiesCol } from "../../images/icons/PropertiesCol.svg";
import ClickSildeTrending from "./ClickSildeTrending";
import CartSildeTrending from "./CartSildeTrending";
interface IProps {
  slide?: boolean;
  button?: boolean;
}
interface IFiltersData {
  types: string;
  level: string;
  benefits: string;
}
interface IPropertiesData {
  name: string;
  url: string;
}
export interface IData {
  name: string;
  price: number;
  url: string;
  waterUrl: string;
  filters: IFiltersData;
  properties: IPropertiesData[];
  desc: string;
  rating: number;
}
export const datas: IData[] = [
  {
    name: "DARK CHOCOLATE PEPPERMINT TEA",
    price: 9.78,
    url: "https://lh3.googleusercontent.com/k0YwPB-hkyEMDiIHKJWeN4tZP4vVs4ssTXf3TWj8v1jEPnAUft8bTMx3UmMzfTu8aPqgR-2NKzoa6je0Es0PYI5yk8ayEIiZdmllMV1yWOIMCsNzKt_Q5qruwAXPEJWJKPXSlFyoFA=w2400",
    waterUrl:
      "https://lh3.googleusercontent.com/Bckqqi9f8VbYincpoPsNCZ3ERgVzXKtd48z6Yx3ZnhZZGDvp3sctLwWqIo_cSy2WFsR8V9MMU0VSwPnaG8w0PvgvNzz8CRS22Q2Lq3NSu9GEq3dyRZ3U9ENiv7NJrQHST3Mto-BevA=w2400",
    filters: {
      types: "Herbal Tea",
      level: "Caffeine-free",
      benefits: "Wellness",
    },
    properties: [
      {
        name: "Cacao Nibs",
        url: "https://lh3.googleusercontent.com/3jEYAZqoJy6c0bROlalQ8jK5CZbTIgi3vmABI_A0K4w8fLT_RE12aAWPZayv908NOrW9lFYA_wtxcOF_vqMbmvPS9LNOm_TD6_Bs3lfHPcuHphqxK7KCJF6wGAX0rDIAEdcw6o51qg=w2400",
      },
      {
        name: "Pink Peppercorn",
        url: "https://lh3.googleusercontent.com/lylrt5rWGvWfyrwYDNBOI3dmg9cD_a098bTgDLnRwY2s6V5ey9TqtJLYqqlPWkZIc5cXEhwcIldVh1q-dUOQkSwLDTXAkqwejs7dOdVT7HUD3B_NkHrtN5bPxEKTa5Fggzpb5TrV9Q=w2400",
      },
      {
        name: "Peppermint",
        url: "https://lh3.googleusercontent.com/T43qeutaKi8OcLWqJtktbBfVGbnatFarC8-LTCEagdacwJ0EEAV6Po8sc_Zf8TxyxwfZ83zD-aKM710FQYqtkXe6x7j-31EB5TxI2574EKj3JnYrHEm8f90AKJSo1CEETJLPJMAQkw=w2400",
      },
    ],
    desc: "Immerse yourself into a cup of this inviting loose leaf chamomile-infused blend. This calming brew steeps a floral cup with a thin liquor along with a sweet and spicy character. The perfect answer to your evening tea needs.",
    rating: 4,
  },
  {
    name: "DARK CHOCOLATE PEPPERMINT tea",
    price: 9.78,
    url: "https://lh3.googleusercontent.com/RxGKTWdVcAyWmwt_uDOO3SweAV1Q-47q1nSITXUBTnxXG4_3rPWextLHas1Xq0IBbCM984h1HYk_73BGLXJUbfuEZvvXjHDYjgtED0pWsdWMEjDG4s9nMGNU5mp-p7lZ19rHwSs02w=w2400",
    waterUrl:
      "https://lh3.googleusercontent.com/G94Y43HYZZw04ZDeB6c3llZhwOLBroMrZpMvDJjT4FOAp-A5Lv4bKz4mSFxrUlFTbq0ufMoftmt6W3rh-aL6jFnEiCHtYJmE_iJUJWVAxWhaps3QsHox_vcZgJzowsBnl8e-X9EXOw=w2400",
    filters: {
      types: "Herbal Tea",
      level: "Caffeine-free",
      benefits: "Wellness",
    },
    properties: [
      {
        name: "Chamomile",
        url: "https://lh3.googleusercontent.com/ME_2nRj-o2YZ9ZU463XW-ZmATy-4IQRt3tTyCJSaM5rt3WaZ0Dai40IIKEu9JzmfqZQ6ZEONXEzoK3-vsDMtLchw3J6Wh2OPt4P48KP989Vc9zks8K3vJFNXsGLBqMqIGHSEs3NtKA=w2400",
      },
      {
        name: "Pink Peppercorn",
        url: "https://lh3.googleusercontent.com/lylrt5rWGvWfyrwYDNBOI3dmg9cD_a098bTgDLnRwY2s6V5ey9TqtJLYqqlPWkZIc5cXEhwcIldVh1q-dUOQkSwLDTXAkqwejs7dOdVT7HUD3B_NkHrtN5bPxEKTa5Fggzpb5TrV9Q=w2400",
      },
      {
        name: "Roses",
        url: "https://lh3.googleusercontent.com/eJDB04O5hviVFwQ6DbcRbxoxilMVnfSTQZZZbdlkOtJUFfYaK5vAP1mI-fUf2C3vlT3WFBFBPmjqylznRs_Ya9kar7nC6O2yDx6ElV1lQLzviC4CNoS_5KDrCZPDGXA76tNqi1W93w=w2400",
      },
    ],
    desc: "Immerse yourself into a cup of this inviting loose leaf chamomile-infused blend. This calming brew steeps a floral cup with a thin liquor along with a sweet and spicy character. The perfect answer to your evening tea needs.",
    rating: 2,
  },
  {
    name: "LEMON MERINGUE BLEND TEA",
    price: 9.78,
    url: "https://lh3.googleusercontent.com/gl43xfcIPI2qjbhWgKTbOhSwKHJVHeYrhYhPrUARttEmSttPY58DM_PDGbRkISTSdpjCTqVQD70rmgZOWGnb3dH1QnY1eLffqWgVOdGx3VJ9VQrLleUkw-QJTK7jgMLSCNvoa-BpBQ=w2400",
    waterUrl:
      "https://lh3.googleusercontent.com/Bckqqi9f8VbYincpoPsNCZ3ERgVzXKtd48z6Yx3ZnhZZGDvp3sctLwWqIo_cSy2WFsR8V9MMU0VSwPnaG8w0PvgvNzz8CRS22Q2Lq3NSu9GEq3dyRZ3U9ENiv7NJrQHST3Mto-BevA=w2400",
    filters: {
      types: "Herbal Tea",
      level: "Caffeine-free",
      benefits: "Wellness",
    },
    properties: [
      {
        name: "Cornflower",
        url: "https://lh3.googleusercontent.com/Fk35THjFXeiYReoZbcSQuF-U2KBNZH-1pVlVSer8Zso51u-IemZ9a798Sn0k3USoa_MAVcWJbSXAzhGT9qDrTiVe1rBJXACN9wz3tBogPbDEm35ocDzxJqw4QCPPnpZbhUjK2JU-ew=w2400",
      },
      {
        name: "Roses",
        url: "https://lh3.googleusercontent.com/eJDB04O5hviVFwQ6DbcRbxoxilMVnfSTQZZZbdlkOtJUFfYaK5vAP1mI-fUf2C3vlT3WFBFBPmjqylznRs_Ya9kar7nC6O2yDx6ElV1lQLzviC4CNoS_5KDrCZPDGXA76tNqi1W93w=w2400",
      },
      {
        name: "Orange Peels",
        url: "https://lh3.googleusercontent.com/M7GOXl5UNQ3Cdpj-fWlWkXIHKPQHz7xLI4Gx9eikxebttA-h4rVYP1Rm9ywjTBLGxGNX2tlwReNLkRCjzxzEdDajeaxYFfbPJyeh4MQqKkLjUqHZAxbDvDi1TIpobvEAF2TWbJuI1g=w2400",
      },
    ],
    desc: "Immerse yourself into a cup of this inviting loose leaf chamomile-infused blend. This calming brew steeps a floral cup with a thin liquor along with a sweet and spicy character. The perfect answer to your evening tea needs.",
    rating: 5,
  },
  {
    name: "LEMON MERINGUE BLEND TEA",
    price: 9.78,
    url: "https://lh3.googleusercontent.com/T4QNpP7I5ktcMUY7aYh1ZoPttRHAOzdJtG5vXnwDAdsq4y_2S0-rdxy15Xnn08PudIRJpEflieDvHaCp2A1oRe6ZnlvSesfJET1lXYh63h0j-P7kWA8fzjFa_F5V4G4EFKYSprteSw=w2400",
    waterUrl:
      "https://lh3.googleusercontent.com/Bckqqi9f8VbYincpoPsNCZ3ERgVzXKtd48z6Yx3ZnhZZGDvp3sctLwWqIo_cSy2WFsR8V9MMU0VSwPnaG8w0PvgvNzz8CRS22Q2Lq3NSu9GEq3dyRZ3U9ENiv7NJrQHST3Mto-BevA=w2400",
    filters: {
      types: "Herbal Tea",
      level: "Caffeine-free",
      benefits: "Wellness",
    },
    properties: [
      {
        name: "Orange Peels",
        url: "https://lh3.googleusercontent.com/M7GOXl5UNQ3Cdpj-fWlWkXIHKPQHz7xLI4Gx9eikxebttA-h4rVYP1Rm9ywjTBLGxGNX2tlwReNLkRCjzxzEdDajeaxYFfbPJyeh4MQqKkLjUqHZAxbDvDi1TIpobvEAF2TWbJuI1g=w2400",
      },
      {
        name: "Chamomile",
        url: "https://lh3.googleusercontent.com/ME_2nRj-o2YZ9ZU463XW-ZmATy-4IQRt3tTyCJSaM5rt3WaZ0Dai40IIKEu9JzmfqZQ6ZEONXEzoK3-vsDMtLchw3J6Wh2OPt4P48KP989Vc9zks8K3vJFNXsGLBqMqIGHSEs3NtKA=w2400",
      },
      {
        name: "Organic Rooibos",
        url: "https://lh3.googleusercontent.com/3YR08J-fweFVSX7krJMTMCWzKpvUdDQN7iXfaLIvPCQQePBJsjPeC-cTf2bvUscIGVQUgOhDOt8ts6XDl3CvNg09kK6_mJDsYyg53K-RqOexrlT6gpDjLaEK-CtuE_dXCv9vMYhR5g=w2400",
      },
    ],
    desc: "Immerse yourself into a cup of this inviting loose leaf chamomile-infused blend. This calming brew steeps a floral cup with a thin liquor along with a sweet and spicy character. The perfect answer to your evening tea needs.",
    rating: 5,
  },
];
const SlideTrending: FC<IProps> = ({ slide, button }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const index = (i: number)=> {
    setSlideIndex(i)
  }
  return (
    <div className="trending-container">
      <div className="trending-left">
        <div className="content">
          <div className="content-title">
            <h4>trending now</h4>
            <div className="name">{datas[slideIndex].name}</div>
            <div className="filters">
              <span>{datas[slideIndex].filters.benefits}</span>
              <span>{datas[slideIndex].filters.level}</span>
              <span>{datas[slideIndex].filters.types}</span>
            </div>
          </div>
          <div className="content-desc">
            <div className="rating">
              <BasicRating type="readOnly" number={datas[slideIndex].rating} />
            </div>
            <div className="desc">{datas[slideIndex].desc}</div>
            {slide && (
              <div className="action">
                <div>More Detail</div>
                <TriArrow />
              </div>
            )}
          </div>
        </div>
        {slide && Object.keys(datas.length) ? (
          <ClickSildeTrending datas={datas} cbIndex={index} />
        ) : button ? (
          <CartSildeTrending />
        ) : null}
      </div>
      <div className="trending-right">
        <div className="background-img">
          <div className="background-1">
            <div className="background-1-1"></div>
            <div className="background-1-2">
              <div
                className="background-3"
                onMouseLeave={() => setHover(false)}
                onMouseOver={() => setHover(true)}
              >
                <img
                  src={
                    hover ? datas[slideIndex].waterUrl : datas[slideIndex].url
                  }
                  alt={datas[slideIndex].name}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="properties">
          {datas[slideIndex].properties.map((properties, index) => {
            return (
              <div className="properties-item" key={index}>
                <div className="item-col">
                  <PropertiesCol />
                </div>
                <div className="item-img">
                  <img src={properties.url} alt={properties.name} />
                </div>
                <div className="item-name">{properties.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideTrending;
