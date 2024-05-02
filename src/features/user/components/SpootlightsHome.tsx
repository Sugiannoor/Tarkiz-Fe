import { Spotlight } from "@/Components/UI/Spotlights";

type props = {
  title?: string;
  subTitle?: string;
  description?: string;
}

export const SpootlightsHome = ({title, subTitle, description}: props) => {
  return (
    <div className="-mt-28 lg:mx-0 h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className=" font-raleway text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b text-white bg-opacity-50">
          {title} <br /> {subTitle}
        </h1>
        <p className="mt-4 font-raleway font-normal text-base text-white max-w-lg text-center mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
