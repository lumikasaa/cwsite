import { useState } from "react";
import Task from "./Task";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Checkbox from "@mui/material/Checkbox";
import Box, { BoxProps } from '@mui/material/Box';


const sx = { justifyContent: 'space-between', 
             display: 'flex',

}

const Section = ({content, title, hide, func, id, completed}) => {

  const style = {
    p: 1,
    margin: 5,
    border: '2px solid #A000A0',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: completed ? '#47D69D' : '#ff9cb3',
    fontFamily: 'Garamond',
    fontWeight: 'bold'
  }

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
    <div style={{width: '80%'}}>
      <Box sx={sx} style={style}>
        <IconButton aria-label="restartalticon" onClick={openClicked}>
          {opened ? (<ExpandLessRoundedIcon/>)
                  : (<ExpandMoreRoundedIcon/>)}
          </IconButton>
          <Box sx={{flexGrow: 1}}>{title} </Box>
        <Checkbox onClick={completeClicked} checked={completed}  />
      </Box>
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