import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { GetProduct } from "../types/product";
import ModalDetail from "./ModalDetail";
import { useState } from "react";

type ProductProps = {
  dataProduct?: GetProduct;
  isLoading: boolean;
};

export const AllProduct = ({ dataProduct, isLoading }: ProductProps) => {
  const [isDetail, setIsDetail] = useState (false);
  const [selectedId, setSelectedId] = useState (0);
  const handleOpen = () => setIsDetail(!isDetail)
  if (isLoading || dataProduct === undefined ) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(2)].map((_, index) => (
          <Card
            key={index}
            placeholder={""}
            className="mt-6 w-96 animate-pulse"
          >
            <CardHeader
              placeholder={""}
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
            <CardBody placeholder={""}>
              <Typography
                placeholder={""}
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </CardBody>
            <CardFooter placeholder={""} className="pt-0">
              <Button
                placeholder={""}
                disabled
                tabIndex={-1}
                className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
              >
                &nbsp;
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Card placeholder={""} className="mt-6 w-96 animate-pulse">
          <CardHeader
            placeholder={""}
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
          <CardBody placeholder={""}>
            <Typography
              placeholder={""}
              as="div"
              variant="h1"
              className="mb-4 h-3 w-56 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </CardBody>
          <CardFooter placeholder={""} className="pt-0">
            <Button
              placeholder={""}
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
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {dataProduct.map((product) => (
        <Card
          key={product.id}
          placeholder={""}
          className="w-full flex flex-col max-w-[25rem] shadow-lg mb-4"
        >
          <CardHeader placeholder={""} floated={false} color="blue-gray">
            <img
              className="object-cover"
              src={"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
              alt={product.program}
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="flex-grow" placeholder={""}>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                placeholder={""}
                variant="h5"
                color="blue-gray"
                className="font-medium font-poppins"
              >
                {product.program}
              </Typography>
            </div>
            <Typography placeholder={""} color="gray" className="font-poppins">
              {product.description}
            </Typography>
            <div className="flex gap-2 mt-2">
              {product.tags.map((tags, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  value={tags}
                  className="font-raleway"
                />
              ))}
            </div>
          </CardBody>
          <CardFooter placeholder={""} className="pt-3">
            <Button placeholder={""} size="lg" fullWidth={true} onClick={ ()=> {
              setSelectedId (product.id);
              handleOpen();
            }}>
              Selengkapnya
            </Button>
          </CardFooter>
        </Card>
      ))}
      <ModalDetail open={isDetail} handleOpen={handleOpen} id={selectedId} />
    </div>
  );
};
