import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Portofolio } from "../types/Portofolio";

type params = {
  data?: Portofolio[];
};
export const CardPortofolios = ({ data }: params) => {
  return (
    <Card
      placeholder={""}
      className="w-full flex flex-col max-w-[25rem] shadow-lg mb-4"
    >
      <div color="blue-gray" className="p-3 flex-grow">
        <img
          className="object-cover rounded-md"
          src={`http://localhost:8080/${data.path_files}`}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
          }}
        />
      </div>
      <CardBody placeholder={""}>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            placeholder={""}
            variant="h5"
            color="blue-gray"
            className="font-medium font-poppins"
          >
            {data.program}
          </Typography>
        </div>
        <Typography
          placeholder={""}
          color="gray"
          className=" truncate font-poppins"
        >
          {data.description}
        </Typography>
      </CardBody>
      <CardFooter placeholder={""} className="pt-3">
        <Button placeholder={""} size="lg" fullWidth={true}>
          Selengkapnya
        </Button>
      </CardFooter>
    </Card>
  );
};
