import Image from "next/image";
import React from "react";
// import myImage from "../"

type cardProps = {
  name: string;
  linkImg: string;
  description: string;
};

const Card = ({ name, linkImg, description }: cardProps) => {
  return (
    <div className="border border-slate-200 flex flex-col group gap-4 rounded-xl overflow-hidden shadow-xl cursor-pointer">
      <div className="wfull h-72 overflow-hidden">
        <Image
          src={linkImg}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-[115%] transition-all duration-1000"
        />
      </div>

      <div className="flex flex-col gap-3 overflow-hidden px-4 pb-3">
        <h3 className="font-cinzel text-xl">{name}</h3>
        <p>{description}</p>
        <div className="w-full mt-4">
          <button className="bg-[#452200] shadow-2xl  font-medium py-1 px-2 w-full text-white rounded-4xl">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
