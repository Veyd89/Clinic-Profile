import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="font-raleway  bg-[#faf1e1] text-[#656e6d] text-2xl  flex justify-between items-center px-14 pb-5">
      <Image
        src={"/assets/Logo/Logo Fix 1.png"}
        alt="Logo"
        width={100}
        height={100}
        className=" w-44 "
      />
      {/* 686 heightnya logo fix 1 setelah diedit */}
      <ul className="flex pt-4 gap-16  content-center ">
        <li className=" ">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <button className=" h-fit pt-4 ">Book Now</button>
    </nav>
  );
};

export default Navbar;
