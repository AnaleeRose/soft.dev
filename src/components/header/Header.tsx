import React, { Children } from "react";
import Drawer from "./Drawer";
import { closeHamburger, openHamburger } from "../features/commonstate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GreenBtn from "../resuable/GreenBtn";

const Header = () => {
  let dispatch = useDispatch();
  let links = [
    {
      name: "home",
      location: "/",
    },
    {
      name: "articles",
      location: "/articles",
    },
    {
      name: "publish",
      location: "/publish",
    },
    {
      name: "about us",
      location: "/about-us",
    },
  
  ];
  let list = Children.toArray(
    links.map((link: any) => {
      return (
        <li>
          <Link
            to={`${link.location}`}
            className="capitalize"
            onClick={() => dispatch(closeHamburger("flip"))}
          >
            {link.name}
          </Link>
        </li>
      );
    })
  );
  let props = { text: "Sign Up", links: list };
  return (
    <header className="flex justify-between items-center p-2 px-4">
      <span
        onClick={() => dispatch(openHamburger("flip"))}
        className="fa-solid fa-bars text-2xl mr-4 cursor-pointer md:hidden"
      ></span>
      <h1 className="text-2xl logo">soft.tech </h1>

      <nav className="list-none hidden relative -right-12 lg:-right-24 md:flex justify-around items-center w-3/5 lg:justify-self-end">{list}
      <a href="https://github.com/ReallyCoolProjects/soft.dev" target='_blank'>
        <i className="fa-brands fa-github text-2xl"></i>
        </a></nav>
      <div className="pt-2">
        <Link to="/signup">
          <GreenBtn {...props} />
        </Link>
      </div>
      <Drawer {...props} />
    </header>
  );
};

export default Header;
