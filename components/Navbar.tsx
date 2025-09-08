import Image from "next/image";
import React from "react";
import ListNav from "./ListNav";

const Navbar = () => {
  return (
    <nav className="w-full font-raleway tracking-wide z-100 bg-[#faf1e1] text-base text-slate-700">
      <div className="container mx-auto flex justify-between items-center px-16 pt-2 pb-5">
        {/* Logo */}
        <Image
          src={"/assets/Logo/Logo Fix 1.png"}
          alt="Logo"
          width={500}
          height={500}
          className="w-[100px]"
        />

        {/* Navigation Menu */}
        <ul className="flex gap-16 font-semibold items-center">
          <ListNav>Home</ListNav>
          <ListNav>About</ListNav>
          <ListNav>Services</ListNav>
          {/* <ListNav>Products</ListNav> */}
          <ListNav>Contact</ListNav>
        </ul>

        {/* CTA Button */}
        <div>
          <button className="bg-[#452200] hover:opacity-70 py-3 px-5 rounded-[10px] font-cinzel font-bold text-white flex items-center h-fit cursor-pointer transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
