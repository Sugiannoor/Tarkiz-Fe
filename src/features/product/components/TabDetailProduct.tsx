import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FiSettings } from "react-icons/fi";

type params = {
  detail?: string;
};

export const TabDetailProduct = ({ detail }: params) => {
  return (
    <Card className="w-full">
      <CardBody>
        <FiSettings size={35} />
        <Typography variant="h5" color="blue-gray" className="my-2">
          Detail Services
        </Typography>
        <Typography>{detail}</Typography>
      </CardBody>
    </Card>
  );
};
