import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Portofolio } from "../types/portofolio";

type PortofolioProps = {
  data?: Portofolio[];
  isLoading?: boolean;
};

export const AllPortofolio = ({ data, isLoading }: PortofolioProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(2)].map((_, index) => (
          <Card key={index} className="mt-6 w-96 animate-pulse">
            <CardHeader
              shadow={false}
              floated={false}
              className="relative grid h-56 place-items-center bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </CardHeader>
            <CardBody>
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                disabled
                tabIndex={-1}
                className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
              >
                &nbsp;
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Card className="mt-6 w-96 animate-pulse">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-56 place-items-center bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardBody>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-56 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  if (data === undefined || data.length === 0) {
    return (
      <div className="text-lg font-semibold mt-3 text-center">
        Data Portofolio Tidak Tersedia{" "}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data.map((item) => (
        <Card
          key={item.id}
          className="w-full flex flex-col max-w-[25rem] shadow-lg mb-4"
        >
          <div color="blue-gray" className="p-3 flex-grow">
            <img
              loading="lazy"
              className="object-cover rounded-md"
              src={`${import.meta.env.VITE_API_BASE_URL}/${item.path_files}`}
              alt={item.program}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
              }}
            />
          </div>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium font-poppins"
              >
                {item.program}
              </Typography>
            </div>
            <Typography color="gray" className=" truncate font-poppins">
              {item.description}
            </Typography>
            <div
              className="flex overflow-x-auto overflow-y-hidden mt-2 gap-5"
              style={{ scrollbarWidth: "none" }}
            >
              <Chip
                variant="outlined"
                value={item.start_date}
                className="font-raleway whitespace-nowrap"
              />
            </div>
          </CardBody>
          <CardFooter className="pt-3">
            <Link to={`/portofolio/${item.id}`}>
              <Button size="lg" fullWidth={true}>
                Selengkapnya
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
