import { IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler } from '@material-tailwind/react'
import { IoMdChatboxes } from "react-icons/io";
import { IoChatboxEllipses } from 'react-icons/io5';

const Bubble = () => {
  return (
    <div className=" w-full">
    <div className="fixed bottom-4 right-4">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <IoMdChatboxes className="hidden h-5 w-5 group-hover:block" />
            <IoChatboxEllipses className="block h-5 w-5 group-hover:hidden" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction>
            <IoMdChatboxes className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction>
            <IoChatboxEllipses className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction>
            <IoMdChatboxes className="h-5 w-5" />
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  </div>
  )
}

export default Bubble;
