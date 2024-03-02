import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'


const TabContract = () => {
    const contractData = [
        {
          id: '123456',
          name: 'UI/UX Review Check',
          program: 'Program A', 
        },
        {
          id: '12156',
          name: 'Web Development',
          program: 'Program B',
        },
      ]; 
  return (
    <div>
      {contractData.map(({ id, name, program }) => (
        <Card key={id} placeholder={""} className="mt-6 w-full">
          <CardBody placeholder={""}>
            <Typography placeholder={""} variant="h5" color="blue-gray" className="mb-2 font-poppins">
              {name}
            </Typography>
            <Typography placeholder={""} className='font-poppins font-normal'>
              Contract ID: {id} <br />
              Program: {program} <br />
            </Typography>
          </CardBody>
          <CardFooter placeholder={""} className="pt-0 flex justify-end">
            <Button placeholder={""}>Keluhan</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default TabContract
