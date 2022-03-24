import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

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
    iconClosed: <BsChevronCompactDown />,
    iconOpened: <BsChevronCompactUp />,
    subNav: [
      {
        title: "All teas",
      },
      {
        title: "News Release",
      },
      {
        title: "By Benefit",
      },
      {
        title: "By type",
      },
      {
        title: "Sales",
      },
    ]
  },
  {
    title: "Teaware",
    path: "/teaware",
  },
  {
    title: "Explore",
    path: "/explore",
    iconClosed: <BsChevronCompactDown />,
    iconOpened: <BsChevronCompactUp />,
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
      }
    ]
  },
  {
    title: "Account",
    path: "/account",
    iconClosed: <BsChevronCompactDown />,
    iconOpened: <BsChevronCompactUp />,
    subNav: [
      {
        title: "Sign Up/Log In",
      },
      {
        title: "Where's my Order",
      },
      {
        title: "My wishlist",
      }
    ]
  },
  {
    title: "Language",
    path: "/language",
    iconClosed: <BsChevronCompactDown />,
    iconOpened: <BsChevronCompactUp />,
    subNav: [
      {
        title: "English",
      },
      {
        title: "Vietnamese",
      }
    ]
  },
];
