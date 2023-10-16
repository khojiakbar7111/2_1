import { Button, Rating, Select, MenuItem, InputLabel, Stack,Container,TextField, Tooltip, Typography,Backdrop,CircularProgress,Dialog,} 
from "@mui/material";
import {useModal} from './hooks/use-modal'
import React from "react";
function App() {
  const [age, setAge] = React.useState(20);
  const handleChange = (event) => {
    setAge(event.target.value)
  }; 

  const { close,isopen,open } = useModal();

  const { close:modalClose,isopen:modalIsopen,open:modalOpen } = useModal();
  return (
    <Container>
     <Stack   sx={{mb:'30px'}}>
      <Button fullWidth variant="contained" >click</Button>
      <Button fullWidth variant="text" >click</Button>
      <Button fullWidth variant="outlined" >click</Button>
      </Stack>
      
      <Rating value={3 } />


      <InputLabel id="demo-simple-select-label">Age</InputLabel>

      <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select-label"
       fullWidth value={age}
        onChange={handleChange}>

         <MenuItem value={10}>10</MenuItem>
         <MenuItem value={20}>20</MenuItem>
         <MenuItem value={30}>30</MenuItem>
         <MenuItem value={40}>40</MenuItem>
      </Select>
      <Stack sx={{mt:'30px'}}>
         
      <TextField  placeholder="age" />
      
      </Stack>
      <Tooltip   title = "delete" arrow>
         <span>lorem</span>
      </Tooltip>
    <Typography variant="h1">color</Typography>
    <Typography variant="h2">color</Typography>
    <Typography variant="h3">color</Typography>
    <Typography variant="h4">color</Typography>
    <Typography variant="h5">color</Typography>
     
<hr />
     <Button variant="contained" onClick={()=> open()}>open</Button>
     <Backdrop open={isopen} onClick={() => close()}>
      <CircularProgress/>
     </Backdrop>
      <Button onClick={modalOpen} variant="outlined">ModalOpen</Button>
     <Dialog open={modalIsopen} onClose={modalClose}>
      <Stack p='20px' >
        <p><img src="data:image/jpeg;base64,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" alt="" /></p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laboriosam ipsam, dolore quam dicta exercitationem suscipit sint maxime error optio debitis voluptates inventore perspiciatis omnis, non expedita iure quo ducimus?
      </Stack>
     </Dialog>
    </Container>
  )
}

export default App
