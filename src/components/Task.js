import { useState } from "react";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Checkbox from "@mui/material/Checkbox";
import Description from "./Description";

const Task = ({content, hide, func}) => {

  const [opened, setOpened] = useState(false);

  const completeClicked = () => {
    func(content.id)
  }

  const openClicked = () => {
    const changed = ! opened
    setOpened(changed)
  }  

  return (
    <>
    {(!hide || !content.completed) && (
    <div>
      <div>
        <IconButton aria-label="restartalticon" onClick={openClicked}>
          {opened ? (<ExpandLessRoundedIcon/>)
                  : (<ExpandMoreRoundedIcon/>)}
          </IconButton>
                {content.title} 
        <Checkbox onClick={completeClicked} checked={content.completed}  />
      </div>
      {opened && (<Description content={content.content} />)}
      </div>)}
      </>
  );

}

export default Task;