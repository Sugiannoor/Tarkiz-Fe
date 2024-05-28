import {
  Card,
  // CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
// import Chart from "react-apexcharts";
// import { useQuery } from "react-query";
// import { getChart } from "../api/dashboard";
// import Loading from "@/Components/Loading";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const BarChart = () => {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["chart"],
  //   queryFn: getChart,
  // });

  // if (isLoading || isError) {
  //   return (
  //     <Loading/>
  //   )
  // }
  // const chartConfig = {
  //   height: 240,
  //   series: [
  //     {
  //       name: "Jumlah Keluhan",
  //       data: data,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     title: {
  //       show: "Keluhan",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     colors: ["#005697"],
  //     plotOptions: {
  //       bar: {
  //         columnWidth: "40%",
  //         borderRadius: 2,
  //       },
  //     },
  //     xaxis: {
  //       axisTicks: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //       labels: {
  //         style: {
  //           colors: "#616161",
  //           fontSize: "12px",
  //           fontFamily: "poppins",
  //           fontWeight: 400,
  //         },
  //       },
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: "#616161",
  //           fontSize: "12px",
  //           fontFamily: "poppins",
  //           fontWeight: 400,
  //         },
  //       },
  //     },
  //     grid: {
  //       show: true,
  //       borderColor: "#dddddd",
  //       strokeDashArray: 5,
  //       xaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //       padding: {
  //         top: 5,
  //         right: 20,
  //       },
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     tooltip: {
  //       theme: "dark",
  //     },
  //   },
  // };
  return (
    <Card className=" mt-10 lg:mt-14">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography className="text-xl font-poppins font-semibold text-black">
            Keluhan
          </Typography>
        </div>
      </CardHeader>
      {/* <CardBody   className="px-2 pb-0">
        <Chart type="area"{...chartConfig} />
      </CardBody> */}
    </Card>
  );
};
