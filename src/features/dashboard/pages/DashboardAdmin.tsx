import { Breadcrumbs } from "@material-tailwind/react";
import CardDashboard from "../components/CardDashboard";
import { BarChart } from "../components/BarChart";

export const DashboardAdmin = () => {
  return (
    <div>
      <Breadcrumbs className="bg-[#005697] px-0">
        <a href="#" className="opacity-100 text-white font-poppins">
          <span>Admin</span>
        </a>
        <a
          href="#"
          className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Dashboard
        </a>
      </Breadcrumbs>
      <div className="font-poppins text-xl font-medium mt-2 text-white">
        Dashboard
      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-1 2xl:gap-10 mr-0 lg:mr-8">
        <CardDashboard />
      </div>
      <div>
        <BarChart />
      </div>
      <div></div>
    </div>
  );
};
