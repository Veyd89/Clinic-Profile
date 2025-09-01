import React, { ReactNode } from "react";

type ListNavProps = {
  children: ReactNode;
};

const ListNav = ({ children = "" }: ListNavProps) => {
  return (
    // #5C4033
    <li className="cursor-pointer hover:text-[#5C4033] hover:font-bold transition-all duration-1000 relative after:-translate-x-1/2 after:left-1/2 after:absolute after:border-b-[2px] after:border-[#5C4033] after:w-0  after:block hover:after:w-[90%]  after:-bottom-1 after:transition-all after:duration-[1000ms] ">
      {children}
    </li>
  );
};

export default ListNav;
