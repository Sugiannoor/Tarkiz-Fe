import { Spotlight } from "../../../Components/UI/Spotlights";


export const SpootlightsHome = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className=" font-raleway text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b text-white bg-opacity-50">
          Tarkiz <br /> is Better Choice
        </h1>
        <p className="mt-4 font-raleway font-normal text-base text-white max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}
