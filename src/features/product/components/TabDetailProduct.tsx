import {  Card, CardBody, Typography } from '@material-tailwind/react'
import { FiSettings } from 'react-icons/fi'

type params = {
    detail?: string
}

export const TabDetailProduct = ({detail} :params) => {
  return (
    <Card placeholder={""} className="w-full">
      <CardBody placeholder={""}>
      <FiSettings size={35}/>
        <Typography placeholder={""} variant="h5" color="blue-gray" className="my-2">
          Detail Services
        </Typography>
        <Typography placeholder={""}>
          {detail}
        </Typography>
      </CardBody>
    </Card>
  )
}
