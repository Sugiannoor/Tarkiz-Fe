import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react"

const CardDashboard = () => {
  return (
    <div>
      <Card placeholder={""} className="mt-6 w-[100%]">
      <CardBody placeholder={""} className="flex flex-col lg:flex-row justify-center items-center">
        <div className= "grid place-content-center rounded-full bg-white w-[90px] h-[90px] border-8 border-[#005697]">
            <div className="font-poppins text-xl font-semibold text-black">125</div>
        </div>
        <div className="items-center">
        <Typography placeholder={""} className="ml-5 text-md mt-5 lg:mt-0 lg:text-xl font-semibold font-poppins">
          Total Pengguna
        </Typography>
        <Typography  placeholder={""} className="ml-5 text-sm lg:text-xl font-semibold font-poppins">
          22.5%
        </Typography>
        </div>
      </CardBody>
    </Card>
    </div>
  )
}

export default CardDashboard
