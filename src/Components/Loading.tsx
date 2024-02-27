import { Spinner } from "@material-tailwind/react";

type props = {
    size?: "12"
}

const Loading = ({size}: props) => {
    return (
      <div
        className="flex justify-center items-center w-full h-screen"
      >
        <Spinner className={`h-${size} w-${size}`} />
      </div>
    );
  };
  
  export default Loading;