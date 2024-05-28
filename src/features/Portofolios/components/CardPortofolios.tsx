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
  if (!data) {
    return <div>Belum Ada Portofolio</div>;
  }
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.Portofolio_id}
          className="w-full flex flex-col max-w-[25rem] shadow-lg mb-4"
        >
          <div color="blue-gray" className="p-3 flex-grow">
            <img
              className="object-cover rounded-md"
              src={`http://localhost:8080/${item.path_file}`}
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
                {item.title}
              </Typography>
            </div>
            <Typography color="gray" className=" truncate font-poppins">
              {item.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-3">
            <Button size="lg" fullWidth={true}>
              Selengkapnya
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
