import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkList = [
    {
      link: "Home",
      id: 0,
    },
    {
      link: "about",
      id: 1,
    },
    {
      link: "Projects",
      id: 2,
    },
    {
      link: "Experience",
      id: 3,
    },
    {
      link: "Contact",
      id: 4,
    },
  ];

  return (
    <div
      className={[
        "absolute",
        !isMenuOpen
          ? "z-[1] absolute w-[69px] h-[47px] p-10"
          : "items-center justify-evenly flex flex-col z-[1] absolute w-screen h-screen bg-[#202029]",
      ]}
    >
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen &&
        linkList.map((l) => (
          <Link
            className="text-[30px] text-white cursor-pointer"
            onClick={()=>setIsMenuOpen(false)}
            to={l.link}
            key={l.id}
          >
            {l.link}
          </Link>
        ))}
    </div>
  );
};

export default Navbar;
