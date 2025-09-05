import React from "react";
import ExampleCard from "./ExampleCard";
import Card from "./Card";

const Services = () => {
  const cardLoop = (count: number) => {
    const elements = [];
    for (let i = 1; i <= count; i++) {
      elements.push(
        <Card
          key={i}
          name={"Treatment"}
          linkImg={`/assets/gallery-${i}.jpg`}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur deleniti voluptates maiores officia nobis."
          }
        />
      );
    }
    return elements;
  };
  // console.log(cardLoop(6));
  // const elements = [
  //   <p key="1">Satu</p>,
  //   <p key="2">Dua</p>,
  //   <p key="3">Tiga</p>,
  // ];

  return (
    <section className="flex flex-col gap-6 items-center px-8">
      <h2 className="font-cinzel 2xl:text-5xl lg:text-4xl text-3xl font-medium uppercase">
        Services
      </h2>
      <div className="grid grid-cols-3 w-full gap-8 justify-between">
        {cardLoop(8)}
      </div>
    </section>
  );
};

export default Services;
