import { Award } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconWrapper from "../IconWrapper";

const About = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center max-w-full xl:max-w-3xl gap-6 mx-auto">
        <h2 className="font-cinzel 2xl:text-5xl lg:text-4xl text-3xl font-semibold uppercase">
          About Us
        </h2>
        <p className="text-xs xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam
          minus suscipit aliquid beatae saepe culpa adipisci blanditiis tempore,
          velit consectetur tenetur officiis soluta cum dolorem ipsum commodi
          ipsam ducimus, dolores libero laboriosam nihil vel voluptatem fuga!
          Itaque, ipsa aspernatur.
        </p>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Image
            src={"/assets/About-1.jpg"}
            alt={""}
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          ></Image>
        </div>
        <div className="flex-[1.5] flex flex-col gap-5 items-center pt-2">
          <h3 className="text-2xl font-semibold uppercase">Why Choose Us</h3>
          <div className="flex flex-col px-6 gap-8">
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-3">
                <IconWrapper
                  name="Award"
                  color="#452200"
                  className="h-14 w-14"
                  strokeWidth={2}
                />
                <div className="flex flex-col items-center gap-2">
                  <h4 className="font-semibold text-center font-cinzel">
                    Dokter Berpengalaman
                  </h4>
                  <p className="text-sm text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    similique facilis inventore odio deserunt vero incidunt
                    ipsam quidem dolorum ad!
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <IconWrapper
                  name="ShieldCheck"
                  color="#452200"
                  className="h-14 w-14"
                  strokeWidth={2}
                />
                <div className="flex flex-col items-center gap-2">
                  <h4 className="font-semibold">Produk aman & terverifikasi</h4>
                  <p className="text-sm text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis accusamus ab tempore fuga placeat quasi earum
                    adipisci aliquid. Adipisci, reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-3">
                <IconWrapper
                  name="Users"
                  color="#452200"
                  className="h-14 w-14"
                  strokeWidth={2}
                />
                <div className="flex flex-col items-center gap-2">
                  <h4 className="font-semibold text-center font-cinzel">
                    Ribuan Klien Puas
                  </h4>
                  <p className="text-sm text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    similique facilis inventore odio deserunt vero incidunt
                    ipsam quidem dolorum ad!
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <IconWrapper
                  name="MessageSquareText"
                  color="#452200"
                  className="h-14 w-14"
                  strokeWidth={2}
                />
                <div className="flex flex-col items-center gap-2">
                  <h4 className="font-semibold">Konsultasi mudah & cepat</h4>
                  <p className="text-sm text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis accusamus ab tempore fuga placeat quasi earum
                    adipisci aliquid. Adipisci, reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <h2 className="font-cinzel 2xl:text-5xl lg:text-4xl text-3xl font-medium">
            About Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            facere aspernatur nesciunt libero quis optio, quisquam esse
            doloremque perspiciatis consequuntur ut natus assumenda tempore
            culpa? Illo fugit illum iusto voluptates obcaecati! At hic minima
            nihil incidunt corporis mollitia. Eos, rerum.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
