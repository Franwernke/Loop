import { Box, TextField, Typography } from "@mui/material"
import { ButtonRed } from "../LandingPage/styled"
import DropBox from "./DropBox"

interface FormProps {
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setDescription: (description: string) => void,
  setImageUrl: (imageUrl: string) => void,
  createRequest: () => void
}

function Form({setName, setEmail, setDescription, setImageUrl, createRequest}: FormProps) {
  return (
    <Box px={2}>
      <Box display={'flex'} justifyContent={'center'} mb={2}>
        <Typography variant={'h3'} color={'white'} fontWeight={900} textAlign={'center'} fontFamily={'Montserrat'}>
          Cadastro de Propaganda
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant={'h5'} color={'white'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
          Vias
        </Typography>
        <Typography variant={'h5'} mr={0.5} color={'#FFBD3E'} fontFamily={'Montserrat'} fontWeight={900}>
          impecáveis,
        </Typography>
        <Typography variant={'h5'} color={'white'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
          ads
        </Typography>
        <Typography variant={'h5'} color={'#E57361'} fontFamily={'Montserrat'} fontWeight={900}>
          imbatíveis!
        </Typography>
      </Box>
      <Box mt={4}>
        <TextField 
          sx={{width: '100%', bgcolor: 'white'}} 
          id="filled-basic" 
          label="Nome da Empresa" 
          variant="filled"
          onChange={(val) => setName(val.target.value)}
        />
      </Box>
      <Box mt={4}>
        <TextField 
          sx={{width: '100%', bgcolor: 'white'}} 
          id="contact-email" 
          label="Email de contato"
          variant="filled"
          onChange={(val) => setEmail(val.target.value)}
        />
      </Box>
      <Box mt={4}>
        <TextField 
          sx={{width: '100%', bgcolor: 'white'}} 
          id="contact-description" 
          label="Descrição" 
          variant="filled"
          onChange={(val) => setDescription(val.target.value)}
        />
      </Box>
      <Box mt={4}>
        <TextField 
          sx={{width: '100%', bgcolor: 'white'}} 
          id="image-url" 
          label="URL da imagem" 
          variant="filled"
          onChange={(val) => setImageUrl(val.target.value)}
        />
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'flex-end'}>
        <ButtonRed onClick={() => createRequest()}>
          Advertise
        </ButtonRed>
      </Box>
    </Box>
  )
}

export default Form