import { Button, Image, Link } from "@nextui-org/react";
import SlideBackground from "./SlideBackground";
import { SectionProps } from "@/types/SectionProps";

const HomeSlider = ({ className }: SectionProps) => {
  return (
    <section className={className}>
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}'
        className="relative h-[850px] z-0"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[calc(100%-100px)]">
          <div className="hs-carousel-body w-full absolute top-0 bottom-0 start-0 flex flex-nowrap duration-700 ease-in-out delay-200 opacity-0">
            {/*First Slide*/}
            <SlideBackground bgImage={"/assets/dosaBg.jpeg"}>
              <div className="w-full flex flex-col justify-center text-center h-full absolute z-10">
                <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4">
                  Welcome
                </span>
                <h1 className="mb-8 text-[40px] text-white">
                  We cook your desired <span className="block">DOSA</span>
                </h1>
                <h2 className="mb-16 text-[30px] text-black font-semibold">
                  Where tradition blends with nutrition
                </h2>
              </div>
            </SlideBackground>

            {/* Second Slide */}
            <SlideBackground
              bgImage={
                "https://i.pinimg.com/originals/db/4a/07/db4a07eddc9af78e6898d00e69babd72.jpg"
              }
            >
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className="max-w-xl text-center">
                  <h1 className="mb-8 text-[40px] text-white font-bold">
                    Pizza Dosa
                  </h1>
                  <h2 className="mb-16 text-[30px] text-white">
                    A Delicious Fusion of Pizza Toppings on a Crispy Dosa!
                  </h2>
                </div>
              </div>
            </SlideBackground>

            {/*Third Slide*/}
            <SlideBackground bgImage={"/assets/burger-dosa.png"}>
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className="max-w-xl text-center">
                  <h1 className="mb-8 text-[40px] text-white font-bold">
                    Dosa Burger
                  </h1>
                  <h2 className="mb-16 text-[30px] text-white">
                    The Crunchy Dosa Meets the Classic Burger!
                  </h2>
                </div>
              </div>
            </SlideBackground>

            {/*Fourth Slide*/}

            <SlideBackground
              bgImage={
                "https://aplateofhappiness.files.wordpress.com/2020/02/img_6970.jpg?w=1200"
              }
            >
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className="max-w-xl text-center">
                  <h1 className="mb-8 text-[40px] text-white font-bold">
                    Dosa Taco
                  </h1>
                  <h2 className="mb-16 text-[30px] text-white">
                    Spiced Fillings Wrapped in a Light, Dosa Shell!
                  </h2>
                </div>
              </div>
            </SlideBackground>

            {/* Fifth slide */}
            <SlideBackground
              bgImage={
                "https://www.neehees.com/wp-content/uploads/2020/10/Paneer-Bhurji-Dosa-Wrap500.png"
              }
            >
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className="max-w-xl text-center">
                  <h1 className="mb-8 text-[40px] text-white font-bold">
                    Dosa Wrap
                  </h1>
                  <h2 className="mb-16 text-[30px] text-white">
                    A Delightful Dosa Enveloping an Explosion of Fusion Flavors!
                  </h2>
                </div>
              </div>
            </SlideBackground>

            {/* Sixth slide */}
            <SlideBackground
              bgImage={
                "https://www.geethsdawath.com/wp-content/uploads/2014/07/DSCN050411.jpg"
              }
            >
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className="max-w-xl text-center">
                  <h1 className="mb-8 text-[40px] text-white font-bold">
                    Pancakes
                  </h1>
                  <h2 className="mb-16 text-[30px] text-white">
                    Fluffy Pancakes Reimagined with a Dosa Twist!
                  </h2>
                </div>
              </div>
            </SlideBackground>
          </div>
        </div>

        {/*Indicator buttons*/}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-32 start-0 end-0 space-x-3">
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
