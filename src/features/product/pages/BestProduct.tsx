import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


export const BestProduct = () => {
  return (
    <div>
      <Card
        className={`w-full h-full flex-col lg:flex-row`}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-[55%] shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center">
          <Typography
            variant="h6"
            className="mb-4 text-5xl font-poppins text-black text-center"
          >
            Web Development
          </Typography>
          <Typography
            color="gray"
            className="mb-8 text-center font-raleway text-2xl font-normal"
          >
            Membantu perusahaan mengoptimalkan proses keuangan melalui solusi
            teknologi terkini dan berkualitas tinggi.
          </Typography>
          <div className="w-full flex justify-center">
            <Button
              variant="text"
              className="flex items-center gap-2 justify-center text-[#005697] font-semibold  font-poppins text-md"
            >
              Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className={`w-full h-full flex-col lg:flex-row-reverse mt-5`}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center">
          <Typography
            variant="h6"
            className="mb-4 text-5xl font-poppins text-black text-center"
          >
            Android Developer
          </Typography>
          <Typography
            color="gray"
            className="mb-8 text-center font-raleway text-2xl font-normal"
          >
            Membantu perusahaan mengoptimalkan proses keuangan melalui solusi
            teknologi terkini dan berkualitas tinggi.
          </Typography>
          <div className="w-full flex justify-center">
            <Button
              variant="text"
              className="flex items-center gap-2 justify-center text-[#005697] font-semibold  font-poppins text-md"
            >
              Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
