import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export const BestProduct = () => {
  return (
    <div id="product">
      <Card placeholder={""}
        className={`mt-5 w-full h-full flex-col lg:flex-row`}
      >
        <CardHeader
          placeholder={""}
          shadow={false}
          floated={false}
          className="m-0 lg:w-[55%] shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody placeholder={""} className="flex flex-col justify-center">
          <Typography
          placeholder={""}
            variant="h6"
            className="mb-4 text-3xl lg:text-5xl font-poppins text-black text-center"
          >
            Web Development
          </Typography>
          <Typography
            placeholder={""}
            color="gray"
            className="mb-8 text-center font-raleway  text-xl lg:text-2xl font-normal"
          >
            Membantu perusahaan mengoptimalkan proses keuangan melalui solusi
            teknologi terkini dan berkualitas tinggi.
          </Typography>
          <Link to={"/product/web"} className="w-full flex justify-center">
            <Button
              placeholder={""}
              variant="text"
              className="flex items-center gap-2 justify-center text-[#005697] font-semibold  font-poppins text-md"
            >
              Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>
      <Card placeholder={""} className={`w-full h-full flex-col lg:flex-row-reverse mt-5`}>
        <CardHeader
          placeholder={""}
          shadow={false}
          floated={false}
          className="m-0 lg:w-[55%] shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody placeholder={""} className="flex flex-col justify-center">
          <Typography
            placeholder={""}
            variant="h6"
            className="mb-4 text-3xl lg:text-5xl font-poppins text-black text-center"
          >
            Android Developer
          </Typography>
          <Typography
            placeholder={""}
            color="gray"
            className="mb-8 text-center font-raleway  text-xl lg:text-2xl font-normal"
          >
            Membantu perusahaan mengoptimalkan proses keuangan melalui solusi
            teknologi terkini dan berkualitas tinggi.
          </Typography>
          <Link to={"product/android"} className="w-full flex justify-center">
            <Button
              placeholder={""}
              variant="text"
              className="flex items-center gap-2 justify-center text-[#005697] font-semibold  font-poppins text-md"
            >
              Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
