import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { CiCircleInfo } from "react-icons/ci";
  
const TABLE_HEAD = ["No", "Judul", "Deskripsi", "Status","Tanggal", ""];
const TABLE_ROWS = [
  {
    no: 1,
    title: "Error",
    description: "Error Ketika Menambahkan Keuangan di Table Transaksi",
    status: true,
    date: "23/04/18",
  },
  {
    no: 2,
    title: "Error",
    description: "Error Ketika Menambahkan Keuangan di Table Transaksi",
    status: true,
    date: "23/04/18",
  },
];
 
export const TabHistory = () => {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="font-semibold text-2xl font-poppins text-[#005697]">
              Riwayat Pengaduan
            </Typography>
            <Typography color="gray" className="mt-1 font-normal font-poppins">
            Berikut adalah status pengaduan yang telah anda ajukan
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<PiMagnifyingGlassLight className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-poppins leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ no, title, description, status, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={no}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal font-poppins"
                          >
                            {no}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal font-poppins"
                        >
                          {title}
                        </Typography>

                    </td>
                    <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal font-poppins"
                        >
                          {description}
                        </Typography>

                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          className="font-poppins"
                          variant="ghost"
                          size="sm"
                          value={status ? "online" : "offline"}
                          color={status ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal font-poppins"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Delete">
                        <IconButton variant="text">
                          <MdDelete className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Detail">
                        <IconButton variant="text">
                          <CiCircleInfo className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}