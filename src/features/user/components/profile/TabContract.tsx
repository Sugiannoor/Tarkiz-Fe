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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["table-contract"],
    queryFn: getContractByUser,
  });

  if (isLoading || isError ) {
    return <Loading/>
  }
  if (data?.length === 0) {
    return <div>Data Tidak Tersedia</div>
  }
  return (
    <div>
      {data?.map(({ name, id, description }) => (
        <Card key={id} placeholder={""} className="mt-6 w-full">
          <CardBody placeholder={""}>
            <Typography
              placeholder={""}
              variant="h5"
              color="blue-gray"
              className="mb-2 font-poppins"
            >
              {name}
            </Typography>
            <Typography placeholder={""} className="font-poppins font-normal">
              Contract ID: {id} <br />
              Program: {description} <br />
            </Typography>
          </CardBody>
          <CardFooter
            placeholder={""}
            className="pt-0 flex justify-end font-poppin gap-5"
          >
            <Button
              placeholder={""}
              onClick={() => {
                setSelectedId(id);
                handleModal();
              }}
            >
              Detail
            </Button>
            <Link to={`/profile/keluhan/${id}`}>
            <Button placeholder={""} color="red">
              Keluhkan
            </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
      <DetailContract open={open} handler={handleModal} id={selectedId} />
    </div>
  );
};

export default TabContract;
