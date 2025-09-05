import Image from "next/image";
import React from "react";
import ListNav from "./ListNav";

const Navbar = () => {
  // image by freepik.com
  // @kroshka-nastya

  // <a href="https://www.freepik.com/free-photo/pedicure-process-home-salon-pedicure-foot-care-treatment-nail-process-professional-pedicures-master-blue-gloves-make-pedicure_11402494.htm">Image by kroshka__nastya on Freepik</a>
  return (
    // text-[#656e6d]
    // text-slate-800
    <nav className="w-full font-raleway tracking-wide z-100 bg-[#faf1e1] text-base text-slate-700  flex justify-between items-center px-16 pt-2 pb-5">
      <Image
        src={"/assets/Logo/Logo Fix 1.png"}
        alt="Logo"
        width={500}
        height={500}
        className=" w-[100px] "
      />
      {/* 686 heightnya logo fix 1 setelah diedit */}
      <ul className="flex gap-16 font-semibold content-center ">
        <ListNav>Home</ListNav>
        <ListNav>About</ListNav>
        <ListNav>Services</ListNav>
        {/* <ListNav>Products</ListNav> */}
        <ListNav>Contact</ListNav>
      </ul>
      <div className="">
        <button className="bg-[#8B5E3C] hover:opacity-70 py-3 px-2 rounded-full font-cinzel font-bold text-[white] flex items-center h-fit cursor-pointer">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
