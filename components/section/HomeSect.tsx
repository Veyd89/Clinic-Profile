import Image from "next/image";
import React from "react";

const HomeSect = () => {
  return (
    <section className="flex">
      <header className="flex-1 box-border">
        <div className="pl-16 pt-6 flex flex-col gap-2">
          <h1 className="font-cinzel text-left text-[#656e6d] tracking-widest font-semibold 2xl:text-9xl lg:text-7xl text-5xl">
            Mirévelle Derma
          </h1>
          <p className=" leading-relaxed max-w-3xl 2xl:text-lg lg:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sequi, eum veniam quo a sed, tenetur molestiae provident eveniet
            architecto mollitia numquam error voluptatum accusamus aliquam quas
            corrupti quibusdam iure quod debitis! Optio, nemo! Veritatis alias
            dolore iste itaque maiores.
          </p>
          <div className="flex gap-5">
            <button className="w-full flex-1 mt-4 cursor-pointer font-cinzel max-w-fit px-6 py-3 rounded-full bg-[#452200] text-white font-semibold text-base ">
              Book Now
            </button>
            <button className="w-full flex-1 mt-4 cursor-pointer font-cinzel max-w-fit px-6 py-3 rounded-full bg-[#452200] text-white font-semibold text-base ">
              Learn more
            </button>
          </div>
        </div>
      </header>
      <div className="flex-1">
        <Image
          src={"/assets/Hero-Section.png"}
          alt={""}
          width={500}
          height={500}
          className="w-full h-auto"
        ></Image>
      </div>
    </section>
  );
};

export default HomeSect;

// import Image from "next/image";
// import React from "react";

// const HomeSect = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
//       {/* Kiri - Text */}
//       <div className="flex-1 text-center md:text-left">
//         <h1 className="font-cinzel font-bold text-5xl md:text-7xl leading-tight">
//           Mirévelle Derma
//         </h1>
//         <p className="mt-6 text-lg text-gray-700 max-w-md mx-auto md:mx-0">
//           Klinik perawatan kulit dan kecantikan untuk Anda yang mengutamakan
//           kualitas dan kenyamanan.
//         </p>
//       </div>

//       {/* Kanan - Gambar */}
//       <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
//         <Image
//           src="/assets/Hero-Section.png"
//           alt="Hero section"
//           width={500}
//           height={500}
//           className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default HomeSect;
