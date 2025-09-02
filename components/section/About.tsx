import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex px-16 gap-6 py-8">
      <div className="flex-1">
        <Image
          src={"/assets/About-1.jpg"}
          alt={""}
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-3xl"
        ></Image>
      </div>
      <div className="flex-1 flex flex-col gap-5 items-center pt-2">
        <h2 className="font-cinzel 2xl:text-5xl lg:text-4xl text-3xl font-medium">
          About Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere
          aspernatur nesciunt libero quis optio, quisquam esse doloremque
          perspiciatis consequuntur ut natus assumenda tempore culpa? Illo fugit
          illum iusto voluptates obcaecati! At hic minima nihil incidunt
          corporis mollitia. Eos, rerum.
        </p>
      </div>
    </section>
  );
};

export default About;
