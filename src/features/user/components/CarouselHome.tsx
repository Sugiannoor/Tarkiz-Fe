import { Carousel } from "@material-tailwind/react";
export const CarouselHome = () => {
  return (
    <div className="relative" id="home">
      <Carousel
        loop={true}
        autoplay={true}
        placeholder=""
        className="rounded-xl h-96 mt-4"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="/IMG_4634.webp"
          alt="image hero"
          className="h-full w-full object-cover"
        />
        <img
          loading="lazy"
          src="/IMG_4638.webp"
          className="h-full w-full object-cover"
          alt="image hero"
        />
        <img
          loading="lazy"
          src="/IMG_4639.webp"
          className="h-full w-full object-cover"
          alt="image hero"
        />
      </Carousel>
      <div className="absolute top-10 lg:top-20 left-1/2 lg:left-72 -translate-x-1/2 text-center font-body lg:text-left">
        <h3 className="lg:text-5xl md:text-5xl text-4xl ">
          <span className="text-[#ffffff]">Informasi Cepat </span>
          <div className="lg:text-6xl text-[#ffffff]">Keputusan Tepat</div>
        </h3>
        <div className="font-body text-custom-primary-50 font-light text-md lg:text-lg mt-4">
          Informasi yang cepat dihasilkan
        </div>
        <div className="font-body text-custom-primary-50 font-light text-md lg:text-lg">
          dengan mengumpulkan data secara efektif
        </div>
        <div className="mt-4 flex justify-center lg:justify-start">
          <a
            href="#"
            className="bg-[#005697] rounded-md text-white font-body text-[16px] font-medium flex justify-center hover:bg-custom-primary-700 text-center md:w-[225px] w-40 md:h-[43px] h-10 items-center"
          >
            Mulai
          </a>
        </div>
      </div>
    </div>
  );
};
