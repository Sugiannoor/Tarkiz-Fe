import { IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler } from '@material-tailwind/react'
import { FaWhatsapp} from 'react-icons/fa';
import { IoMdChatboxes } from "react-icons/io";
import { IoChatboxEllipses } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Bubble = () => {
  return (
    <div className=" w-full">
    <div className="fixed bottom-4 right-4">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton placeholder={""} size="lg" className="rounded-full">
            <IoMdChatboxes className="hidden h-5 w-5 group-hover:block" />
            <IoChatboxEllipses className="block h-5 w-5 group-hover:hidden" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent placeholder={""}>
          <SpeedDialAction placeholder={""}>
            <Link to={'https://api.whatsapp.com/send?phone=6285345683025'} target='_blank'>
            <FaWhatsapp className="h-5 w-5" />
            </Link>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  </div>
  )
}

export default Bubble;
