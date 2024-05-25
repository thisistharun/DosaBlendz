/* eslint-disable @next/next/no-img-element */
"use client";
import { DietFoodIcon } from "@/icons/DietFoodIcon";
import { PizzaIcon } from "@/icons/PizzaIcon";
import { ScooterIcon } from "@/icons/ScooterIcon";
import { SectionProps } from "@/types/SectionProps";
import { motion } from "framer-motion";

const dosas = [
  {
    title: "Dosa",
    image:
      "https://img.thecdn.in/135081/1642858791188_kal%20dosai.png?width=600",
  },
  {
    title: "Moongdal Dosa",
    image:
      "https://www.sharmispassions.com/wp-content/uploads/2011/04/Pesarattu3.jpg",
  },
  {
    title: "Ragi Dosa",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-Ny-mU1pMX_-yD7TwbDvq3zijXUn7DnyqA&usqp=CAU",
  },
  {
    title: "Oats Dosa",
    image:
      "https://aahaaramonline.com/wp-content/uploads/2024/09/Oats_Dosa_Gluten_Free_Vegan_Renal_Diet_Recipe.png",
  },
  {
    title: "Quinoa Dosa",
    image:
      "https://i.pinimg.com/originals/ac/4e/da/ac4eda57abdeff7c6ae1f40da404d92f.png",
  },
  {
    title: "Wheat Dosa",
    image: "https://i.ytimg.com/vi/tFOFUKPwLpI/maxresdefault.jpg",
  },
];

const fusionMenu = [
  {
    title: "Pizza Dosa",
    image:
      "https://i.pinimg.com/originals/db/4a/07/db4a07eddc9af78e6898d00e69babd72.jpg",
  },
  { title: "Dosa Burger", image: "/assets/burger-dosa.png" },
  {
    title: "Dosa Tacos",
    image:
      "https://aplateofhappiness.files.wordpress.com/2020/02/img_6970.jpg?w=1200",
  },
  {
    title: "Dosa Wrap",
    image:
      "https://www.neehees.com/wp-content/uploads/2020/10/Paneer-Bhurji-Dosa-Wrap500.png",
  },
  {
    title: "Pancakes",
    image:
      "https://www.geethsdawath.com/wp-content/uploads/2014/07/DSCN050411.jpg",
  },
];

const mixes = [
  {
    title: "Dosa Mix",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/instant-dosa-mix-2-480x270.jpg",
  },
  {
    title: "Moongdal Dosa Mix",
    image:
      "https://tarunaturalslite.myshopify.com/cdn/shop/products/moongdalflour_200x200.jpg?v=1619084914",
  },
  {
    title: "Ragi Dosa Mix",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KWa26Nv_9YiTbBbjQeFAmRCB90iIpRn7aA&usqp=CAU",
  },
  {
    title: "Oats Dosa Mix",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Instant_Dosa_Mix_Powder_Recipe_.jpg",
  },
  {
    title: "Quinoa Dosa Mix",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkCvrRHUKbL3sCAnq1NA6P2k03XMhrpi3z6PgrV0ov1xEH3eDoSe07yp_ch9lkhVXd6w&usqp=CAU",
  },
];

const ServicesSection = ({ className }: SectionProps) => {
  return (
    <>
      <section
        className={`bg-[url('https://e1.pxfuel.com/desktop-wallpaper/574/309/desktop-wallpaper-restaurant-menu-menu.jpg')] bg-repeat text-white ${className}`}
      >
        <div className="px-10 py-2">
          <h2 className="font-[40px] font-bold text-primary">Dosas</h2>
          <div className="flex flex-wrap">
            {dosas?.map((dosa, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col mx-10 my-5 items-center"
                >
                  <img
                    src={dosa.image}
                    alt={dosa.title}
                    className="h-[150px] w-[150px] rounded-lg"
                  ></img>
                  <p className="pt-5 font-[32px]">{dosa.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-5">
          <h2 className="font-[40px] font-bold text-primary">Fusion Menu</h2>
          <div className="flex  flex-wrap">
            {fusionMenu?.map((dosa, index) => {
              return (
                <div key={index} className="flex flex-col m-10 items-center">
                  <img
                    src={dosa.image}
                    alt={dosa.title}
                    className="h-[150px] w-[150px] rounded-lg"
                  ></img>
                  <p className="pt-5 font-[32px]">{dosa.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-5">
          <h2 className="font-[40px] font-bold text-primary">Dosas Mixes</h2>
          <div className="flex  flex-wrap">
            {mixes?.map((dosa, index) => {
              return (
                <div key={index} className="flex flex-col m-10 items-center">
                  <img
                    src={dosa.image}
                    alt={dosa.title}
                    className="h-[150px] w-[150px] rounded-lg"
                  ></img>
                  <p className="pt-5 font-[32px]">{dosa.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={`bg-[url('/assets/bg_wallpaper.png')] bg-repeat text-dark ${className}`}
      >
        <div className="container py-12">
          <div className="container max-w-4xl text-center mb-10">
            <h2 className="font-semibold mb-4">Our Services</h2>
            <p>
              From swift and reliable delivery to a diverse selection of healthy
              food options and authentic original recipes, we&apos;ve crafted a
              seamless experience for your dosa cravings.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 text-center p-6">
              <div className="flex items-center text-center justify-center mb-5">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{
                    rotate: 225,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  className="w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative "
                ></motion.span>
                <span className="absolute">
                  <DietFoodIcon className={"w-16"} />
                </span>
              </div>

              <h3 className="uppercase mb-4">Healthy Food</h3>
              <div>
                Savor the goodness of guilt-free indulgence with our Healthy
                Food options, crafted to bring you a perfect blend of nutritious
                ingredients without compromising on flavor.
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center p-6">
              <div className="flex items-center text-center justify-center mb-5">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{
                    rotate: 225,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  className="w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative"
                ></motion.span>
                <span className="absolute">
                  <ScooterIcon className={"w-16"} />
                </span>
              </div>
              <h3 className="uppercase mb-4">Fast Delivery</h3>
              <div>
                Experience the unbeatable convenience of Fast Delivery as we
                bring the piping hot perfection of our dosas straight to your
                doorstep.
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center p-6">
              <div className="flex items-center text-center justify-center mb-5">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{
                    rotate: 225,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  className="w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative"
                ></motion.span>
                <span className="absolute">
                  <PizzaIcon className={"w-16"} />
                </span>
              </div>
              <h3 className="uppercase mb-4">Original Recipes</h3>
              <div>
                Delight your taste buds with the authenticity of our Original
                Recipe, where every slice is a celebration of timeless flavors
                and culinary expertise.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
