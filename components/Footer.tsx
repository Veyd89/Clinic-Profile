import Image from "next/image";
import React from "react";
import IconWrapper from "./IconWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#452200] min-h-28 px-16 pt-4 pb-6 text-white flex flex-col gap-9">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-6 justify-center items-center ">
          <Image
            src={"/assets/Logo/Logo-Footer.png"}
            alt=""
            width={500}
            height={500}
            className="w-full h-[140px] object-cover"
          />
          <div className="flex gap-5">
            <IconWrapper
              name="Facebook"
              color="#1877F2"
              size={32}
              className="  rounded-full py-1"
            />

            <IconWrapper
              name="Instagram"
              color="#E4405F"
              size={32}
              className="  rounded-full py-1"
            />

            <IconWrapper
              name="Linkedin"
              color="#0A66C2"
              size={32}
              className="  rounded-full py-1"
            />

            <IconWrapper
              name="Phone"
              color="#25D366"
              size={32}
              className="  rounded-full py-1"
            />
          </div>
        </div>
        <div className="pt-3.5 max-w-2/6">
          <p>Address</p>
          <p>
            Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            vitae.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="font-semibold font-cinzel lowercase">
          All Image by{" "}
          <a
            className="underline"
            href="https://www.freepik.com/author/kroshka-nastya"
          >
            https://www.freepik.com/author/kroshka-nastya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
