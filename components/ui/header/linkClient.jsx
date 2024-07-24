"use client";

import { usePathname } from "next/navigation";
import { inter } from "../fonts";
import { useEffect } from "react";

export default function LinkClient({ children, path }) {
  const pathname = usePathname();
  useEffect(() => {
    let boxPadding = 15;
    function handleResize() {
      const box = document.getElementById("box");
      const navLink = document.querySelectorAll("#nav-link");
      navLink.forEach((link) => {
        if (link.getAttribute("href") === pathname) {
          box.style.width = `${link.offsetWidth + boxPadding}px`;
          box.style.height = `${link.offsetHeight + boxPadding}px`;
          box.style.left = `${link.offsetLeft - boxPadding / 2}px`;
          box.style.top = `${link.offsetTop - boxPadding / 2}px`;
        }
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [pathname]);
  return (
    <li className={`font-medium ${inter.className} text-center w-full h-full px-2 py-1 rounded`}>
      {children}
    </li>
  );
}