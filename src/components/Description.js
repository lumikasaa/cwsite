import Box, { BoxProps } from '@mui/material/Box';

const sx = { justifyContent: 'space-between', 
             display: 'flex',

}



const Description = ({content, completed}) => {
  const style = {
    padding: 10,
    margin: '0px 6px 5px 20px',
    border: '2px solid #A000A0',
    borderStyle: 'none solid solid solid',
    alignItems: 'center',
    backgroundColor: completed ? '#99EDCC' : '#ffb4c6'
}

  return (
    <Box sx={sx} style={style}>
      <>{content.map( i => (<>{i}<br/></>))}</>
    </Box>
  )
}

export default Description;