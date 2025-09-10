import Image from "next/image";
// import React, { useEffect, useState } from "react";
import ListNav from "./ListNav";

const Navbar = () => {
  // const sections = ["home", "about", "services", "contact"];
  // const [active, setActive] = useState("home");
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActive(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // 60% section terlihat → dianggap aktif
  //   );

  //   sections.forEach((id) => {
  //     const el = document.getElementById(id);
  //     if (el) observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);
  return (
    <nav className="w-full fixed font-raleway tracking-wide z-100 bg-[#faf1e1] text-base text-slate-700">
      <div className="container mx-auto flex justify-between items-center px-16 pt-2 pb-2">
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
          <ListNav>
            {" "}
            <a href="#home">Home</a>
          </ListNav>
          <ListNav>
            {" "}
            <a href="#about">About</a>
          </ListNav>
          <ListNav>
            {" "}
            <a href="#services">Services</a>
          </ListNav>
          {/* <ListNav> <a href="">Products</a></ListNav> */}
          <ListNav>
            {" "}
            <a href="#contact">Contact</a>
          </ListNav>

          {/*  */}
          {/* {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`px-3 py-1 rounded ${
                active === sec ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))} */}
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
