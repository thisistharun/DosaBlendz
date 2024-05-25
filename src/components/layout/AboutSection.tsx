import { SectionProps } from "@/types/SectionProps";
import React from "react";

const AboutSection = ({ className }: SectionProps) => {
  return (
    <section id="about" className={className}>
      <div className="grid grid-cols-2">
        <div className="bg-[url('/assets/foodtruck.jpeg')] bg-center bg-no-repeat bg-cover"></div>
        <div className="p-24">
          <h1 className="mb-4 text-center">
            <span className=" text-primary">Dosa Blendz</span>
          </h1>
          <div className="text-gray-300">
            <p className="mb-4 text-justify">
              Our journey begins in the kitchen of a grandmother, where the
              aroma of freshly made dosas filled the air, bringing family and
              friends together. It was here, among the laughter and stories,
              that the secret of making the perfect instant dosa was passed
              down—a recipe that would inspire the creation of DosaBlendz.
            </p>
            <p>
              Incorporating grains like oats, brown rice, ragi, and millets,
              DosaBlendz pays homage to this ancient craft while infusing it
              with the goodness of whole grains. Our unique blend not only
              simplifies the process of making dosas but also enhances the
              nutritional profile, offering a rich source of fiber, vitamins,
              and minerals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
