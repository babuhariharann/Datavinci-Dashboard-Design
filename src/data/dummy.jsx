import React from "react";
import {
  BiBell,
  BiEnvelope,
  BiCog,
  BiCategoryAlt,
  BiVolumeFull,
  BiBuildingHouse,
  BiBarChartAlt2,
  BiUserCircle,
  BiUserVoice,
  BiFoodMenu,
  BiHomeAlt2,
  BiReceipt,
  BiSearchAlt2,
  BiChevronDown,
  BiUpArrowAlt,
} from "react-icons/bi";

import { BsFillExclamationCircleFill } from "react-icons/bs";

import {
  AiFillFire,
  AiFillHeart,
  AiFillStar,
  AiFillShopping,
} from "react-icons/ai";
import {
  BsFillPieChartFill,
  BsFillQuestionCircleFill,
  BsFillFileFill,
} from "react-icons/bs";
import {
  HiTrendingDown,
  HiTrendingUp,
  HiOutlineDotsVertical,
} from "react-icons/hi";

import profile from "../asset/avatar.jpg";

export const links = [
  {
    title: "Admin Panel",
    links: [
      {
        name: "Dashboard",
        icon: <BiHomeAlt2 />,
      },
      {
        name: "Employees",
        icon: <BiUserCircle />,
      },
      {
        name: "Orders",
        icon: <BiFoodMenu />,
      },
      {
        name: "Customers",
        icon: <BiUserVoice />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "Stats",
        icon: <BiBarChartAlt2 />,
      },
      {
        name: "Finances",
        icon: <BiBuildingHouse />,
      },
      {
        name: "Marketing",
        icon: <BiVolumeFull />,
      },
      {
        name: "Integrations",
        icon: <BiCategoryAlt />,
      },
      {
        name: "Reports",
        icon: <BiReceipt />,
      },
      {
        name: "Settings",
        icon: <BiCog />,
      },
    ],
  },
  {
    title: "Insights",
    links: [
      {
        name: "Inbox",
        icon: <BiEnvelope />,
      },
      {
        name: "Notifications",
        icon: <BiBell />,
      },
    ],
  },
];

// Navbar Data

export const navbar = {
  icon: <BiSearchAlt2 />,
  placeholder: "Search Dashboard",
  inbox: <BiEnvelope />,
  notification: <BiBell />,
  img: profile,
};

// Dashboard

export const dashboard = {
  icon: <BsFillFileFill />,
  title: "Listing overview",
  period: "Last 7 days",
  periodIcon: <BiChevronDown />,
  listing: [
    {
      listIcon: <AiFillFire />,
      listTitle: "Active Listings",
      listDot: <HiOutlineDotsVertical />,
      listNumber: "2453",
      listSubtitle: "765 this week",
      listStats: <HiTrendingUp />,
      listColors: "bg-blue-100",
      listColorsMedium: "bg-blue-300",

      listColorsDark: "bg-blue-300",
    },
    {
      listIcon: <BsFillPieChartFill />,
      listTitle: "Draft Listings",
      listDot: <HiOutlineDotsVertical />,
      listNumber: "546",
      listSubtitle: "85 this week",
      listStats: <HiTrendingDown />,
      listColors: "bg-rose-100",
      listColorsMedium: "bg-rose-300",
      listColorsDark: "bg-rose-300",
    },
    {
      listIcon: <BsFillExclamationCircleFill />,
      listTitle: "Expired Listings",
      listDot: <HiOutlineDotsVertical />,
      listNumber: "325",
      listSubtitle: "76 this week",
      listStats: <HiTrendingUp />,
      listColors: "bg-yellow-100",
      listColorsMedium: "bg-yellow-300",
      listColorsDark: "bg-yellow-300",
    },
    {
      listIcon: <BsFillQuestionCircleFill />,
      listTitle: "Inactive Listings",
      listDot: <HiOutlineDotsVertical />,
      listNumber: "246",
      listSubtitle: "24 this week",
      listStats: <HiTrendingDown />,
      listColors: "bg-green-100",
      listColorsMedium: "bg-green-300",
      listColorsDark: "bg-green-300",
    },
  ],
};

// Revenue stats

export const revenue = {
  icon: <BsFillFileFill />,
  title: "Revenue stats",
  subtitle: "$2,78,864k total revenue",
  week: "(this weeK)",
  arrowUpIcon: <BiUpArrowAlt />,
  percentage: "27.8%",
  text: "vs.Previous week",
};

//Sale progress

export const saleProgress = {
  icon: <BsFillFileFill />,
  title: "Sale Progress",
  subtitle: "View Details",
  container: [
    {
      logo: <AiFillHeart />,
      logoBg: "bg-fuchsia-300",
      heading: "Clothing & Shoes",
      category: "Men & Women",
      arrowUpIcon: <BiUpArrowAlt />,
      percentage: "27.8%",
      bgColor: "bg-fuchsia-100",
      textColor: "bg-fuchsia-400",
    },
    {
      logo: <AiFillShopping />,
      logoBg: "bg-yellow-300",
      heading: "Clothing & Shoes",
      category: "Men & Women",
      arrowUpIcon: <BiUpArrowAlt />,
      percentage: "27.8%",
      bgColor: "bg-yellow-100",
      textColor: "bg-yellow-400",
    },
    {
      logo: <AiFillStar />,
      logoBg: "bg-blue-300",
      heading: "Clothing & Shoes",
      category: "Men & Women",
      arrowUpIcon: <BiUpArrowAlt />,
      percentage: "27.8%",
      bgColor: "bg-blue-100",
      textColor: "bg-blue-400",
    },
    {
      logo: <AiFillFire />,
      logoBg: "bg-rose-300",
      heading: "Clothing & Shoes",
      category: "Men & Women",
      arrowUpIcon: <BiUpArrowAlt />,
      percentage: "27.8%",
      bgColor: "bg-rose-100",
      textColor: "bg-rose-400",
    },
  ],
};
