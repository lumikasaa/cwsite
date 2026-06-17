import { useState } from "react";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Checkbox from "@mui/material/Checkbox";
import Description from "./Description";
import Box, { BoxProps } from '@mui/material/Box';


const sx = { justifyContent: 'space-between', 
             display: 'flex',

}


const Task = ({content, hide, func}) => {

  const style = {
  p: 1,
  margin: '5px 6px 0px 20px',
  border: '2px solid #A000A0',
  alignItems: 'center',
  backgroundColor: content.completed ? '#99EDCC' : '#ffb4c6',
  fontWeight: 'bold'
}

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
      <Box style={style} sx={sx}>
        <IconButton aria-label="restartalticon" onClick={openClicked}>
          {opened ? (<ExpandLessRoundedIcon/>)
                  : (<ExpandMoreRoundedIcon/>)}
          </IconButton>
                <Box sx={{flexGrow: 1}}>{content.title}</Box> 
        <Checkbox onClick={completeClicked} checked={content.completed}  />
      </Box>
      {opened && (<Description content={content.content} completed={content.completed} />)}
      </div>)}
      </>
  );

}

export default Task;