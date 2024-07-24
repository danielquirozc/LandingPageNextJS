import Link from "next/link";
import Logo from "../logo";
import { menuLinks } from "./headerData";
import LinkClient from "./linkClient";

export default function Header() {
  const navLinks = menuLinks.map((link) => (
      <LinkClient key={link.id} path={link.url}>
        <Link
          id="nav-link"
          className="w-full text-nowrap h-full"
          href={`${link.url}`}
        >
          {link.title}
        </Link>
      </LinkClient>
  ));

  return (
    <header className="flex w-full z-10 fixed top-0 justify-between px-5 md:px-10 p-4 text-slate-200">
      <div>
        <Logo />
      </div>
      <label className="peer lg:hidden cursor-pointer z-20 text-xl" id="menu">
        ☰
        <input type="checkbox" className="relative z-50 hidden" id="menu-btn" />
      </label>
      <nav className="fixed place-content-center -right-full duration-300 peer-has-[:checked]:right-0 z-10 top-0 bottom-0 w-1/2 h-screen bg-gradient-to-l from-black to-black/0 lg:static lg:[background-image:none] lg:h-auto lg:place-content-start lg:w-auto">
        <ul className="flex flex-col lg:flex-row gap-3 relative">
          <div
            id="box"
            className="bg-red-500 rounded duration-150 absolute -z-10"
          ></div>
          {navLinks}
        </ul>
      </nav>
    </header>
  );
}
