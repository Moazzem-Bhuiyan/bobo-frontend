"use client";

import { usePathname } from "next/navigation";
import Navber from "../shared/Navber/Navber";


const NavbarWithConditionalRendering = () => {
  const pathname = usePathname();
  const shouldHideNavbar = pathname.startsWith("/auth");

  return !shouldHideNavbar ? <Navber/> : null;
};

export default NavbarWithConditionalRendering;
