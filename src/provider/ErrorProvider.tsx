import { Button } from "@material-tailwind/react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
}

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div
      className="flex flex-col h-screen justify-center items-center"
      role="alert"
    >
      <h2 className="text-3xl font-poppins font-semibold">
        Ooops! <span className="text-xl font-raleway">Something Wrong!</span>
      </h2>
      <p className="text-red-500 font-poppins">{error.message}</p>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

export const ErrorProvider: React.FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
