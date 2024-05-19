import { Card, CardBody,Typography } from "@material-tailwind/react"
import { useQuery } from "react-query";
import { getDashboard } from "../api/dashboard";
import Loading from "@/Components/Loading";
type total = {
  total_users: number;
  total_contracts: number;
  total_complaints: number;
}
const CardDashboard = () => {
  const { data, isLoading, isError } = useQuery<total>({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });

  if (isLoading || isError) return <Loading/>

  return (
    <div>
      <Card placeholder={""} className="mt-6 w-[100%]">
      <CardBody placeholder={""} className="flex flex-col lg:flex-row justify-center items-center">
        <div className= "grid place-content-center rounded-full bg-white w-[90px] h-[90px] border-8 border-[#005697]">
            <div className="font-poppins text-xl font-semibold text-black">{data?.total_users ?? "-"}</div>
        </div>
        <div className="items-center">
        <Typography placeholder={""} className="ml-5 text-md mt-5 lg:mt-0 lg:text-xl font-semibold font-poppins">
          Total Pengguna
        </Typography>
        </div>
      </CardBody>
    </Card>
      <Card placeholder={""} className="mt-6 w-[100%]">
      <CardBody placeholder={""} className="flex flex-col lg:flex-row justify-center items-center">
        <div className= "grid place-content-center rounded-full bg-white w-[90px] h-[90px] border-8 border-[#005697]">
            <div className="font-poppins text-xl font-semibold text-black">{data?.total_contracts ?? "-"}</div>
        </div>
        <div className="items-center">
        <Typography placeholder={""} className="ml-5 text-md mt-5 lg:mt-0 lg:text-xl font-semibold font-poppins">
          Total Kontrak
        </Typography>
        </div>
      </CardBody>
    </Card>
      <Card placeholder={""} className="mt-6 w-[100%]">
      <CardBody placeholder={""} className="flex flex-col lg:flex-row justify-center items-center">
        <div className= "grid place-content-center rounded-full bg-white w-[90px] h-[90px] border-8 border-[#005697]">
            <div className="font-poppins text-xl font-semibold text-black">{data?.total_complaints ?? "-"}</div>
        </div>
        <div className="items-center">
        <Typography placeholder={""} className="ml-5 text-md mt-5 lg:mt-0 lg:text-xl font-semibold font-poppins">
         Total Komplaint
        </Typography>
        </div>
      </CardBody>
    </Card>
    </div>
  )
}

export default CardDashboard
