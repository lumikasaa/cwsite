import { useState } from "react";
import Task from "./Task";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Checkbox from "@mui/material/Checkbox";

const Section = ({content, title, hide, func, id, completed}) => {

  const [opened, setOpened] = useState(false);

  const completeClicked = () => {
    func(id)
  };

  const openClicked = () => {
    const changed = ! opened
    setOpened(changed)
  }

  return (
    <>
    <div>
      <div>
        <IconButton aria-label="restartalticon" onClick={openClicked}>
          {opened ? (<ExpandLessRoundedIcon/>)
                  : (<ExpandMoreRoundedIcon/>)}
          </IconButton>
                  {title} 
        <Checkbox onClick={completeClicked} checked={completed}  />
      </div>
      <div>
        {opened && content.map(i => (
          <Task key={i.id} content={i} hide={hide} func={func}/>

        ))}
      </div>
    </div>
    </>
  );

}

export default Section;