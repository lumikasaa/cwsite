import { useState } from "react";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Checkbox from "@mui/material/Checkbox";
import Description from "./Description";

const Task = ({content, hide}) => {

  const [completed, setCompleted] = useState(false);
  const [opened, setOpened] = useState(false);

  const completeClicked = () => {
    const changed = !completed
    setCompleted(changed)
  }

  const openClicked = () => {
    const changed = ! opened
    setOpened(changed)
  }  

  return (
    <>
    {(!hide || !completed) && (
    <div>
      <div>
        {content.title} 
        <IconButton aria-label="restartalticon" onClick={openClicked}>
          {opened ? (<ExpandLessRoundedIcon/>)
                  : (<ExpandMoreRoundedIcon/>)}
          </IconButton>
        <Checkbox onClick={completeClicked} checked={completed}  />
      </div>
      {opened && (<Description content={content.content} />)}
      </div>)}
      </>
  );

}

export default Task;