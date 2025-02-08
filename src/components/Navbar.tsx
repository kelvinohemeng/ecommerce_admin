"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  //get the current path the client is on, use this to style the links.
  const pathName = usePathname();
  return (
    <div>
      <Link href={"/"} className={``}>
        Home
      </Link>
      <Link href={"/about"} className={``}>
        About
      </Link>

      {/* for dynamic paths */}
      <Link
        href={"/about"}
        className={`${
          pathName.startsWith("/products/1") ? "font-bold" : "font-light"
        }`}
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
