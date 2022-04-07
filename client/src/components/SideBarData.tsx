import { ReactComponent as DropDown } from "../images/icons/DropDown.svg";
import { ReactComponent as DropUp } from "../images/icons/DropUp.svg";

export interface ISideBarData {
  title: string;
  path?: string;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  subNav?: ISideBarData[];
}

export const SideBarData: ISideBarData[] = [
  {
    title: "Tea",
    path: "/tea",
    iconClosed: <DropDown />,
    iconOpened: <DropUp />,
    subNav: [
      {
        title: "All teas",
      },
      {
        title: "News Release",
      },
      {
        title: "By Benefit",
        iconClosed: <DropDown />,
        iconOpened: <DropUp />,
        subNav: [
          {
            title: "Energy",
          },
          {
            title: "Detox & Digestion",
          },
          {
            title: "Relax",
          },
          {
            title: "Wellness",
          },
          {
            title: "Immunity",
          },
        ],
      },
      {
        title: "By type",
        iconClosed: <DropDown />,
        iconOpened: <DropUp />,
        subNav: [
          {
            title: "Herbal",
          },
          {
            title: "Mate’",
          },
          {
            title: "Matcha",
          },
          {
            title: "Pu’erh",
          },
          {
            title: "Rooibos",
          },
        ],
      },
      {
        title: "Sales",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    iconClosed: <DropDown />,
    iconOpened: <DropUp />,
    subNav: [
      {
        title: "Our Story",
      },
      {
        title: "Partners",
      },
    ],
  },
  {
    title: "Explore",
    path: "/explore",
    iconClosed: <DropDown />,
    iconOpened: <DropUp />,
    subNav: [
      {
        title: "Find my tea Quiz",
      },
      {
        title: "About Us",
      },
      {
        title: "Tea 101",
      },
      {
        title: "Blog",
      },
    ],
  },
  {
    title: "Account",
    path: "/account",
    iconClosed: <DropDown />,
    iconOpened: <DropUp />,
    subNav: [
      {
        title: "Sign Up/Log In",
      },
      {
        title: "Where's my Order",
      },
      {
        title: "My wishlist",
      },
    ],
  },
  {
    title: "Language",
    path: "/language",
    iconClosed: <DropDown />,
    iconOpened: <DropUp />,
    subNav: [
      {
        title: "English",
      },
      {
        title: "Vietnamese",
      },
    ],
  },
];
