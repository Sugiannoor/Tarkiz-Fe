import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { DetailContract } from "../modal/DetailContract";
import { Link } from "react-router-dom";
import { getContractByUser } from "@/features/admin/api/contract";
import { useQuery } from "react-query";
import Loading from "@/Components/Loading";

const TabContract = () => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => setOpen(!open);
  const { data, isLoading } = useQuery({
    queryKey: ["table-contract"],
    queryFn: getContractByUser,
  });

  if (isLoading ) {
    return <Loading />;
  }
  if (data?.length === 0 || data === undefined) {
    return <div className="text-lg font-medium">Kontrak Tidak Tersedia</div>;
  }
  return (
    <div>
      {data.map(({ name, id, description }) => (
        <Card key={id} className="mt-6 w-full">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-poppins"
            >
              {name}
            </Typography>
            <Typography className="font-poppins font-normal">
              Contract ID: {id} <br />
              Program: {description} <br />
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-end font-poppin gap-5">
            <Button
              onClick={() => {
                setSelectedId(id);
                handleModal();
              }}
            >
              Detail
            </Button>
            <Link to={`/profile/keluhan/${id}`}>
              <Button color="red">Keluhkan</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
      <DetailContract open={open} handler={handleModal} id={selectedId} />
    </div>
  );
};

export default TabContract;
